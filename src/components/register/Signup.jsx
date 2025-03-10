import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


function Signup(){
    let [signupDetails, setSignupDetails] = useState({userName: "", signupEmail: "", signupPassword: ""})
    const signupHandler = (e)=>{
        setSignupDetails({...signupDetails, [e.target.name]: e.target.value})
    }

    const submitHandler = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/signup`, signupDetails, {withCredentials:true});
            console.log(response.data.message);
            toast.success(response.data.message)
            setSignupDetails({userName: "", signupEmail: "", signupPassword: ""});
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message)
        }
    }

    return(
        <div className="form-container">
            <form className="signup-form form" onSubmit={submitHandler}>
                <input type="string" name="userName" id="userName" placeholder='Username' onChange={signupHandler} value={signupDetails.userName} required />
                <input type="email" name="signupEmail" id="signupEmail" placeholder='Email address' onChange={signupHandler} value={signupDetails.signupEmail} required />
                <input type="password" name="signupPassword" id="signupPassword" placeholder='Create Password' onChange={signupHandler} value={signupDetails.signupPassword} required/>
                <button className='login-btn on-hover'>Register</button>
                <hr className='hr-line' />
                <Link to='/' className='signup-btn txt-deco-none' >Already have Account?</Link>
            </form>
        </div>
    )
}

export default Signup;