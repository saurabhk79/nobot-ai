import React from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import StartPlate from "./components/StartPlate";
import InputBox from "./components/InputBox";

const App: React.FC = () => {
  return (
    <div className="app">
      <Sidebar />

      <div className="chat-area">
        <h1>Bot AI</h1>

        <StartPlate />
        <InputBox />
      </div>
    </div>
  );
};

export default App;
