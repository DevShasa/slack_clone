import React, {useRef, useEffect} from 'react';
import styled from "styled-components";
import { useSelector } from "react-redux";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChatInput from './ChatInput';
import LinearProgress from '@mui/material/LinearProgress';
import { useDocument, useCollection } from "react-firebase-hooks/firestore";
import { db, collection } from "../firebase/Firebase";
import { doc, orderBy, query } from 'firebase/firestore';
import Message from "./Message";
import defaultUserImg from "../userImage.png";

function Chat() {
    //todo fetch the id from redux and use it to fetch room data


    const { roomId }  = useSelector(state =>state.app)
    const { messageLoading } = useSelector(state=> state.app)

    // Get the document
    const [ room ] = useDocument(
        roomId && doc(db, 'rooms', roomId)
    )
    // get messages
    // const q = query(collection(db, "rooms", roomId, "messages"), orderBy("timestamp", 'desc'));
    const [ roomMessages, roomMsgLoading ] = useCollection(
        roomId && query(collection(db, "rooms", roomId, "messages"), orderBy("timestamp", "asc"))
    )
    
    const chatRef = useRef(null)
    useEffect(()=>{
        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
        })
    },[roomId, roomMsgLoading])

    return (
        <ChatContainer>
            {room && roomMessages &&(
                <>
                    <Header>
                        <HeaderContent>
                            <HeaderLeft>
                                <h4>{room?.data().name}</h4>
                                <StarBorderOutlinedIcon />
                            </HeaderLeft>

                            <HeaderRight>
                                <p>
                                    <InfoOutlinedIcon /> Details
                                </p>
                            </HeaderRight>
                        </HeaderContent>
                        {messageLoading && <LinearProgress color="success"/>}
                        {roomMsgLoading && <LinearProgress color="primary"/>}
                    </Header>

                    <ChatMessages>
                        { roomMessages?.docs.map((doc)=>{
                            const { message, timestamp, user, /*userImage*/ } = doc.data();

                            return(
                                <Message 
                                    key={doc.id}
                                    message ={message}
                                    timestamp = {timestamp}
                                    user = {user}
                                    userImage = {defaultUserImg}
                                />
                            )
                        })}
                        <ChatBottom ref ={chatRef}/>
                    </ChatMessages>
                    <ChatInput channelName={room?.data().name} roomId={roomId} chatRef={chatRef}/>
                </>
            )}
        </ChatContainer>
    )
}

export default Chat

const ChatBottom = styled.div`
    padding-bottom: 100px;
`;

const ChatMessages = styled.div`
    /* position: relative;
    z-index: ; */
`;

const ChatContainer = styled.div`
    /* border: 1px solid red; */
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
     /* Chrome, Safari and Opera */
    ::-webkit-scrollbar {
        display: none;
    }
`;

const Header = styled.div`
    position: sticky;
    top: 60px;
    z-index: 10;
    background-color: #ffffff;
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;

`;


const HeaderLeft = styled.div`
    display:flex;
    align-items: center;

    >h4{
        text-transform: lowercase;
        font-weight: 600;
        letter-spacing: 0.8px;
    }

    > .MuiSvgIcon-root{
        margin-left: 10px;
        font-size:20px;
    }
`;

const HeaderRight = styled.div`
    > p{
        display: flex;
        align-items: center;
    }

    > p > .MuiSvgIcon-root{
        margin-right: 5px;
    }
`;