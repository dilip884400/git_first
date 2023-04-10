import React, { useState } from 'react';


export default function Greetings() {
  //   3": [
  //     "create an array with multiple greetings",
  //     "create a button and handle click on button ",
  //     "show the next greeting message on h1"
  //   ]

  const [count, SetCount] = useState(0);

  let array = ['Hello!!!',"Good to see you. ...","Welcome to FunctionUp"," India's #1 Pay After Placement Coding Bootcamp"];

  function handleCount() {
    if (count < array.length - 1) {
      SetCount(count + 1);
    } else {
      SetCount(0);
    }
  }

  return (
    <div>
      <h1>{array[count]}</h1>
      <button onClick={handleCount}>Next Greeting</button>
    </div>
  );
}