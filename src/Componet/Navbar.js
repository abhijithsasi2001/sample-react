import React from "react";
import { Link } from "react-router-dom";
import './Style.css';
const Navbar=()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg  fixed-top">
  <Link className="navbar-brand" to="/"><img src="logo.png"></img></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link active" to="/">Home</Link>
      <Link className="nav-item nav-link " to="menu">Menu</Link>
      <Link className="nav-item nav-link " to="/about">About</Link>
      <Link className="nav-item nav-link " to="/contact">Contact</Link>
      
      
      
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar;