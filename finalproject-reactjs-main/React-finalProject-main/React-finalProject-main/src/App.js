import React, { useEffect, useState } from "react";
import Administration from "./phaseAdmin/admin.jsx";
import Home from "./phaseHome/home.jsx";
import Index from "./phaseHome/index.jsx";
import Products from "./phaseProducts/products.jsx";
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import NewProductsAdd from "./phaseProducts/addnew.jsx";
import Account from "./phaseAccount/Account.jsx";
import NewCategoryAdd from "./phaseProducts/addnewcategory.jsx";

function App() {
  return (
    
      <div className="App" style={{backgroundColor:"#567086",fontFamily: "Roboto, Helvetica, Arial, sans-serif"}}>
        <BrowserRouter>
        <Home/>
        <Routes>
        <Route path='/'  element={<Administration/>}/>
     <Route path='/index' element={<Index/>}/>
     <Route path='/products' element={<Products/>}/>
     <Route path="/addnew" element={<NewProductsAdd/>}/>
     <Route path="/account" element={<Account/>}></Route>
     <Route path="/addnewcat" element={<NewCategoryAdd/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;