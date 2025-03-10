import { useState } from "react";
import Friendlist from "../Friendlist";

function Messenger(){
    const [show, setShow] = useState('none')
    const toggle = ()=>{
        setShow(show === "none" ? "block" : "none")
    }
    return(
        <div className="messenger profile-component on-hover" onClick={toggle}>
            <i className="fa-brands fa-facebook-messenger"></i>
            <Friendlist hide = {show} />
        </div>
    )
}

export default Messenger;