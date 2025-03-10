import Profile from "./profile/Profile"
import Search from "./search/Search";
import './Friendlist.css'

function Friendlist({hide}){
    return(
        <div className="friend-container" onClick={(e)=> e.stopPropagation()}>
            <div className="friend-list" style={{display: hide}}>
                <div className="search-friend">
                    <Search />
                </div>
                <div className="friend">
                    <Profile />
                    <p>Username</p>
                </div>
            </div>
        </div>
    )
}

export default Friendlist;