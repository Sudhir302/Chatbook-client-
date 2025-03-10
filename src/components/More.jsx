import Friends from "./home/Friends";
import Video from "./home/Video";
import Events from "./more/Event";
import Memories from "./more/Memories";
import Pages from "./more/Page";
import './More.css'
import Playgames from "./more/Playgames";
import Gaming from "./home/Gaming";
function More(){
    return(
        <div className="more-container">
            <div className="more on-hover" ><Friends /> <strong>Friends</strong></div>
            <div className="more on-hover" ><Memories /><strong>Memories</strong></div>
            <div className="more on-hover" ><Events /><strong> Events</strong></div>
            <div className="more on-hover" ><Video /> <strong>Video</strong></div>
            <div className="more on-hover" ><Friends /> <strong>Groups</strong></div>
            <div className="more on-hover"><Friends /> <strong>News Feed</strong></div>
            <div className="more on-hover" ><Pages /> <strong>Pages</strong></div>
            <div className="more on-hover" ><Gaming /> <strong>Gamings</strong></div>
            <div className="more on-hover" ><Playgames /> <strong>Play Games</strong></div>
        </div>
    )
}

export default More;