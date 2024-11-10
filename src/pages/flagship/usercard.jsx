import React from "react";
import "./usercard.css";

const UserCard = ({...props}) => {
  return (
    <div class="card">
      <header 
      class={`card-personal-header`}
      style={{backgroundImage: `url(${props.imgUrl})`}}
      >
        <h1 class="card-personal-name">{props.name}</h1>
        <p class="card-personal-description">
          {props.description}
        </p>
      </header>
    </div>
  );
};

export default UserCard;
