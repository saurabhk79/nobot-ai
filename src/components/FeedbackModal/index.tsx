import React, { useState } from "react";
import styles from "./feedbackModal.module.css";
import bulb from "../../assets/bulb.png";

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
          <div className={styles.top}>
            <div>
              <img src={bulb} alt="bulb" />
              <span>Provide Additional Feedback</span>
            </div>
            <span onClick={() => handleOpenModal(false)} style={{cursor: "pointer"}}>X</span>
          </div>

          <textarea
            rows={6}
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          ></textarea>

          <div className={styles.subButton}>
            <button onClick={handleSubmit}>Submit</button>
          </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
