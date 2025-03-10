import axios from "axios";
import './Updatepp.css'
import { useState } from "react"
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Updatepp({toggle}){
    let {userId} = useParams();
    let [img, setImg] = useState("")
    const imgHandler = (e)=>{
        setImg(e.target.value);
    }

    const submitHandler = async (e)=>{
        console.log(userId);
        e.preventDefault();
        try {
            const response = await axios.put(`${import.meta.env.VITE_BACKEND_API_URL}/update/profileimg`, {img, userId} , {withCredentials: true})
            console.log(response.data.message);
            toast.success(response.data.message)
            setImg("")
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message)
        }
    }

    return(
        <div className="pp-container">
            <form onSubmit={submitHandler} style={{display: toggle}} onClick={(e)=>(e.stopPropagation())}>
                <input type="text" name="img" id="img" onChange={imgHandler} value={img} placeholder="Upload link" />
                <button className="btn login-btn" type="submit">upload</button>
            </form>
        </div>
    )
}

export default Updatepp;