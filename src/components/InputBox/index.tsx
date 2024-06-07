import React, { useState } from "react";
import styles from "./inputBox.module.css";
import { ChatInterface } from "../../App";

interface InputBoxProps {
  addUserChat: (userChatObj: ChatInterface) => void;
  chatLoading: boolean;
}

const InputBox: React.FC<InputBoxProps> = ({ addUserChat, chatLoading }) => {
  const [text, setText] = useState("");

  return (
    <div className={styles.inputBox}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={chatLoading}
      />
      <button
        onClick={() => addUserChat({ type: "user", userText: text })}
        disabled={chatLoading}
      >
        Ask
      </button>
      <button>Save</button>
    </div>
  );
};

export default InputBox;
