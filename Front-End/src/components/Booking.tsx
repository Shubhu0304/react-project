import React from 'react';
import "./SearchResult.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
import { Link } from "react-router-dom";

type Props = {
    img: string;
    location: string;
    title:string;
    description: string;
    star:number;
    price:string;
   
  };

const Bookings = (props: Props) => {
    return (
        <div className="searchResult">
            
            <img src={props.img} alt=""/>
            <FavoriteBorderIcon className="searchResult__heart" />
          
            <div className="searchResult__info">
                <div className="searchResult__infoTop">
                    <p>{props.location}</p>
                    <h3>{props.title}</h3>
                    <p>____________________________</p>
                    <p>{props.description}</p>
                </div>
                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p><strong>{props.star}</strong></p>
                    </div>
                    <div className="searchResult__price">
                       
                        <h2>{props.price}</h2>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bookings
