import React from "react";
import styles from "./sidebar.module.css";
import { ChatHistory } from "../../App";

interface SidebarProps {
  chatHistory: ChatHistory[];
}
const Sidebar: React.FC<SidebarProps> = ({ chatHistory }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        <div>{/* logo here */}</div>

        <span>New Chat</span>
        <div>{/* new icon here */}</div>
      </div>

      <span className={styles.pastTag}>Past Conversation</span>

      {/* Conversation history here */}
      {chatHistory
        .slice()
        .reverse()
        .map((history) => {
          return <span className={styles.pastTag}>{history.name}</span>;
        })}
    </div>
  );
};

export default Sidebar;
