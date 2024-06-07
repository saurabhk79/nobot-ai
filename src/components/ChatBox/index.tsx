/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import styles from "./chatbox.module.css";
import StartPlate from "../StartPlate";
import { ChatInterface } from "../../App";

import { GoThumbsdown, GoThumbsup } from "react-icons/go";

interface ChatBoxInterface {
  showPlate: boolean;
  chats: ChatInterface[];
}

const ChatBox: React.FC<ChatBoxInterface> = ({ showPlate, chats }) => {
  console.log(chats);
  return (
    <div className={styles.chatbox}>
      {showPlate ? (
        <StartPlate />
      ) : (
        <>
          {chats
            .slice()
            .reverse()
            .map((chat) => {
              return <Chat data={chat} key={chat.id} />;
            })}
        </>
      )}
    </div>
  );
};

export default ChatBox;

interface ChatProps {
  data: ChatInterface;
}

const Chat: React.FC<ChatProps> = ({ data }) => {
  return (
    <div className={styles.chatCard}>
      <div>{/* image here */}</div>

      <div>
        <h5>{data.type === "user" ? "You" : "Krishna AI"}</h5>
        <p>{data.type === "user" ? data.userText : data.botText}</p>

        <div className={styles.others}>
          <small>{data.timing}</small>

          {data.type === "bot" && (
            <span>
              <GoThumbsup /> <GoThumbsdown />
            </span>
          )}
        </div>

        <b>
          {data.type === "bot" && data.isLiked !== undefined ? (
            <div>Feedback : {data.feedback}</div>
          ) : null}
        </b>
      </div>
    </div>
  );
};
