import React from 'react'
import styled from "styled-components";
function SidebarOption({ Icon, title, addChanel, id }) {

    const newChannel = () =>{
        console.log("New channel added")
    }

    const selectChannel = () =>{
        console.log("Channel selected")
    }

    return (
        <SidebarOptionContainer onClick={addChanel ? newChannel : selectChannel}>
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