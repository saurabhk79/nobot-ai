import React, { useState } from "react";
import styles from "./inputBox.module.css";
import { ChatInterface } from "../../App";

interface InputBoxProps {
  addUserChat: (userChatObj: ChatInterface) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ addUserChat }) => {
  const [text, setText] = useState("");

  return (
    <div className={styles.inputBox}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => addUserChat({ type: "user", userText: text })}>
        Ask
      </button>
      <button>Save</button>
    </div>
  );
};

export default InputBox;
