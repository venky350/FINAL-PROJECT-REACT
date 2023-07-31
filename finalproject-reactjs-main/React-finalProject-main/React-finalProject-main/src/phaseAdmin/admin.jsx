import React from "react";
import { IconBase } from "react-icons";
import {useNavigate} from 'react-router-dom'
import style from './admin.module.css'
import { AiOutlineDashboard,AiOutlineFileDone,AiOutlineShoppingCart,AiOutlineUser,AiOutlineSetting } from 'react-icons/ai';
import { useEffect, useState } from "react";
function Administration(){
  const navigate=useNavigate()
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const [show, setShow] = useState(false);
  const errMsg = <p className={style.err}>UserName and password should be same</p>;

  const usernameHandler = (e) => {
    setUsername(e.target.value);
    setShow(false);
  };

  const passwordHandler = (e) => {
    setpassword(e.target.value);
    setShow(false);
  };
  const loginHandler = () => {
    if (username === password && username !== "" && password !== "") {
      setShow(false);
      localStorage.setItem("loginStatus", true);
      navigate("/index");
      console.log("login");
    } else {
      setShow(true);
    }
  };
    return(
     <div id={style.main_div}>
          <div id={style.main_div}>
                
           </div> 
           <div>
        <div className={style.Admin_main_div}>
            <div className={style.Admin_div}>
            
            <form>
                 <p>Welcome to Dashbord,Login</p>
                <label className={style.label}>Username</label><br/>
                <input type="text" className={style.upass} name="username" onChange={usernameHandler} id="username" value={username}  required></input><br/>
                <label className={style.label}>Password</label><br/>
                <input type="password" name="password"  onChange={passwordHandler} className={style.upass} value={password} required></input><br/>
                {show && errMsg}
                <button type="login"  className={style.logs} onClick={loginHandler} >Login</button><br/>
                <button type="text"  className={style.logs} >Forgot Your Password?</button>
            </form>
            </div>
            </div>
               
        </div>
        <div className={style.footer}>
                <footer>
                    <p>Copyright © 2018 All rights reserved. Design: Template Mo</p>
                </footer>
               </div>
        </div>
    )
}
export default Administration