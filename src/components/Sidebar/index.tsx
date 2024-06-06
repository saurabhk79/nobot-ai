import React from "react";
import styles from "./sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        <div>{/* logo here */}</div>

        <span>New Chat</span>
        <div>{/* new icon here */}</div>
      </div>

      <div className={styles.pastTag}>
        Past Conversation
      </div>

      {/* Conversation history here */}
    </div>
  );
};

export default Sidebar;