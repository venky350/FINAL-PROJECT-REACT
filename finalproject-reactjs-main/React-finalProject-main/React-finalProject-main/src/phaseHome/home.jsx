import React, { useState,useEffect } from "react";
import style from "./home.module.css"
import {useNavigate} from 'react-router-dom'

import { AiOutlineDashboard,AiOutlineFileDone,AiOutlineShoppingCart,AiOutlineUser,AiOutlineSetting } from 'react-icons/ai';
function Home(){
  const [data,setData]=useState([]);
  useEffect(()=>{
    const fetchdata=async()=>{
     const res=await  fetch("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
          const data=await res.json();
         localStorage.setItem('data1',JSON.stringify(data))
         localStorage.setItem('accountsPage',JSON.stringify(data.accountsPage));
        localStorage.setItem(
          "dashboardPage",
          JSON.stringify(data.dasbhoardPage)
        );
        localStorage.setItem(
          "productsPage",
          JSON.stringify(data.productsPage)
        );
        localStorage.setItem(
          "products",
          JSON.stringify(data.productsPage.products)
        );
          setData(data)}
          fetchdata()
         },[] )
  let localdata=JSON.parse(localStorage.getItem('data1'))
  const prodata=JSON.parse(localStorage.getItem("productsPage"))
  const accdata=JSON.parse(localStorage.getItem("accountsPage"))
  console.log(prodata)
     console.log(localdata)
     console.log(accdata)
  

  
  const navigate=useNavigate()
  
    return(

        <div >
            <div id={style.main_div}>
                  <div className={style.main_nav_div}>
                    <div id={style.productdiv}><h1 id={style.product}>Product Admin</h1></div>
                    <div className={style.div_nav}>
                    <div className={style.div_nav_top} onClick={()=>navigate('/index')} id={style.dashboards} ><AiOutlineDashboard className={style.icons}></AiOutlineDashboard><a href=""><li>Dashboard</li></a></div>
                     
                      <div  className={style.div_nav_top} id={style.prods} onClick={()=>navigate('/Products') }><AiOutlineShoppingCart   className={style.icon}></AiOutlineShoppingCart><a href=""><li>Products</li></a></div>
                      <div  className={style.div_nav_top}onClick={()=>navigate('/account')} id={style.accs}><AiOutlineUser className={style.icons} ></AiOutlineUser><a href=""><li>Accounts</li></a></div>
                      
                      </div>
                      <a href="" id={style.login} onClick={()=>navigate('/')}>Admin,<b>Logout</b></a>
                  </div>
                  <div className={style.body}>
                  <div  className={style.body_first}>
                    
                     </div>
                  </div>
                
                
                
                 </div>
                 
                
                 
                 
          
        </div>
    )
}
export default Home