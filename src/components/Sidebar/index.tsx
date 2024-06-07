import React, { useState } from "react";
import styles from "./sidebar.module.css";
import { ChatHistory } from "../../App";
import { LiaChevronCircleRightSolid, LiaEdit } from "react-icons/lia";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <LiaChevronCircleRightSolid
        className={styles.menuicon}
        size={30}
        onClick={toggleSidebar}
      />

      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}>
        <div className={styles.sidebarTop}>
          <img src={bot} alt="bot" />
          <span>New Chat</span>
          <LiaEdit onClick={handleNewChat} style={{ cursor: "pointer" }} />
        </div>

        <small className={styles.pastTag}>Past Conversation</small>

        <div className={styles.chatHistory}>
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

        <button className={styles.closeButton} onClick={toggleSidebar}>
          Close
        </button>
      </div>
    </>
  );
};

export default Sidebar;
