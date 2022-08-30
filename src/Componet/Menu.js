import React from "react";
import Carddata from "./Carddata";

import { useState } from "react";

const Menu=()=>{
    const[data,setData]=useState(Carddata);
return(
    <div className="menu">
        <div className="menuList">
    {data.map((element,id)=>{
        return(
            
                <div className="card">
                <img className="card-img-top" src={element.image} alt="image"></img>
                <div className="card-body">
                <h4 className="card-title">{element.text}</h4>
                <p className="card-text">Rs.{element.price}</p>
                <center><button type="button" className="btn">CLICK TO BUY</button></center>

                
            
            </div>
            </div>
        )
})}</div></div>
    )

}
export default Menu;