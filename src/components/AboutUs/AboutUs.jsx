import React from 'react'
import './AboutUs.css'
import img from '../../assets/about.jpeg'

const AboutUs = () => {
  return (
    <div className='about-us'>
        <div>
            <h1 className='about'>ABOUT<span className='us'>US</span></h1>
            
        </div>
        <div className='about-img1'>
         <div className='about-img'>
         <img src={img} alt=''/>
         </div>
         <div className='aa'>
          <h2>EXPLORE THE DIFFERENCE</h2>
         
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam impedit fugiat laudantium temporibus quisquam eligendi at veritatis dicta dolorem exercitationem, fuga nemo eum maxime aut sunt natus velit amet aliquam.</p>
      <button>READ MORE</button>
      </div>
         
             </div>
      

      
    </div>
  )
}

export default AboutUs;
