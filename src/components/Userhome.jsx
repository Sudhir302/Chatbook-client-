import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Status from "./Status";
import "./Userhome.css";
import axios from "axios";
import Likes from "./Likes";
import { useParams } from "react-router-dom";


function Userhome(){
    let [pImg, setPimg] = useState("/shakti.jpg");
    let [coverImg ,setCoverImg] = useState("/default-cover.jpg");
    let [username, setUsername] = useState("")
    let [posts, setPosts] = useState([])
    const {userId} = useParams();
    useEffect(()=>{
        const homeHandler = async ()=>{
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/userposts/${userId}`, {withCredentials: true});
                setPimg(response.data.userPosts[0].owner.profileImg);
                setCoverImg(response.data.userPosts[0].owner.coverImg);
                setUsername(response.data.userPosts[0].owner.username)
                setPosts(response.data.userPosts);
            } catch (error) {
                console.error(error);
            }
        }
        homeHandler();
    },[])
    return(
        <div className="home-container">
            <div className="home-navbar fixed">
                <Navbar profile={pImg}/>
            </div>
            <div className="user-cover">
                <div className="cover-profile">
                    <img src={coverImg} alt="Cover 404" className="cover" />
                    <div className="user-details">
                        <img src={pImg} alt="Profile 404" className="main-profile" />
                        <strong>Sudhir Chaudhary</strong>
                    </div>
                </div>
            </div>
            <div className="user-posts">
                <div className="home-status">
                    <Status />
                </div>
                {posts.map((post)=>(
                <div className="feed-card" key={post._id}>
                    <div className="post-owner">
                        <img src={post.owner.profileImg} alt="" className='profile-img' />
                        <p className='username'>{post.owner.username}</p>
                    </div>
                    <div className="caption">
                        <p>{post.caption}</p>
                    </div>
                    <div className="post-img">
                        <img src={post.image} alt="Not found 404" />
                    </div>
                    <hr />
                    <div className="intract">
                        <Likes postId={post._id} likes={post.likes}/>
                        <p><i className="fa-solid fa-comment"></i>Comment</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Userhome;