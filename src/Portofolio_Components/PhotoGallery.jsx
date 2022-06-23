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
  
   // display gallery Images
  const imagesBox=[...galleryImg].filter((item)=>[...item.classList].includes("img"))
  var numList=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  imagesBox.forEach((image,i)=>{
    const imgIndex=Math.floor(Math.random()*(numList.length))
    image.style.backgroundImage=`url('/Portofolio/Assets/GalleryImg/${numList[imgIndex]}.jpg')`
    numList.splice(imgIndex,1)
  })

  },[])
  
  
  return (
      <div className="grid__container" ref={Gallery}>
        <div className="grid__item one img"></div>
        <div className="grid__item two img"></div>
        <div className="grid__item three img"></div>
        <div className="grid__item four"></div>
        <div className="grid__item five"></div>
        <div className="grid__item six img"></div>
        <div className="grid__item seven img"></div>
        <div className="grid__item eight img"></div>
        <div className="grid__item nine img"></div>
        <div className="grid__item ten img"></div>
        <div className="grid__item eleven img"></div>
        <div className="grid__item twelve"></div>
      </div>
  );
};

export default PhotoGallery;
