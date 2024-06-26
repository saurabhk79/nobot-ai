/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import styles from "./chatbox.module.css";
import StartPlate from "../StartPlate";
import { ChatInterface } from "../../App";
import user from "../../assets/user.png";
import bot from "../../assets/bot.png";

import { GoThumbsdown, GoThumbsup } from "react-icons/go";

interface ChatBoxInterface {
  showPlate: boolean;
  chats: ChatInterface[];
  handleOpenModal: (value: boolean, liked: boolean, chatId?: number) => void;
}

const ChatBox: React.FC<ChatBoxInterface> = ({
  showPlate,
  chats,
  handleOpenModal,
}) => {
  console.log(chats);
  return (
    <div className={styles.chatbox}>
      {showPlate ? (
        <StartPlate />
      ) : (
        <div className={styles.onlyChats}>
          {chats
            .slice()
            .reverse()
            .map((chat) => {
              return (
                <Chat
                  data={chat}
                  key={chat.id}
                  handleOpenModal={handleOpenModal}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default ChatBox;

interface ChatProps {
  data: ChatInterface;
  handleOpenModal: (value: boolean, liked: boolean, chatId?: number) => void;
}

const Chat: React.FC<ChatProps> = ({ data, handleOpenModal }) => {
  return (
    <div className={styles.chatCard}>
      <img src={data.type === "user" ? user : bot} alt="dp" />

      <div>
        <h5>{data.type === "user" ? "You" : "Krishna AI"}</h5>
        <p>{data.type === "user" ? data.userText : data.botText}</p>

        <div className={styles.others}>
          <small>{data.timing}</small>

          {data.type === "bot" && (
            <span>
              <GoThumbsup
                cursor={"pointer"}
                onClick={() => handleOpenModal(true, true, data.id)}
                style={{
                  margin: "0 6px",
                  color: data.isLiked ? "var(--color-primary)" : "",
                }}
              />
              <GoThumbsdown
                cursor={"pointer"}
                onClick={() => handleOpenModal(true, false, data.id)}
                style={{
                  color: data.isLiked === false ? "var(--color-primary)" : "",
                }}
              />
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
