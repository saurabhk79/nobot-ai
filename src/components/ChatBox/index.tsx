import React from "react";
import styles from "./chatbox.module.css";
import StartPlate from "../StartPlate";

interface ChatBoxInterface {
  showPlate: boolean;
}

const ChatBox: React.FC<ChatBoxInterface> = ({ showPlate }) => {
  return (
    <div className={styles.chatbox}>{showPlate ? <StartPlate /> : <></>}</div>
  );
};

export default ChatBox;
