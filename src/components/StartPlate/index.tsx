import React from "react";
import styles from "./sidebar.module.css";

const StartPlate: React.FC = () => {
  return (
    <div className={styles.startPlate}>
      <div className={styles.label}>
        <h2>How can I help you Today?</h2>
        {/* logo here */}
      </div>

      <div className={styles.cardsList}>
        {Array(4)
          .fill(-1)
          .map((_, idx) => (
            <Card
              title="Hello"
              desc="Get immediate AI generated response"
              key={idx}
            />
          ))}
      </div>
    </div>
  );
};

export default StartPlate;

interface CardProps {
  title: string;
  desc: string;
}

const Card: React.FC<CardProps> = ({ title, desc }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>

      <p>{desc}</p>
    </div>
  );
};
