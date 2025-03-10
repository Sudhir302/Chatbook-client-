import { useNavigate, useParams } from "react-router-dom";

function Home(){
    const {userId} = useParams()
    const navigate = useNavigate()
    const clickHandler = ()=>{
        navigate(`/user/profile/${userId}`)
    }
    return(
        <div className="home home-component on-hover" onClick={clickHandler}>
            <i className="fa-solid fa-house"></i>
        </div>
    )
}

export default Home;