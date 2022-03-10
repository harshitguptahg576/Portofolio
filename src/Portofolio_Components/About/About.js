import React from 'react'
import Title from '../Title'
import PhotoGallery from '../PhotoGallery'

const Aboutme = () => {
  return (
    <div className='about-me my-5'>
      <Title title="About Me" subTitle="Why Choose Me?"/>

      <div className='about-box'>
        <div className='photo-gallery'>
            <PhotoGallery />
        </div>
        <div className='bio'>

        </div>
      </div>
    </div>
  )
}

export default Aboutme