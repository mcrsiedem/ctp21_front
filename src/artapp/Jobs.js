import React, {Component} from "react";
import Row from "./Row";
import style from '../artapp/Jobs.module.css';

// function Jobs(){
//     return (
//     <div>
//          jobss
//     </div>
//     );
// }

class Jobs extends Component{
    render(){
        return(
            <div className={style.body}>


              <Row/>
        
        

            </div>
        );
    }
}
export default Jobs;