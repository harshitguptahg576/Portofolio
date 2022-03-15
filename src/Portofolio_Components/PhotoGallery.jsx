import React, { useEffect, useRef } from "react";

const PhotoGallery = () => {

  const Gallery=useRef(null);
  useEffect(() => {
    let galleryImg=Gallery.current.children;
    let flipImg;
  const animateGallery=setInterval(()=>{
    flipImg=galleryImg[Math.floor(Math.random()*galleryImg.length)];
    flipImg.classList.add("flip")
    setTimeout(()=>{
      flipImg.classList.remove("flip")
    },1000)
  },3000);
  

  })
  
  
  return (
      <div className="grid__container" ref={Gallery}>
        <div className="grid__item one"></div>
        <div className="grid__item two"></div>
        <div className="grid__item three"></div>
        <div className="grid__item four"></div>
        <div className="grid__item five"></div>
        <div className="grid__item six"></div>
        <div className="grid__item seven"></div>
        <div className="grid__item eight"></div>
        <div className="grid__item nine"></div>
        <div className="grid__item ten"></div>
        <div className="grid__item eleven"></div>
        <div className="grid__item twelve"></div>
      </div>
  );
};

export default PhotoGallery;
