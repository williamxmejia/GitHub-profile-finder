import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import "../bootstrap.css";
import "../style.css";


const Display = () => {
    const [data, setData] = useState([]);
  
    const getGitHub = async() => {
      try{
        const url = "https://api.github.com/users";
        const response = await axios(url);
        const results =  response.data;
        console.log(results);
        setData(results);
      } catch(error) {
        console.log(error);
      }
  
    };
    useEffect(() =>{
      getGitHub()
    }, [])
    return(
        <div className='container mt-5'>
            <h1 className='text-center mb-5'>Welcome to the GitHub Profile Finder</h1>
            {data.length > 0 && (
        <div className='d-flex flex-wrap justify-content-center'>
          {data.map(user => (
            <div key={user.id} className='card col-2 mx-3 mb-5'>
                <img className="card-img-top" src={user.avatar_url} alt="Card image cap"/>
                 <div className='card-body fw-bold text-uppercase text-center' >{user.login}</div>
            </div>
          ))}
        </div>
      )}
        </div>
    );
}

export default Display;