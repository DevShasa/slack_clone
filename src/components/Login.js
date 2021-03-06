import React from 'react'
import styled from "styled-components"
import { auth, provider, signInWithPopup } from "../firebase/Firebase";
import Button from '@mui/material/Button';
import slackIcon from "../slack-logo-icon.png";

function Login() {

    const signIn = (e) =>{
        e.preventDefault();

        signInWithPopup(auth, provider).catch((error) => alert(error.message))

    }

    return (
        <LoginContainer>
            <LoginInner>
                <img src={slackIcon} alt ="slack" />
                <h1>Sign in to Organization</h1>
                <p>org.slack.com</p>
                <Button onClick={signIn}>Sign In</Button>
            </LoginInner>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`;

const LoginInner = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    >img{
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > button{
        margin-top: 50px;
        background-color: #0a8d48;
        color: #ffffff;

        :hover{
            background-color: #0a8d48;
            opacity: 0.8;
            color: white;
            transition: all 0.2s;
        }

    }
`;