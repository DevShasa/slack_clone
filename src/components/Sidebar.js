import React from 'react';
import styled from 'styled-components';
import SidebarOption from './SidebarOption';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import CommentIcon from '@mui/icons-material/Comment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PeopleIcon from '@mui/icons-material/People';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection  } from "firebase/firestore"
import { db } from "../firebase/Firebase";
import CircularProgress from '@mui/material/CircularProgress';

function Sidebar() {

    // React firebase hooks 
    const [ rooms, loading, /*error*/ ] = useCollection(collection(db, "rooms"))
    console.log(rooms)

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Wolan Sha</h2>
                    <h3>
                        <FiberManualRecordIcon />  
                        User Name
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>
            
            <SidebarOption  Icon={CommentIcon} title="Threads"/>
            <SidebarOption Icon={InboxIcon} title="Mentions"/>
            <SidebarOption Icon={DraftsIcon} title="Saved Items"/>
            <SidebarOption Icon={BookmarkBorderOutlinedIcon} title="Channel Browser" />
            <SidebarOption Icon={PeopleIcon} title="People" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File Browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show Less" />
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr/>
            <SidebarOption Icon={AddIcon} title="Add Channel" addChanel/>

            {loading 
                ? <SidebarLoading> <CircularProgress sx={{color:"#ffffff"}} /> </SidebarLoading>
                : (
                    rooms?.docs.map((doc)=>(
                        <SidebarOption key={doc.id} id={doc.id} title={doc.data().name}/>
                    ))
                )
            }



        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    color: rgb(236, 236, 236);
    flex: 0.3;
    max-width:260px; /*never grow beyond this size*/
    overflow-y: scroll;

    /*chrome safari opera hide scrollbar*/
    ::-webkit-scrollbar{display:none;}
    /*Edge and internet explorer*/
    -ms-overflow-style: none;
    /*firefox*/
    scrollbar-width: none;

    > hr{
        height: 1px;
        border:0;
        background-color: #585058;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    
`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #585058;
    padding: 13px;

    > .MuiSvgIcon-root{
        font-size: 18px;
        background-color: white;
        color: #49274b;
        border-radius: 50%;
        padding: 6px;
        height: 30px;
        width: 30px;
    }
`;

const SidebarInfo = styled.div`
    flex: 1;

    > h2{
        font-size: 15px;
        font-weight:900;
        margin-bottom: 5px;
    }
    > h3{
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 13px;
        letter-spacing: initial;
    }

    > h3 > .MuiSvgIcon-root{
        font-size: 14px;
        margin-right: 2px;
        color: green;
        margin-top: 1px;
    }
`;

const SidebarLoading = styled.div`
    display: flex;
    justify-content: center;
`;