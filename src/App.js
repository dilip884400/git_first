import React, { useState } from "react";//This line imports the React library and the useState hook from the "react" package.
import styles from "./components/styles.module.css";//This line imports a CSS file for styling the component. The styles are stored in an object called styles.
import Header from "./components/Header";//This line imports another React component called "Header" from a file called "Header.js".
import Left from "./components/left";//This line imports a React component called "Left" from a file called "left.js".
import Right from "./components/right";//This line imports a React component called "Right" from a file called "right.js".


function App() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div>
      <Header toggleMenu={toggleMenu} showMenu={showMenu} />
      <section className={styles.content}>
        <Left />
        <Right />
      </section>
    </div>
  );
}

export default App;