import React, { useState,useEffect} from "react";
import style from './products.module.css'

 function NewProductsAdd(){  
 
  const [prolist, setProductlist] = useState([]);
  const [selected, setSelected] = useState([]);
  const [model, setModal] = useState(false);

  const [category, setCategory] = useState("");
  const [description, setdescription] = useState("");
  const [expireDate, setexpireDate] = useState("");
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [unitSold, setUnitSold] = useState("");

  useEffect(() => {
    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );
  }, [prolist]);

  const deleteHandler = (e) => {
    console.log(e.target.id);
    let object = JSON.parse(localStorage.getItem("productsPage"));
    let productsData = object["products"];

    let prodAfterDelete = productsData.filter(
      (item) => item.name !== e.target.id
    );
    object = {
      ...object,
      products: prodAfterDelete,
    };
    localStorage.setItem("productsPage", JSON.stringify(object));

    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );
  };

  const addNewProduct = () => {
    setModal(true);
  };

  const addProductHandler = () => {
    let object = JSON.parse(localStorage.getItem("productsPage"));
    console.log("before addding product:", object);

    if (
      category === "" ||
      description === "" ||
      expireDate === "" ||
      name === "" ||
      stock === "" ||
      unitSold === ""
    ) {
      alert("Please enter all details for product");
      return;
    }
      else{
    object.products.push({
      category: category,
      description: description,
      expireDate: expireDate,
      name: name,
      stock: stock,
      unitSold: unitSold,
    })};

    console.log("after addding product:", object);

    localStorage.setItem("productsPage", JSON.stringify(object));
    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );
    setModal(false);
  };
  
    const selectDeleteHandler = (e) => {
      e.preventDefault();
    };
  
    return(
        <div>
            <div className={style.div_add_new}>
             
                <form id={style.div_add_form} >
                   
                <p id={style.div_addp}>Add Product</p>
                <label className={style.div_addlabel}>Product Name</label><br></br>
                <input type="text"   id={style.div_addinput1}  onChange={(e) => setName(e.target.value)}
              value={name} required ></input><br></br>
                <label classname={style.div_addlabel}>Description</label><br></br>
                <textarea cols='48' rows='7'  id={style.div_addtext} required onChange={(e) => setdescription(e.target.value)}
              value={description}></textarea><br></br>
                <label classname={style.div_addlabel}>Category</label><br></br>
                <select id={style.div_addinput2} onChange={(e) => setCategory(e.target.value)}
              value={category} required >
                
                    <optgroup>
                        <option>select Category</option>
                        <option>New Arrival</option>
                        <option>Latest Fashion</option>
                        <option>Trending</option>
                        <option>Christmas Special</option>
                        <option>New Year Special</option>
                    </optgroup>
                </select><br></br>
                <label classname={style.div_addlabel}>Expire Date</label><br></br>
                <input type="date" id={style.div_adddate}  onChange={(e) => setexpireDate(e.target.value)}
              value={expireDate} required></input><br></br>
                <label classname={style.div_addlabel}>Unit Sold</label><br></br>
                <input type="number" id={style.div_addnum} onChange={(e) => setUnitSold(e.target.value)}
              value={unitSold}  required></input><br></br>
                <label classname={style.div_addlabel}>Units In Stock</label><br></br>
                <input type="number" id={style.div_addnum}  onChange={(e) => setStock(e.target.value)}
              value={stock}  required ></input><br></br>
          
                
            
                <button type="submit" id={style.div_addpronow} onClick={addProductHandler}> ADD PRODUCT NOW</button>
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
export default NewProductsAdd