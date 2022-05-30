import React from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { auth, signOut, db } from "../firebase/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocument } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import { doc } from 'firebase/firestore';

function Header() {

    const { roomId } = useSelector(state => state.app)
    const [ roomDetails ] = useDocument( roomId && doc(db, 'rooms', roomId))
    const [ user ] = useAuthState(auth)

    return (
        <HeaderContainer>

            <HeaderLeft>
                <HeaderAvatar  
                    src ={user?.photoURL}
                    alt = {user?.displayName}
                    onClick = {()=>signOut(auth)}
                />
                <AccessTimeIcon />
            </HeaderLeft>

            <HeaderSearch>
                <SearchIcon />
                <input 
                    placeholder={`Search ${roomId && roomDetails ? roomDetails?.data().name : "channel"}`}
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
    width:100%;
    top:0;
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
    /* opacity: 1; */
    border-radius: 6px;
    background-color: #421f44;
    display: flex;
    padding: 3px 50px 3px 50px; 
    border: 1px solid gray;
    color: gray;

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
    flex-direction: column;
    align-items: flex-end;
    > .MuiSvgIcon-root{
        /* margin-left: auto; */
        margin-right: 20px;
    }
`;