// import Search from "./Search";
import Navbar from "../Navbar";
import More from "../More";
import { useLocation } from "react-router-dom";
import './Searched.css';

function Searched() {
    const location = useLocation();
    const list = location.state?.list || [];
    return (
        <div className="list-container">
            <div className="fixed">
                <Navbar />
                <div className="profile-more">
                    <More />
                </div>
            </div>
            <div className="card-container overflow" >
            {list.map((l)=>(
                <div key={l._id} className="card ">
                    <img src= {l.profileImg} alt="P" className="profile-img" />
                    <p className="username">
                        {l.username}
                    </p>
                    <div className="intract">
                        <button type="button" className="login-btn btn on-hover add">Add</button>
                        <button type="button" className="signup-btn on-hover msg">Message</button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Searched;
