import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Forgotten(){
    const navigate = useNavigate();

    let [userDetails, setUserDetails] = useState({email: "", password: ""});

    const detailsHandler = (e)=>{
        setUserDetails((curr)=>(
            {...curr,
            [e.target.name] : e.target.value
            }
        ))
    }

    const updateHandler = async(e)=>{
        e.preventDefault();
        try {
            const response = await axios.put(`${import.meta.env.VITE_BACKEND_API_URL}/update/password`, userDetails, {withCredentials: true})
            console.log(response);
            toast.success(response.data.message);
            navigate("/");

        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message);
        }
    }
    return(
        <div className="form-container">
            <form className="login-form form" onSubmit={updateHandler}>
                <input type="email" name="email" id="email" placeholder='Email address' onChange={detailsHandler} value={userDetails.email} required />
                <input type="password" name="password" id="password" placeholder='Update Password' onChange={detailsHandler} value={userDetails.password} required/>
                <button className='login-btn on-hover'>Update Password</button>
                <Link to='/signup' className='update-password txt-deco-none'>Signup?</Link>
                <hr className='hr-line' />
                <Link to='/' className='signup-btn txt-deco-none' >Already have account</Link>
            </form>
        </div>
    )
}

export default Forgotten;