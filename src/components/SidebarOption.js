import React from 'react'
import styled from "styled-components";
import { db } from "../firebase/Firebase";
import { collection, addDoc } from "firebase/firestore"

function SidebarOption({ Icon, title, addChanel, id }) {


    const NewChannel = async() =>{
        const channelName = prompt('Please enter the channel Name')


        if(channelName){
            // create a new collection, messages will be collection documents
            const docRef = await addDoc(collection(db, "rooms"),{
                name : channelName.trim()
            });
            console.log("new room created with id: " + docRef.id)
        }
    }

    const selectChannel = () =>{
        console.log("Channel selected")
    }

    return (
        <SidebarOptionContainer onClick={addChanel ? NewChannel : selectChannel}>
            {Icon &&  <Icon />}

            {/* if an icon is present the second child is the title
            if icon is not present then second child is channel selector */}
            { Icon
                ? (<h3>{ title }</h3>)
                : (
                    <Chanel>
                        <span># </span>
                        {title}
                    </Chanel>
                )
            }
        </SidebarOptionContainer>
    )
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
    display: flex;
    padding: 8px;
    align-items: center;

    :hover{
        background-color: #340e36;
        opacity: 0.9;
        cursor: pointer;
    }

    > h3{
        font-size: 14px;
        font-weight: 400;
        margin-left: 8px;
    }

    > .MuiSvgIcon-root{
        padding: 2px;
    }
`;

const Chanel = styled.h3`
    > span{
        margin-right: 5px;
        font-weight: 900;
        font-size:20px;
    }
`;