import React, { useState } from 'react';
import style from './Tables.module.css'


export default function Tables() {
  /*  "1": [
    "create state ,store number , Generate table ",
    "cerate a button , update state with random value, update table"
  ],
  */

  const [count, setCount] = useState(2);
  let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const hanelupdate = () => {
    const value = Math.floor(Math.random() * 100 + 1);
    setCount(value);
  };

  return (
    <div className={style.main}>
      <h1 className={style.h1}>random Table Generator between 1 to 100</h1>
      <ul>
        {Array.map((ele) => {
          return <li>{count * ele}</li>;
        })}
      </ul>

      <button className={style.btn} onClick={hanelupdate}>Update</button>
    </div>
  );
}
