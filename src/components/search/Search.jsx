import Searched from './Searched';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css'
import axios from 'axios';



function Search(){
    const navigate = useNavigate();
    let [searchValue,setSearchValue] = useState("");
    let [list, setList] = useState([]);

    const handleSearch = (e)=>{
        setSearchValue(e.target.value)
    }

    const handleSearching = async (e)=>{
        e.preventDefault()
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/search?query=${searchValue}`, {withCredentials: true});
            console.log(response.data.userList);
            setList(response.data.userList);
            navigate("/search/results", { state: { list: response.data.userList } });
            setSearchValue("");
            
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <form className='search-bar' onSubmit={handleSearching}> 
            <input type="search" name="search" id="search" placeholder='Search By username' onChange={handleSearch} value={searchValue} required />
            <button type='submit' className='search-btn'><i className="fa-solid fa-magnifying-glass on-hover"></i></button>
            {/* <Searched list={list} /> */}
        </form>
    )
}

export default Search;