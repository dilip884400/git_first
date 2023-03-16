import React from "react";
import {useState} from "react";
import component2 from "./component2.css"

export default function Comp2() {
  const [todo,setTodo]=useState(0)

  

  const image=[
    "https://i0.wp.com/malevus.com/wp-content/uploads/2022/09/einstein.jpeg?w=1200&ssl=1",
    
    "https://media.sciencephoto.com/image/c0230225/800wm/C0230225-Portrait_of_Isaac_Newton.jpg",

    "https://im.indiatimes.in/photogallery/2020/Oct/apj-abdul-kalam-1_5f87ff08ce458.jpg?w=600&h=450&cc=1",

    "https://static.javatpoint.com/biography/images/cv-raman.png"
  ]
  const len =image.length;

  function handleChange(){
    if(todo==len-1){
      setTodo(0)
    }
    else{
    setTodo(todo+1)
    }
  }

  return (
    <div className="Parent">
      <div className="child">
        <img src={image[todo]} />
        
     </div>
     <div className="child">
     <button className="button" onClick={handleChange}>Change Pic</button>
     </div>
    </div>
  );
}