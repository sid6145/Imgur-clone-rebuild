import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import ImageCard from "../ImageCards";
import "./style.css";

function ImageContainer() {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    getImage();
  }, [])

  function getImage() {
    db.collection("images").onSnapshot(function (querySnapshot) {
      setImageList(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          url: doc.data().url,
        }))
      );
    });
  }

  console.log(imageList)
  return <div className="img-container">
    
    {
      imageList.map((item) => (
        <ImageCard imgUrl={item.url}/>
      ))
    }
  
  </div>;
}

export default ImageContainer;
