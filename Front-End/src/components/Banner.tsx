import React, { useState } from 'react';
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from './Search';
import { useNavigate } from "react-router-dom";

function Banner() {
    const history = useNavigate();
    function handleClick() {
        history('/search')
      }
    const [showSearch, setShowSearch] =  useState
    (false);

    return (
        <div className="banner">
            <div 
                className="banner__search">
                    {showSearch && <Search/>} 

                <Button onClick={()=>
                setShowSearch(!showSearch)}
                className="banner__searchButton"
                variant='outlined'>
                    {showSearch ? "Hide" : "Search By No. of People"}
                </Button>
            </div>
            <div className="banner__info">
                <h1 >Find a place you'll love to stay at </h1>
                <h5 >Plan a different kind of stay and experience home wherever you stay.</h5>
                <Button onClick={handleClick}
                variant='outlined'>Explore Stays
                </Button>
            </div>
        </div>
     
    )
}

export default Banner;
