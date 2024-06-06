import React from "react";
import styles from "./startplate.module.css";

const cardData: string[] = [
  "Hi, what is the weather",
  "Hi, what is my location",
  "Hi, what is the temperature",
  "Hi, how are you",
];
const StartPlate: React.FC = () => {
  return (
    <>
      <div className={styles.label}>
        <h2>How can I help you Today?</h2>
        {/* logo here */}
      </div>

      <div className={styles.cardsList}>
        {cardData.map((title, idx) => (
          <Card
            title={title}
            desc="Get immediate AI generated response"
            key={idx}
          />
        ))}
      </div>
    </>
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
