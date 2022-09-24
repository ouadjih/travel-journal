import React from "react";
import "./Card.css";
import { GiPositionMarker } from "react-icons/gi";
export default function Card(props) {
  return (
    <div className="card">
      <img className="image" src={props.img} alt="miramar" />
      <div className="info">
        <div className="localisation">
          
          <GiPositionMarker /> {props.localisation}
          <a className="link" href={props.link}> view on google maps</a>
        </div>
        <span className="title bold"><h2>{props.title}</h2></span>
        <span className="date bold ">{props.date}</span>
        <div className="description pos">
          <p className="light">{props.description}
          </p>
        </div>
      </div>
    </div>
  );
}
