import React from "react";
import styles from "./inputBox.module.css";

const InputBox: React.FC = () => {
  return (
    <div className={styles.inputBox}>
      <input type="text" />
      <button>Ask</button>
      <button>Save</button>
    </div>
  );
};

export default InputBox;
