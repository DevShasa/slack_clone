import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
        <Header />
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={}/>
          </Routes>
        </BrowserRouter> */}
    </div>
  );
}

export default App;
