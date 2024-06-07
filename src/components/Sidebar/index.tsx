import React from "react";
import styles from "./sidebar.module.css";
import { ChatHistory } from "../../App";

import { LiaEdit } from "react-icons/lia";

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
        <div>{/* logo here */}</div>

        <span>New Chat</span>
        <LiaEdit onClick={handleNewChat} />
      </div>

      <span className={styles.pastTag}>Past Conversation</span>

      {/* Conversation history here */}
      {chatHistory
        .slice()
        .reverse()
        .map((history) => {
          return (
            <span
              className={styles.pastTag}
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
