import React, { useState } from "react";
import styles from "./feedbackModal.module.css";

interface FeedbackModalProps {
  handleOpenModal: (value: boolean, liked?: boolean, chatId?: number) => void;
  handleFeedback: (text: string) => void;
}
const FeedbackModal: React.FC<FeedbackModalProps> = ({
  handleFeedback,
  handleOpenModal,
}) => {
  const [feedbackText, setFeedbackText] = useState("");

  const handleSubmit = () => {
    if (feedbackText) {
      handleFeedback(feedbackText);
      handleOpenModal(false);
    }
  };
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.top}>
            <h3>Provide Additional Feedback</h3>
            <h3 onClick={() => handleOpenModal(false)}>X</h3>
          </div>

          <textarea
            name=""
            id=""
            rows={30}
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          ></textarea>

          <div className={styles.subButton}>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
