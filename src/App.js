import React from 'react';
import './App.css';
import {Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
        <Header />
          <SlackBody>
              <Sidebar />
              <Routes>
                  <Route path="/" element={``}/>
              </Routes>
          </SlackBody>
    </div>
  );
}

export default App;

const SlackBody = styled.div`
  display: flex;
  height: 100vh;
`;