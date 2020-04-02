import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import logo from './logoreact.png' ; 
const Home=()=>{
    return (
        <div className="homepage">
            <img src={logo}alt="logo" width="250px" height="250px"/>
        <h1>Here you can find The audio player </h1>
        <ul>
        <li> <Link to="/playlist">Check The playlist</Link></li>
        </ul>
        </div>
    )

}
export default Home ; 