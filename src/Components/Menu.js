import React from "react";
import {Link} from 'react-router-dom';
import './Menu.css';
import DarkMode from '../Components/DarkMode'
const Menu = ()=>{
    return(
        <div className="navbar">
            
            <div className="menu-container">
                <ul className="nav-links">
                    <li>
                        <Link to='/' className="nav-link">Home</Link>
                    </li>

                    <li>
                        <Link to='/about' className="nav-link">About</Link>
                    </li>

                    <li>
                        <Link to='/cv' className="nav-link">Cv</Link>
                    </li>

                    <li>
                        <Link to='/contact' className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Menu;