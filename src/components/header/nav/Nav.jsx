import React from 'react'
import './nav.css'
import Logo from '../../../assets/logo.png'
import {useState} from 'react'
import {ImMenu} from 'react-icons/im'
import {ImCross} from "react-icons/im";


const Nav = () => {
  const [activeNav,setActiveNav]=useState('#')
  const [isMobile,setIsMobile]=useState(false)

  return (
    <div id='nav' className='bg_nav'>
      
      <div className="container nav_container">

      
      <button  className='mobile-menu-icon' 
      onClick={() => setIsMobile(!isMobile)}>
    {isMobile ?(<ImCross size={20}/>
    
    ):(
    <ImMenu size={25}/>
    )}
     </button>
     
       
       <div className="nav_logo">
            <img src={Logo} alt="" />
            <h2>Kubb</h2>
       </div>
       
       <div className={isMobile? "pc_display" : "mb_display"} onClick={()=> setIsMobile(false)}>

        <ul>
          <li><a href="#" onClick={()=> setActiveNav('#')} className={activeNav=== '#'? 'active':' '}>Home</a></li>
          <li><a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav=== '#about'? 'active':' '}>About</a></li>
          <li><a href="https://akter037.github.io/myportfolio/" target="_blank">Portfolio</a></li>
          <li><a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav=== '#services'? 'active':' '}>Services</a></li>
          <li><a href="#testimonials" onClick={()=> setActiveNav('#testimonials')} className={activeNav=== '#testimonials'? 'active':' '}>Journal</a></li>
          <li><a href="#contact"  onClick={()=> setActiveNav('#contact')} className={activeNav=== '#contact'? 'active':' '}>Contact</a></li>
          
        </ul>
       </div>
       


      </div>



    </div>
  )
}

export default Nav