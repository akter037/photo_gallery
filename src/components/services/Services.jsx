import React from 'react'
import './services.css'
import IMG1 from '../../assets/img1.jpg'
import IMG2 from '../../assets/img2.jpg'
import IMG3 from '../../assets/img3.jpg'

const Services = () => {
  return (
    <section id='services' className='services_bg'>
   

   <div className="container services_container">
    <h2>Hello! I'm Janathon Kubb, a freelance Photograpy.</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>

         <h3>WHAT SERVICES DO I OFFER</h3>

         <article>
          <div className="service">
             <img src={IMG1} alt="image" />
             
             <h3>Landscape</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sapiente veniam quia at? Placeat, aliquam?</p>

          </div>

          <div className="service">
             <img src={IMG2} alt="image" />
             
             <h3>Advertorial</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sapiente veniam quia at? Placeat, aliquam?</p>

          </div>

          <div className="service">
             <img src={IMG3} alt="image" />
             
             <h3>Conceptual</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sapiente veniam quia at? Placeat, aliquam?</p>

          </div>

         </article>


   </div>



    </section>
  )
}

export default Services