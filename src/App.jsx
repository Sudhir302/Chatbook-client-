import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Login from "./components/register/Login";
import Signup from "./components/register/Signup";
import Usernotfound from './Usernotfound';
import Protected from './utils/Protected';
import UserProfile from "./components/Userprofile";
import Searched from './components/search/Searched';
import Userhome from './components/Userhome';
import { ToastContainer } from 'react-toastify';
import Forgotten from './components/register/Fotgotten';
import "react-toastify/dist/ReactToastify.css";
import './Media.css'

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element= {<Login />} />
        <Route path="/signup" element= {<Signup />} />
        <Route path='/update/password' element = {<Forgotten />} />
        <Route path="/user/profile/:userId" element = {<Protected><UserProfile /></Protected>} />
        <Route path="*" element= {<Usernotfound/>} />
        <Route path='/search/results' element= {<Searched />} />
        <Route path='/user/:userId/home' element = {<Userhome/>} />
        
      </Routes>
      <ToastContainer
          position="top-right"
          autoClose={2000}  // Close after 3 sec
          hideProgressBar={false} 
          closeOnClick 
          pauseOnHover 
          draggable
          theme="dark"   />
    </Router>
  )
}

export default App;