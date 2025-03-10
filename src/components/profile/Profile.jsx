import { useNavigate, useParams } from 'react-router-dom';
import './Profile.css';

 
function Profile({ profileImg }) {
    const navigate = useNavigate();
    const { userId } = useParams();

    const clickHandler = () => {
        navigate(`/user/${userId}/home`);
    };

    return (
        <div className="profile profile-component on-hover">
            {profileImg ? (
                <img src={profileImg} alt="Profile" className="profile-img" onClick={clickHandler} />
            ) : (
                <img src="/shakti.jpg" alt="Default Profile" className="profile-img" onClick={clickHandler} />
            )}
        </div>
    );
}


export default Profile;
