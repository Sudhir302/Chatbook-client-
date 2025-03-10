import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Logout(){
    const navigate = useNavigate();
    const logoutHandler = async()=>{
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/logout`, {}, {withCredentials: true})
            console.log(response)
            toast.success(response.data.message)
            navigate("/")
        } catch (error) {
            console.error(error)
            toast.error(error.response.data.message)
        }
    }
    return(
        <button className="logout on-hover login-btn btn" onClick={logoutHandler}>
            Logout
        </button>
    )
}

export default Logout;