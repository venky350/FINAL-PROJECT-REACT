import React ,{useState,useEffect} from "react";
import style from "./products.module.css"
import {FaRegTrashAlt} from 'react-icons/fa'
import NewAddProducts from "./addnew";
import {useNavigate} from 'react-router-dom'

function Products(){
  const [prolist, setProductlist] = useState([]);
  const [selected, setSelected] = useState([]);
  const [modal, setModal] = useState(false);

  const [category, setCategory] = useState("");
  const [description, setdescription] = useState("");
  const [expireDate, setexpireDate] = useState("");
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [unitSold, setUnitSold] = useState("");
  const navigate=useNavigate()

  useEffect(() => {
    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );
  }, [selected]);
console.log(selected)
  const deleteHandler = (e) => {
    console.log(e.target.id);
    let object = JSON.parse(localStorage.getItem("productsPage"));
    let productsData = object["products"];

    let productsAfterDelete = productsData.filter(
      (item) => item.name !== e.target.id
    );
    object = {
      ...object,
      products: productsAfterDelete,
    };
    localStorage.setItem("productsPage", JSON.stringify(object));

    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );
  };

  const checkboxHandler = (e) => {
    if (e.target.checked) {
      setSelected([...selected, e.target.id]);
    } else {
      selected.splice(selected.indexOf(e.target.id), 1);
      setSelected(selected);
    }
  };

  const selectedDeleteHandler = () => {
    let checkboxAfterDelete = prolist.filter(
      (item) => !selected.includes(item.name)
    );


    let object = JSON.parse(localStorage.getItem("productsPage"));
    object = {
      ...object,
      products: checkboxAfterDelete,
    };
    localStorage.setItem("productsPage", JSON.stringify(object));

    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );

    let selectedall = document.querySelectorAll("input[type=checkbox]:checked");
    for (let i = 0; i < selectedall.length; i++) {
      selectedall[i].checked = false;
    }
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

    object.products.push({
      category: category,
      description: description,
      expireDate: expireDate,
      name: name,
      stock: stock,
      unitSold: unitSold,
    });

    console.log("after addding product:", object);

    localStorage.setItem("productsPage", JSON.stringify(object));
    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );
    setModal(false);
  };
  
    let localdata=JSON.parse(localStorage.getItem('data1'))
    return(
        <div>
           <div className={style.div_promain}>
            <div className={style.div_products}>
                <div  className={style.div_scroll}>
                <table id={style.div_table}>
                    <tr> 
                        <th></th>
                        <th> PRODUCT NAME</th>
                        <th>CATOEGORY</th>
                        <th>DESCRIPTION</th>
                        <th>UNIT SOLD</th>
                        <th>IN STOCK</th>
                        <th>EXPIRE DATE</th>
                        <th></th>
                        </tr>
                   {
                    localdata.productsPage.products.map(e=>
                      <tr className={style.tr}>
                        <td className={style.tr}> <input
                        type="checkbox"
                        id={e.name}
                        
                        onChange={checkboxHandler}
                      ></input></td>
                        <td className={style.tr}>{e.name}</td>
                        <td className={style.tr}>{e.category}</td>
                        <td className={style.tr}>{e.description}</td>
                        <td className={style.tr}>{e.unitSold}</td>
                        <td className={style.tr}>{e.stock}</td>
                        <td className={style.tr}>{e.expireDate}</td>
                        <td className={style.tr}><FaRegTrashAlt id={style.ico} /></td>
                        </tr> 
                    
                      )
                   }
                 
                </table>
                </div>
                <button className={style.div_add} onClick={()=>navigate('/addnew')} >ADD NEW PRODUCT</button><br></br>
                   <button  className={style.div_add} onClick={selectedDeleteHandler} type="reset" >DELETE SELECTED PRODUCTS</button>
            </div>
            <div id={style.div_smalltab}>
                <div id={style.div_st}>
                <p>Product Categorys</p>
                <table>
                    <tr>
                        <th className={style.div_str}>Product Categories</th>
                        <th></th>
                    </tr>
                    {
                    localdata.productsPage.categories.map(e=>
                        <tr className={style.div_str}>
                            <td className={style.div_str}>{e}</td>
                           <td className={style.div_str}><FaRegTrashAlt id={style.icons}/></td>
                        </tr>
                        )
                 
                    }
              
                </table>
               
                </div>
                <button className={style.div_add1} onClick={()=>navigate('/addnewcat')}  >ADD NEW CATEGORY</button>
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
export default Products