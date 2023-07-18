import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo_sonatrach.jpg';
import './home.css';


function Header() {


    return (
      
        <nav class="navbar">
          <button class="navbar-toggler" type="button"  >
            <span class="navbar-toggler-icon" ></span>
          </button>
          
          <h1>Gestion de la formation</h1>
          <a class="navbar-brand " href="#"> <img src={logo} alt="" class="img-fluid " /> SONATRACH </a>
          
        </nav>
  
      
      
    )
  }
  
  export default Header;


