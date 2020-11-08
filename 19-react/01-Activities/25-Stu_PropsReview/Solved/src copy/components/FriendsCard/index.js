import React from "react";
import "./style.css";

function FriendsCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt={props.children.name}
          src={props.children.image}
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.children.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.children.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.children.location}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendsCard;
