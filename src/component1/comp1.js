import comp1 from "./comp1.css"
import {useState} from "react"

function Comp1() {
  const [text, setText] = useState("")
  const [error, setError] = useState(null)

  function limitCheck(e){
    if(e.target.value.length > 10){
      setError("10 character limit executed")
    }else{
      setText(e.target.value)
      setError(null)
    }
  }
  return (
    <div className="limit">
    <input className="input" type="text" placeholder="Type here..." onChange={limitCheck} value={text} />
    <h3>{error}</h3>
    </div>
  );
}

export default Comp1;
