import React from "react";
import style from '../artapp/Footer.module.css';
import Searchbar from "./Searchbar";

function Footer(){
    
        return (
            <footer className={style.body}>
                <Searchbar/>
            </footer>
        );
    
}

export default Footer;