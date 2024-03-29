import React from "react";
import style from '../artapp/ArtApp.module.css';
import Header from "./Header/Header";
import Menu from "./Menu";
import Jobs from "./Jobs";
import Footer from "./Footer/Footer";
import { useState, useRef } from "react";
function ArtApp(props) {

  const [maszyna, setMaszyna] = useState("");
  const ChildRef = useRef();

  function giveMeJobs(maszyna) {
    setMaszyna(maszyna);
    ChildRef.current.callChildFunction(maszyna);
  }

  const refContainer = useRef();

  return (
    <div id='grid-container' className={style.gridContainer}>
      <Header />
      <Jobs ref={ChildRef} maszyna={maszyna} />
      <Footer giveMeJobs={(maszyna) => giveMeJobs(maszyna)} />
    </div>
  );

}
export default ArtApp;