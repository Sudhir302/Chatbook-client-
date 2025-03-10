import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Likes({postId, likes}){
    const {userId} = useParams();
    let [isLike, setIsLike] = useState("black");
    let [likeCount, setLikeCount] = useState("");

    useEffect(()=>{
        setLikeCount(likes.length);
        if(likes.includes(userId)){
            setIsLike("blue");
        }
        else{
            setIsLike("black")
        }
    }, [likes, userId])

    const likeHandler = async ()=>{
        try {
            console.log(userId, postId);
            const response = await axios.put(`${import.meta.env.VITE_BACKEND_API_URL}/posts/${postId}/likes`, {userId}, {withCredentials: true});
            console.log(response);
            setIsLike(isLike === "black" ? "blue" : "black");
            setLikeCount(response.data.likes)
        } catch (error) {
            console.error(error);
        }
    }
    

    return(
        <div className="like" onClick={likeHandler}>
            <i className="fa-solid fa-thumbs-up on-hover" style={{color: isLike}}></i> {likeCount} Likes
        </div>
    );
}

export default Likes;