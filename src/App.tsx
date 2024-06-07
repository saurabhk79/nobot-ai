import React, { useState } from "react";

import Sidebar from "./components/Sidebar";
import InputBox from "./components/InputBox";

import data from "./data.json";
import "./App.css";
import ChatBox from "./components/ChatBox";
import FeedbackModal from "./components/FeedbackModal";

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

export interface ChatHistory {
  id: number;
  name?: string;
  chats: ChatInterface[];
}

interface FeedbackInterface {
  id: number;
  isLiked?: boolean | undefined;
  feedback: string;
}

const App: React.FC = () => {
  const [showPlate, setShowPlate] = useState<boolean>(true);
  const [chat, setChat] = useState<ChatInterface[]>([]);
  const [chatLoading, setChatLoading] = useState(false);

  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([]);
  const [isModal, setIsModal] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackInterface>({
    id: 0,
    isLiked: undefined,
    feedback: "",
  });

  const handleShowPlate = (value: boolean) => {
    setShowPlate(value);
  };

  const addUserChat = (userChatObj: ChatInterface) => {
    if (userChatObj.userText) {
      handleShowPlate(false);

      const randomId = Math.ceil(Math.random() * 1000);
      const time = Date.now();
      const date = new Date(time);

      const formattedTime = date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      setChat((prevState) => [
        ...prevState,
        { ...userChatObj, id: randomId, timing: formattedTime },
      ]);
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

    const randomId = Math.ceil(Math.random() * 1000);
    const time = Date.now();
    const date = new Date(time);

    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    const botResponseObj: ChatInterface = {
      type: "bot",
      botText: botResponse
        ? botResponse.response
        : "As an AI Language Model, I don’t have the details",
      id: randomId,
      timing: formattedTime,
    };

    setChat((prevState) => [...prevState, botResponseObj]);
  };

  const saveChatHistory = () => {
    if (chatHistory.length) {
      console.log(chat[0].id, chatHistory[chatHistory.length - 1].chats[0].id);
      const currentChatFirstId = chat[0].id;
      const lastChatFirstId = chatHistory[chatHistory.length - 1].chats[0].id;

      if (currentChatFirstId !== lastChatFirstId) {
        const newChatHistoryEntry: ChatHistory = {
          id: chatHistory.length + 1,
          chats: chat,
        };

        setChatHistory([
          ...chatHistory,
          {
            ...newChatHistoryEntry,
            name: "User Chat" + newChatHistoryEntry.id,
          },
        ]);
      }
    } else {
      const newChatHistoryEntry: ChatHistory = {
        id: 1,
        chats: chat,
      };
      setChatHistory([
        { ...newChatHistoryEntry, name: "User Chat" + newChatHistoryEntry.id },
      ]);
    }
  };

  const handleNewChat = () => {
    saveChatHistory();

    setChat([]);
    handleShowPlate(true);
  };

  const handleChangeChat = (id: number) => {
    // saveChatHistory();
    setShowPlate(false);

    const changeChat: ChatInterface[] | undefined = chatHistory.find(
      (history) => history.id === id
    )?.chats;

    if (typeof changeChat !== "undefined") {
      setChat(changeChat);
    }
  };

  const handleOpenModal = (
    value: boolean,
    liked?: boolean,
    chatId?: number
  ) => {
    setIsModal(value);

    if (chatId) {
      setFeedback({ ...feedback, isLiked: liked, id: chatId });
    }
  };

  const handleFeedback = (text: string) => {
    if (text) {
      const updatedFeedback = { ...feedback, feedback: text };

      setFeedback(updatedFeedback);

      const newChats = chat.map((ch) => {
        if (ch.id === updatedFeedback.id) {
          return {
            ...ch,
            ...updatedFeedback,
          };
        }
        return ch;
      });

      setChat(newChats);
      setFeedback({
        id: 0,
        isLiked: undefined,
        feedback: "",
      });
    }
  };

  return (
    <div className="app">
      <Sidebar
        chatHistory={chatHistory}
        handleNewChat={handleNewChat}
        handleChangeChat={handleChangeChat}
      />

      <div className="chat-area">
        <h2>Bot AI</h2>

        <ChatBox
          showPlate={showPlate}
          chats={chat}
          handleOpenModal={handleOpenModal}
        />
        <InputBox
          addUserChat={addUserChat}
          chatLoading={chatLoading}
          saveChatHistory={saveChatHistory}
        />
      </div>

      {isModal && (
        <FeedbackModal
          handleOpenModal={handleOpenModal}
          handleFeedback={handleFeedback}
        />
      )}
    </div>
  );
};

export default App;
