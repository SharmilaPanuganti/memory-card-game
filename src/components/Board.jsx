import React from "react";
import Card from "./Card";

const Board = (props) => {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center flex-wrap p-0">
        {props.data.map((cardItemData) => (
          <Card
            key={cardItemData.id}
            title={cardItemData.name}
            imgUrl={cardItemData.image}
            onCardClick={props.onCardClick}
            cardId={cardItemData.id}
          />
        ))}
      </div>
    </>
  );
};

export default Board;
