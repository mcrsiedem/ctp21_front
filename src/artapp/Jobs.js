import React, {Component,useEffect, useState} from "react";
import Row from "./Row";
import style from '../artapp/Jobs.module.css';
import axios from "axios";
import {ip} from "../Host";



function Jobs(props){

    const [notes,setNotes] = useState();
    

    async function fechDruk(){
        const res = await axios.get(ip + 'druk/H3/1');
        const notes2 =[...res.data];
        // const notes =[...res.data].filter(row=> row.status !== "Wydrukowane")
        //                           .filter(row=> row.status !== "Nowe")
        //                           .filter(row=> row.status !== "Pliki")
        //                           .filter(row=> row.status !== "Akcept")
        //                           .filter(row=> row.status !== "Sfalcowane")
        //                           .filter(row=> row.status !== "Falcowanie")
        //                           .filter(row=> row.status !== "Oprawione")
        //                           .filter(row=> row.status !== "Oddane")
        //                           .filter(row=> row.status !== "Uszlachetnione")
        //                           .filter(row=> row.status !== "Nieaktywne")
        //                           .filter(row=> row.typ !== "Przerwa");
        setNotes(notes2);  
  
        };


        useEffect(()=>{
            fechDruk();
          
        },[]);

    return (

        <div className={style.center}>
        <div className={style.body}>

          { notes.map((row) =>{
            return (
                    <Row
                        key={row.id}
                        title={row.klient}
                        body ={row.praca}
                        poczatekDruku={row.poczatekDruku}
                        czasDruku={row.czasDruku}
                        koniecDruku={row.koniecDruku}
                        id ={row.id}
                        // updateDruk={()=>this.updateDruk(row.id)}
                        klient={row.klient}
                        nrZlecenia={row.nrZlecenia}
                        rokZlecenia={row.rokZlecenia}
                        nazwa={row.nazwa}
                        // updateDrukNiewydrukowane={()=>this.updateDrukNiewydrukowane(row.id)}
                        typ={row.typ}
                        format={row.formatPapieru}
                        status={row.status}

            />
            );
                
          })}



        </div>
        </div>
    );
}


export default Jobs;