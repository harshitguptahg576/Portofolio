import React, { useRef } from 'react'
import Title from '../Title'
const Contactme = () => {
  const google = window.google
  const mapBox=useRef();
  const location={ lat: -25.344, lng: 131.036 };
  const map = new google.maps.Map(ge, {
    zoom: 4,
    center: location,
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });

  return (
    <>
      <div className="about-me my-5">
      <Title title="Contact Me" subTitle="Lets Keep In Touch !" />
      
      <div className='map' ref={mapBox}>

      </div>
      </div>
    </>
  )
}

export default Contactme