import { useState } from 'react';
import './Login.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Login(){
    // const userId = useParams();
    const navigate = useNavigate();
    let [loginDetails, setLoginDetails] = useState({loginEmail: "", loginPassword: ""})

    const detailsHandler = (e)=>{
        setLoginDetails({...loginDetails, [e.target.name]: e.target.value})
    }

    const loginHandler = async (e)=>{
        e.preventDefault();
        try {
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/signin`, loginDetails, {withCredentials: true});
            const userId = res.data.userId
            console.log(res)
            toast.success(res.data.message)
            navigate(`/user/profile/${userId}`);
            setLoginDetails({loginEmail: "", loginPassword: ""})
        } catch (error) {
            console.error(error.response.data.message);
            toast.error(error.response.data.message)
        }
    }

    return(
        <div className="form-container">
            <form className="login-form form" onSubmit={loginHandler}>
                <input type="email" name="loginEmail" id="loginEmail" placeholder='Email address' onChange={detailsHandler} value={loginDetails.loginEmail} required />
                <input type="password" name="loginPassword" id="loginPassword" placeholder='Password' onChange={detailsHandler} value={loginDetails.loginPassword} required/>
                <button className='login-btn on-hover'>Log in</button>
                <Link to='/update/password' className='update-password txt-deco-none'>Forgotten password?</Link>
                <hr className='hr-line' />
                <Link to='/signup' className='signup-btn txt-deco-none' >Create new account</Link>
            </form>
        </div>
    )
}

export default Login;