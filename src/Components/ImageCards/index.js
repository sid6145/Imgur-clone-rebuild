import React from "react";
import Tilt from "react-parallax-tilt";
import "./style.css";

function ImageCard(props) {
  return (
    <Tilt
      className="parallax-effect-img"
      tiltMaxAngleX={25}
      tiltMaxAngleY={25}
      perspective={1000}
      gyroscope={true}
    >
      <div className="card">
       <a href={props.imgUrl}><img src={props.imgUrl} /></a> 
      </div>
    </Tilt>
  );
}

export default ImageCard;
