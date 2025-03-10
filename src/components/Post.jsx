import { useState } from 'react';
import './Post.css'
import Profile from './profile/Profile';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Post(){
    const {userId} = useParams();
    let [post, setPost] = useState({caption: "", image: ""});
    let [toggle, setToggle] = useState("none");

    const toggleHandler = ()=>{
        setToggle(toggle === "none" ? "block" : "none");
    }

    const postHandler = (e)=>{
        setPost((curr)=>(
            {
                ...curr,
                [e.target.name]: e.target.value
            }
        ));
    };

    const submitHandler = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/upload/post`, {userId, post}, {withCredentials: true});
            console.log(response.data.message);
            toast.success(response.data.message)
            setPost({caption: "", image: ""})
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message)
        }
    }

    return(
        <div className="post-contaienr">
            
            <div className="icon">
                <button className='signup-btn btn on-hover' onClick={toggleHandler}><i className="fa-solid fa-image"></i></button>
            </div>
            <form className="upload-img" onSubmit={submitHandler} style={{display: toggle}}>
                <div style={{marginBottom: "1rem"}} className='flex'>
                    <Profile />
                    <strong>Create Post Here</strong>
                </div>
                <input type="text" name="caption" id="caption" onChange={postHandler} value={post.caption} placeholder="Add caption"  required/>
                <input type="text" name="image" id="image" onChange={postHandler} value={post.image} placeholder="upload image" required/>
                <button type="submit" className="btn login-btn on-hover">Upload</button>
            </form>
        </div>
    );
}

export default Post;