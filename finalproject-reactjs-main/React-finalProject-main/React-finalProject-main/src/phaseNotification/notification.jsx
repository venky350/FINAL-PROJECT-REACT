import React from "react";
import style from '../phaseCharts/charts.module.css'
function Notification(){
    let ldata=JSON.parse(localStorage.getItem('data1'))

    return(
        <div>
            <div className={style.chartdiv}>
            <p>Notification List</p>{
            
                ldata.dasbhoardPage.notifications.map((e)=>
                <div className={style.notif} >
                   <div> <img src={e.pic} alt="pic"></img></div>
                   <div>  <p>{e.message}</p> <spam id={style.time}>{e.time}</spam></div>
    
                    </div>

                )
                }
                
            </div>
        </div>
    )
}
export default Notification