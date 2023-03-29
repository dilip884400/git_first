import React from "react";
import styles from "./AnswerOption.module.css";

const AnswerOption = ({ answerOption, onChange }) => {
return (
<div className={styles.answerOptionContainer}>
<div className={styles.answerOption}>
<input
       type="radio"
       id={answerOption}
       name="answer"
       value={answerOption}
       onChange={onChange}
     />
<label htmlFor={answerOption}>{answerOption}</label>
</div>
</div>
);
};

export default AnswerOption;