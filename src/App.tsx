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
  const [chatLoading, setChatLoading] = useState(false)

  const handleShowPlate = (value: boolean) => {
    setShowPlate(value);
  };

  const addUserChat = (userChatObj: ChatInterface) => {
    if (userChatObj.userText) {
      handleShowPlate(false);

      setChat((prevState) => [...prevState, userChatObj]);
      setChatLoading(true);
      setTimeout(() => {
        if (typeof userChatObj.userText === "string") {
          handleBotResponse(userChatObj.userText);
          setChatLoading(false);
        }
      }, 2000);
    }
  };

  const handleBotResponse = (text: string) => {
    const botResponse = data.find(
      (item) => item.question.toLowerCase() === text.toLowerCase()
    );

    // Generate the bot response object
    const botResponseObj: ChatInterface = {
      type: "bot",
      botText: botResponse
        ? botResponse.response
        : "As an AI Language Model, I don’t have the details",
    };

    // Add bot response to chat state
    setChat((prevState) => [...prevState, botResponseObj]);
  };
  return (
    <div className="app">
      <Sidebar />

      <div className="chat-area">
        <h2>Bot AI</h2>

        <StartPlate showPlate={showPlate} chats={chat} />
        <InputBox addUserChat={addUserChat} chatLoading={chatLoading} />
      </div>
    </div>
  );
};

export default App;
