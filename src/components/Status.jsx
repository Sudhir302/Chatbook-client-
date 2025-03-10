import { useState, useEffect } from 'react';
import Profile from './profile/Profile';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Status.css'
import Post from './Post';
import { toast } from 'react-toastify';

function Status(){ 
    let [status, setStatus] = useState("");

    const statusHandler = (e)=>{
        setStatus(e.target.value);
    }
        const {userId} = useParams()
        let [pImg, setPimg] = useState("");
        useEffect(()=>{
            const dataHandler = async ()=>{
                try {
                    const response = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/user/profile/${userId}`, {withCredentials: true});
                    toast.success(response.data.message);
                    setPimg(response.data.user.profileImg);
                } catch (error) {
                    console.error(error);
                    toast.error(error.response.data.message)
                }
            }
            dataHandler();
        },[])
    return(
        <div className="status-container">
            <div className='status'>
                <Profile className="profile-img" profileImg={pImg}/>
                <input type="text" name="status" id="status" placeholder="Click Icon to upload" onChange={statusHandler} value={status} />
                <Post />
            </div>
        </div>
    )
}

export default Status;