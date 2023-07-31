import React from "react";
import LineChart from "../phaseCharts/firstchart";
import LineChart2 from "../phaseCharts/secondchart";
import Piechart from "../phaseCharts/piechart";
import Notification from "../phaseNotification/notification";
import Orders from "../phaseOrders/orders";
import style from "./home.module.css"
import Home from "./home";
function Index(){
    return(
    <div>
       
      < div className={style.chart}>
                  
                  <LineChart/>
                  <LineChart2/>
                  <Piechart/>
                 <Notification/>
                 
                </div> 
                <Orders/>
                <div className={style.footer}>
                <footer>
                    <p>Copyright © 2018 All rights reserved. Design: Template Mo</p>
                </footer>
               </div>
    </div>)
}
export default Index