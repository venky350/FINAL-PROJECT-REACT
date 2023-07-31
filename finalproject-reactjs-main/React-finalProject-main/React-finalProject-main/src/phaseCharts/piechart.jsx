import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import style from './charts.module.css'

ChartJS.register(ArcElement, Tooltip, Legend);
function Piechart(){
    let ldata=JSON.parse(localStorage.getItem('data1'))
  
const data = {
  labels: ['available', 'system', 'used'],
 
  datasets: [
    {
        radius:120,
      label: '# of Votes',
      data: [ldata.dasbhoardPage.storage.available,ldata.dasbhoardPage.storage.system,ldata.dasbhoardPage.storage.used,],
      backgroundColor: [
        '#fd7e14',
        '#20c997',
        '#9ACD32',
        
      ],
      borderColor: [
        '#fd7e14',
        '#20c997',
        '#9ACD32',
        
      ],
      borderWidth: 1,
    
    },
  ],
};
const options={
    plugins: {
        legend: {
          labels:{
              color:"white",
          }
        },
        
      },
}
return(
    <div>
      
        <div className={style.chart_divdiv_chart} style={{width:'500px',height:'400px'}}>
        <p>Storage Information</p>
<Pie style={{marginLeft:'40px',marginTop:'0px'}}
data={data}
options={options}
></Pie></div>
    </div>
)

}
export default Piechart