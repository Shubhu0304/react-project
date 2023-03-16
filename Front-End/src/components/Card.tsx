import React from 'react';
import "./Card.css";

type Props = {
    src: string;
    title: string;
    description: string;
    price:string;
  };

const Card =(props: Props) => {
    return (
        <div className="card">
            <img src={props.src} alt="" width="400px" height="400px" />
            <div className="card__info">
                <h2>{props.title}</h2>
                <h4>{props.description}</h4>
                <h3>{props.price}</h3>
            </div>
        </div>
    )
}

export default Card
