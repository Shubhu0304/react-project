import React from 'react';
import './myaccount.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';


function MyAccount() {
    return (

        
        <div className="row">
            <div className='account'>
            <h1>Account Details</h1>
                <h5>________________________________________________________________________________</h5>
            </div>
            <div className="leftcolumns">
                <div className="card">
                    <Link to="/profile">
                    <h2 style={{textAlign: "center"}}> Update Profile</h2></Link>
                </div>
                
            </div>
            <div className="rightcolumns">
                <div className="card">
                <Link to="/booking">
                <h2 style={{textAlign: "center"}}> Bookings</h2></Link>
                </div>
    
            </div>
        </div>
    )
}

export default MyAccount
