import React, { useState } from "react";

import Sidebar from "./components/Sidebar";
import StartPlate from "./components/ChatBox";
import InputBox from "./components/InputBox";

import data from "./data.json";
import "./App.css";
export interface ChatInterface {
  id?: number;
  type: string;
  userText?: string;
  botText?: string;

  // others
  timing?: string;
  feedback?: string;
  isLiked?: boolean | undefined;
}

const App: React.FC = () => {
  const [showPlate, setShowPlate] = useState<boolean>(false);
  const [chat, setChat] = useState<ChatInterface[]>([]);

  const handleShowPlate = (value: boolean) => {
    setShowPlate(value);
  };

  const addUserChat = (userChatObj: ChatInterface) => {
    if (userChatObj.userText) {
      handleShowPlate(false);

      setChat((prevState) => [...prevState, userChatObj]);
      handleBotResponse(userChatObj.userText);
    }
  };

  const handleBotResponse = (text: string) => {
    console.log(text, "==================>");
    console.log(data);
    // checking answer and adding to chatbox
  };
  return (
    <div className="app">
      <Sidebar />

      <div className="chat-area">
        <h2>Bot AI</h2>

        <StartPlate showPlate={showPlate} chats={chat} />
        <InputBox addUserChat={addUserChat} />
      </div>
    </div>
  );
};

export default App;
