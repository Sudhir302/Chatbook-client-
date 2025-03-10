import Navbar from "./Navbar";
import Status from "./Status";
import More from "./More";
import Feeds from "./Feeds";
import './Userprofile.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Logout from "./register/Logout";
 
function UserProfile(){
    const {userId} = useParams()
    let [pImg, setPimg] = useState("");
    useEffect(()=>{
        const dataHandler = async ()=>{
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/user/profile/${userId}`, {withCredentials: true});
                console.log(response);
                setPimg(response.data.user.profileImg);
            } catch (error) {
                console.error(error);
                toast.error(error.response.data.message)
            }
        }
        dataHandler();
    },[])
    return(
        <div className="user-container">
            <Navbar profile={pImg} />
            <div className="profile-content">
                
                <div className="profile-more">
                    <More />
                </div>
                <div className="status-feed overflow">
                    <Status />
                    <Feeds  />
                </div>
                <div className="profile-contact">
                </div>
            </div>
        </div>
    )
}

export default UserProfile;