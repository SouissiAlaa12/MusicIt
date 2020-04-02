import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Nav =()=>{
return(
  <div >
    <ul className="navlist">
    <li><Link to="/">Home</Link></li>
    <li> <Link to="/playlist">Playlist</Link></li>
    </ul>
  </div>
)
}
export default Nav ;