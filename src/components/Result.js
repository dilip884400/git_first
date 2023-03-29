import React from 'react';
import styles from './Result.module.css';

const Result = ({ score, maxScore, onRestart }) => {
  const percentage = (score / maxScore) * 100;
  const resultMessage = percentage >= 60 ? `Congratulations! You passed with a score of ${score}/${maxScore} (${percentage}%).` : `Sorry, you failed with a score of ${score}/${maxScore} (${percentage}%).`;

  return (
    <div className={styles.resultContainer}>
      <div className={styles.resultBox}>
        <h2 className={styles.resultHeader}>Result</h2>
        <p className={styles.resultMessage}>{resultMessage}</p>
        {percentage >= 60 && <button className={styles.restartButton} onClick={onRestart}>Restart Test</button>}
      </div>
    </div>
  );
};

export default Result;
