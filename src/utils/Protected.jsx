import { useEffect, useState } from "react";
import axios from 'axios'
import { Navigate } from "react-router-dom";

function Protected({children}){
    let [access, setAccess] = useState(false);
    let [loading, setLoading] = useState(true);

    useEffect(()=>{
        const routeHandler = async ()=>{
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/signin`, {withCredentials: true});
                setAccess(response.data.isAuthenticated)
            } catch (error) {
                console.error(error);
            }
            finally{
                setLoading(false);
            }
        }
        routeHandler();
    },[]);

    if(loading){
        return(
            <div>loading......</div>
        )
    }

    return access ? children : <Navigate to= "/" />
};

export default Protected;