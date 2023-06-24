import react from "react";
import { useState } from "react/cjs/react.development";
import Modal from "./Modal";
const Card = () => {
    return (
        <>
          <div className="card" >
            <img src="./images/book.jpg" alt="" />
             <div className="bottom">
                <h3 className="title">Hello</h3>
                <p className="amount">&#8377;500</p>
                <p className="rating"> 4</p>  
                <a href="#">Link</a>                 
             </div>
           </div>
        </>
    )
}
export default Card;