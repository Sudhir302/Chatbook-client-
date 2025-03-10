import { useState } from "react";
import Updatepp from "./Updatepp";

function Menu(){
    let [toggle, setToggle] = useState("none");
    const toggleHandler =()=>{
        setToggle(toggle === "none" ? "block" : "none");

    }
    return(
        <div className="menu profile-component on-hover" onClick={toggleHandler}>
            <i className="fa-solid fa-upload"></i>
            <Updatepp toggle={toggle} />
        </div>
    )
}

export default Menu;