import react ,{useState}from "react";
import Card from "./Card";
import axios from "axios";
const Main=()=>{
    const [search,setSearch]=useState("");
    const searchProduct=(evt)=>{
        if(evt.key==="Enter")
        {
            console.log("hello")
        }
    }
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>Find the right product.<br/> Get the best deal.</h1>
                </div>
                <div className="row2">
                    <h2>What are you looking for today?</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Product Name Here . . ."
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchProduct}/>

                        </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

            <div className="container">

                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/> 
                    <Card/> 
                    <Card/>
                    <Card/>
            </div>
        </>
    )
}
export default Main;