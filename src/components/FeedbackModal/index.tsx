import React from "react";
import styles from "./feedbackModal.module.css";

interface FeedbackModalProps {}
const FeedbackModal: React.FC<FeedbackModalProps> = () => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.top}>
            <h3>Provide Additional Feedback</h3>
            <h3>X</h3>
          </div>

          <textarea name="" id="" rows={30}></textarea>

          <div className={styles.subButton}>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
