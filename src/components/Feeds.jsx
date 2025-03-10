import { useEffect, useState } from 'react';
import Likes from './Likes';
import './Feed.css'
import axios from 'axios';

function Feeds(){
    let [posts, setPosts] = useState([]);
    useEffect(()=>{
        const handlePost = async ()=>{
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/post/feed`, {withCredentials: true});
                console.log(response);
                setPosts(response.data.posts)
            } catch (error) {
                console.error(error);
            }
        }
        handlePost();
    }, []);
    return(
        <div className="feed-container">
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
    );
}

export default Feeds;
