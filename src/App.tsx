import React, { useState } from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import StartPlate from "./components/ChatBox";
import InputBox from "./components/InputBox";

interface ChatInterface {
  type: string;
  userText: string;
}
const App: React.FC = () => {
  const [showPlate, setShowPlate] = useState<boolean>(false);
  const [chat, setChat] = useState([]);

  const handleShowPlate = (value: boolean) => {
    setShowPlate(value);
  };
  return (
    <div className="app">
      <Sidebar />

      <div className="chat-area">
        <h2>Bot AI</h2>

        <StartPlate showPlate={showPlate} />

        <InputBox />
      </div>
    </div>
  );
};

export default App;
