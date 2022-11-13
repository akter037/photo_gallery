import React from 'react'
import './gallery.css'
import IMG1 from '../../assets/img1.jpg'
import IMG2 from '../../assets/img2.jpg'  

const Gallery = () => {
  return (
   <section id='gallery' >

    <div className="gallery_container">
   <h2>LATEST INSTAGRAM SHOTS </h2>

   <div className='images'>
   <div className="image_gallery">
    <img src={IMG1} alt="" />
   </div>
   <div className="image_gallery  image_gallery2">
    <img src={IMG2} alt="" />
   </div>

   <div className="image_gallery">
    <img src={IMG1} alt="" />
   </div>
   <div className="image_gallery  image_gallery2">
    <img src={IMG2} alt="" />
   </div>
   <div className="image_gallery">
    <img src={IMG1} alt="" />
   </div>
   <div className="image_gallery  image_gallery2">
    <img src={IMG2} alt="" />
   </div>

   </div>
     <div className='btn'>
     <button > Instagram Page</button>
     </div>
    

    </div>

   </section>
  )
}

export default Gallery