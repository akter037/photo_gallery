import React from 'react'
import './testimonials.css'

import '../services/services.css'
import {useState} from 'react'
import IMG1 from '../../assets/img1.jpg'
import IMG2 from '../../assets/img2.jpg'
import IMG3 from '../../assets/img3.jpg'
import {FcLikePlaceholder} from 'react-icons/fc'
import {FcLike} from "react-icons/fc";

const Testimonials = () => {
  const [isMobile,setIsMobile]=useState(false);
  const [isMobile2,setIsMobile2]=useState(false);
  const [isMobile3,setIsMobile3]=useState(false);
  const [num,setNum]=useState(87);
  const [num2,setNum2]=useState(53);
  const [num3,setNum3]=useState(93)

   
  const incNum = () => {
       setNum( num +1);
  };
  const incNum2 = () => {
    setNum2( num2 +1);
};
const incNum3 = () => {
  setNum3( num3 +1);
};
  const decNum = () => {
    setNum( num -1);
};
const decNum2 = () => {
  setNum2( num2 -1);
};
const decNum3 = () => {
  setNum3( num3 -1);
};

  return (
    <div id='testimonials'>

      <div className="container test_container">

        <h2> From The Journal</h2>
      <article>
          <div className="service">
             <h3>Pellentesque Malesuada Vulputate</h3>
             <p>12-9-2022/Photography Journal</p>
             <img src={IMG1} alt="image" />
             
            
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sapiente veniam quia at? Placeat, aliquam?</p>
             <div className='read'>
             <a href="#">Read more..</a>
            
            <div className='counter_div'>
            <h3>{num}</h3>
             
             <button  
      onClick={() => setIsMobile(!isMobile)}>
    {isMobile ?(<FcLike onClick={decNum} size={20}/>
    
    ):(
    <FcLikePlaceholder  onClick={incNum}  size={20}/>
    )}
     </button>
            </div>
            

             </div>
             

          </div>

          <div className="service">
          <h3>Malesuada Portar Etiam Ligala</h3>
             <p>2-10-2022/Photography Journal</p>
             <img src={IMG2} alt="image" />
             
          
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sapiente veniam quia at? Placeat, aliquam?</p>
             <div className='read'>
             <a href="#">Read more..</a>
             <div className='counter_div'>
            <h3>{num2}</h3>
             
             <button  
      onClick={() => setIsMobile2(!isMobile2)}>
    {isMobile2 ?(<FcLike onClick={decNum2} size={20}/>
    
    ):(
    <FcLikePlaceholder  onClick={incNum2}  size={20}/>
    )}
     </button>
            </div>
             </div>
          </div>

          <div className="service">
          <h3>Pellentesque Malesuada Vulputate</h3>
             <p>12-9-2022/Photography Journal</p>
             <img src={IMG3} alt="image" />
             
             
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sapiente veniam quia at? Placeat, aliquam?</p>
             <div className='read'>
             <a href="#">Read more..</a>
             <div className='counter_div'>
            <h3>{num3}</h3>
             
             <button  
      onClick={() => setIsMobile3(!isMobile3)}>
    {isMobile3 ?(<FcLike onClick={decNum3} size={20}/>
    
    ):(
    <FcLikePlaceholder  onClick={incNum3}  size={20}/>
    )}
     </button>
            </div>
             </div>
          </div>

         </article>

      </div>






    </div>
  )
}

export default Testimonials