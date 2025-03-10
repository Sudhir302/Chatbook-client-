import './Navbar.css'

import Logo from './Logo';
import Search from './search/Search';

import Home from './home/Home';
import Friends from './home/Friends';
import Video from './home/Video';
import Gaming from './home/Gaming';
import Logout from './register/Logout';
import Menu from './profile/Menu';
import Messenger from './profile/Messenger';
import Notification from './profile/Notification';
import Profile from './profile/Profile';

function Navbar({profile}){
    return(
        <div className="nav-container fixed">
            <div className="navbar laptop-navbar">
                <div className="nav-child nav-search">
                    <Logo />
                    <Search />
                </div>
                <div className="nav-child nav-home">
                    <Home />
                    <Friends /> 
                    <Video />
                    <Logout />
                </div>
                <div className="nav-child nav-profile">
                    <Notification />
                    <Messenger />
                    <Menu />
                    <Profile profileImg={profile}/>
                </div>
            </div>
            <div className="navbar mobile-navbar">
                <div className="logo-search-menu">
                    <Logo />
                    <Search />
                    <Menu />
                </div>
                <div className="home-messenger-friends">
                    <Home />
                    <Friends />
                    <Messenger />
                    <Video />
                    <Notification />
                    <Logout />
                </div>
            </div>
        </div>
    )
}

export default Navbar;