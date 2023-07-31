import React, { useState,useEffect} from "react";
import style from './products.module.css'
// import {BiCloudUpload} from 'react-icons/bi'
 function NewCategoryAdd(){  
 
  const [productlist, setProductlist] = useState([]);
  const [modal, setModal] = useState(false);

  const [category, setCategory] = useState("");
  

  useEffect(() => {
    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["categories"]
    );
  },[]);

  const addProductHandler = () => {
    let object = JSON.parse(localStorage.getItem("productsPage"));
    console.log("before addding product:", object);

    if (
      category === "" 
    ) {
      alert("Please enter all details for product");
      return;
    }
  else{
    object.categories.push(category);

    console.log("after addding product:", object);

    localStorage.setItem("productsPage", JSON.stringify(object));
    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["categories"]
    );
    setModal(false);
  }};
  
 
  
    return(
        <div>
            <div className={style.div_addnew}>
             
                <form id={style.div_addform} className={style.div_newcat} >
                   
                <p id={style.div_addp}>Add Category</p>
                <label className={style.div_addlabel}>Category  Name</label><br></br>
                <input type="text"   id={style.div_addinput1}  onChange={(e) => setCategory(e.target.value)}
              value={category} required ></input><br></br>
                <button type="submit" id={style.div_addpronow} onClick={addProductHandler}> ADD Category NOW</button>
                </form>
            </div>
            <div className={style.footer}>
                <footer>
                    <p>Copyright © 2018 All rights reserved. Design: Template Mo</p>
                </footer>
               </div>
        </div>
    )
}
export default NewCategoryAdd