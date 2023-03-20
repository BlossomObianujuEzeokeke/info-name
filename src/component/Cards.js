import React from "react";

export default function Cards(props) {
    return(
        <div className="card">
<img src={props.img} alt="Zaferes USA" className="card--image" />
<div className="card--stats">
<img src="../Images/Star 1.png" alt="Star" className="card--star"/>
<span>{props.rating}</span>
<span className="gray"> {props.reviewCount} .</span>
<span className="gray--1">{props.country} </span> 
</div>

<p>{props.title}</p>
<p><b>From ${props.price}</b> / person</p>
</div>
        
    )
}




