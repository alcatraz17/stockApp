import React from "react";
import "../Card/Card.css";

const Card = (props) => {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={props.imgSrc} alt=" " />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h4>{props.title}</h4>
                </div>
                <div className="card-rate">
                    <h2>{props.rate}</h2>
                </div>
            </div>
        </div>
    );
};

export default Card;
