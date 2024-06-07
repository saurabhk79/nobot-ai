import React from "react";
import styles from "./sidebar.module.css";
import { ChatHistory } from "../../App";

import { LiaEdit } from "react-icons/lia";
import bot from "../../assets/bot.png";

interface SidebarProps {
  chatHistory: ChatHistory[];
  handleNewChat: () => void;
  handleChangeChat: (id: number) => void;
}
const Sidebar: React.FC<SidebarProps> = ({
  chatHistory,
  handleNewChat,
  handleChangeChat,
}) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        <img src={bot} alt="bot" />

        <span>New Chat</span>
        <LiaEdit onClick={handleNewChat} style={{ cursor: "pointer" }} />
      </div>

      <small className={styles.pastTag}>Past Conversation</small>

      {chatHistory
        .slice()
        .reverse()
        .map((history) => {
          return (
            <span
              className={styles.otherChats}
              onClick={() => handleChangeChat(history.id)}
              key={history.id}
            >
              {history.name}
            </span>
          );
        })}
    </div>
  );
};

export default Sidebar;
