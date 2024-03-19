import React from "react";
import "../styles/card.css";
const Card = (props) => {
  return (
    <div
      className="card col-md-2 mb-3 mx-1 bg-dark rounded-3 border-0  "
      onClick={() => props.onCardClick(props.cardId)}
    >
      <img
        src={props.imgUrl}
        alt={props.title}
        className="card-img-top rounded-circle p-3"
      />
      <div className="card-body text-center bg-light rounded-bottom-3  ">
        <span className="card-title ">{props.title.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default Card;
