import React from "react";
import style from './orders.module.css'
function Orders(){
    let ldata=JSON.parse(localStorage.getItem('data1'))
    return(
        <div>
            <div className={style.div_orders}>
                <p id={style.para}>Orders List</p>
             <table>
                    <tr>
                       <th>ORDER NO</th>
                       <th>STATUS</th>
                       <th>OPERATORS</th>
                       <th>LOCATION</th>
                       <th>DISTANCE</th>
                       <th>START DATE</th>
                       <th>EST DELIVERY DUE</th>
                    </tr>{
           ldata.dasbhoardPage.orders.map(e=>
                
                    <tr>
                        <td>#{e.orderNo}</td>
                        <td><li><span>{e.status}</span></li></td>
                        <td>{e.operators}</td>
                        <td>{e.location}</td>
                        <td>{e.distance}</td>
                        <td>{e.startDate}</td>
                        <td>{e.deliveryDate}</td>
                       
                    </tr>
                    )
                }
                 </table>
                 </div>
        </div>
    )
}
export default Orders