import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { Link } from "react-router-dom";
import logo from '../assests/appLogo.png';

export default function Header() {
    return (
        <div className="header">   
            <Link to="/">
                <img
                    className="header__icon"
                    src={logo}
                />  
            </Link>        
              
            <div className="header__center">
                <input type="text"/>
                <SearchIcon/>
            </div>         
            <div className="header__right">
            <Link to="/myaccount"><h5>My Account</h5> 
            </Link> 
            <Link to="/search"><h5>Listings</h5> 
            </Link>
            <Link to="/login"><h5>Login</h5> 
            </Link> 
            <Link to="/register"><h5>Register</h5> 
            </Link> 
            
            </div>           
        </div>
    )
}
