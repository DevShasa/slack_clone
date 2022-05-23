import React from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Header() {
    return (
        <HeaderContainer>

            <HeaderLeft>
                <HeaderAvatar  
                    src =""
                    alt = {``}
                    onClick = {``}
                />
                <AccessTimeIcon />
            </HeaderLeft>

            <HeaderSearch>
                <SearchIcon />
                <input 
                    placeholder='Search Here'
                />
            </HeaderSearch>

            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>

        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
    position: fixed;
    width: 100%;
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    flex: 0.3;
    margin-left: 20px;

    > .MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 20px;
    }

`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover{
        opacity: 0.8;
    }
`;

const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    display: flex;
    padding: 3px 50px 3px 50px; 
    border: 1px solid gray;

    input{
        background-color: transparent;
        width: 100%;
        text-align: center;
        border: none;
        outline:none;
        color: white;

        ::placeholder{
            color: rgb(168, 168, 168);
        }
    }
`;

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    > .MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 20px;
    }
`;