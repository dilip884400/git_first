import React from 'react';
import styles from './Question.module.css';

const Question = ({ question }) => {
  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionBox}>
        <h2 className={styles.question}>{question}</h2>
      </div>
    </div>
  );
};

export default Question;
