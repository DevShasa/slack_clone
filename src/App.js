import React from 'react';
import {Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "./firebase/Firebase";
import slackImage from "./slack-logo-icon.png";
import Spinner from "react-spinkit";

function App() {

  const [ user, loading ] = useAuthState(auth)

  if(loading){
    return (
      <AppLoading>
        <AppLoadingContent>
            <img src={slackImage} alt="slack"/>
            <Spinner name="ball-spin-fade-loader" color="purple" fadeIn='none'/>
        </AppLoadingContent>
      </AppLoading>
    )
  }

  return (
    <div className="App">
      {!user
        ? <Login />
        : (
            <>
              <Header />
              <SlackBody>
                  <Sidebar />
                  <Routes>
                      <Route path="/" element={<Chat />}/>
                  </Routes>
              </SlackBody>
            </>
        )
      }
    </div>
  );
}

export default App;

const SlackBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  >img{
    height: 100px;
    object-fit: contain;
    padding: 20px;
    margin-bottom: 40px;
  }
`;