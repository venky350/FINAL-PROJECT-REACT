import React from "react";
import {Line} from 'react-chartjs-2';
import style from './charts.module.css'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,PointElement,Legend,Colors
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Colors,
    Legend
)
function LineChart(){
    let ldata=JSON.parse(localStorage.getItem('data1'))
    console.log(ldata)
const data={
  
    labels:ldata.dasbhoardPage.latestHits.months,
    datasets:[
        {
            label:"latest Hits",
            data:ldata.dasbhoardPage.latestHits.latest, 
            borderColor:'#17a2b8',
            fill:true,
            tension:0.4,
        },
        {
            label:"popular Hits",
            data:ldata.dasbhoardPage.latestHits.popular,
            point:false,
            borderColor:'#e83e8c',
            fill:true,
            tension:0.4,
        },
        {label:"Featured ",
    data:ldata.dasbhoardPage.latestHits.featured, 
    borderColor:'#6f42c1',
    
    tension:0.4,
    labelColor:'white'

},


]
}

  const options={
    plugins:{
        legend:{
            labels:{
            color:"white"}},
        
    },
    
   
    scales:{
        y:{
            min:0,
            max:100,
            ticks:{color:'white'}
        },
        x:{
            ticks:{color:'white'}
        },
       
    }
  }  
    return(
        <div>
           
            <div className={style.div_chart}>
            <p>Latest Hits</p>
<Line 

data={data}
options={options}
></Line></div>
        </div>
    )
}
export default LineChart