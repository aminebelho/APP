import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import Sidebar from './sidebar';
import './home.css';
import Prevision from "./prevision";

function Home() {
  // const[open,setOpen]=useState(false);
  // const handleClick = () => {
  //   setOpen(!open);
  // }
    return (
      
      <div className="App">

         <Header  />
         <Sidebar />
         <Prevision />


 
  
      </div>
    );
  }
  
  export default Home;
  