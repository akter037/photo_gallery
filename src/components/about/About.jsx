import React from 'react'
import './about.css'

import IMG from '../../assets/IMG_1987.JPG'
import {AiOutlineCamera} from 'react-icons/ai'
import {BsCameraReels} from 'react-icons/bs'
import {AiOutlineEdit} from 'react-icons/ai'

const About = () => {
  return (
    <div id="about"  className='about_bg'>
      
      <div className="container about_container">

        <div className="about_me">

                <h3>A Little About Me</h3>

                <div className="about">

                <img src={IMG} alt="" />
                <div className="details">
                  <p>I am a person with flexibility of mind and capability to work
 Under pressure. I am smart and energetic; I have
 willingness to learn any new technology for the
 development of organization and mine. I am looking for an
 opportunity in your company to prove my skills, my
 dedication and myself.</p>
                </div>
                </div>

               


        </div>

        <div className="my_services">
            <h3 >My Services</h3>
        <div className='About_service'>
             <div className="icon">
              <AiOutlineCamera size={40}></AiOutlineCamera>

             </div>
             <div className="details_service">
              <h4>Photography</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, sint.</p>
             </div>

             <div className="icon">
              <BsCameraReels size={40}></BsCameraReels>

             </div>
             <div className="details_service">
              <h4>Motion Video</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, sint.</p>
             </div>

             <div className="icon">
              <AiOutlineEdit size={40}></AiOutlineEdit>

             </div>
             <div className="details_service">
              <h4>Photo Retouching</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, sint.</p>
             </div>



           
        </div>

        </div>






      </div>



       
    </div>
  )
}

export default About