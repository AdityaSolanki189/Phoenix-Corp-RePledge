import React from 'react'
import Slider from '../../components/Slider/Slider'
import {sliderData} from '../Home/Home'
import './Volunteer.css'

function Volunteer() {
  return (

    <div className='volunteer_parent'>
        <div className='grid'> 
            {sliderData.map(item => {
            return (
                <div className="nayaCard">
                    <div className='imageView'>
                        <img src={item.image}/>
                    </div>
                    <div className='heading'>
                        <p>{item.topic}</p>
                        </div>
                    
                </div>
            )

          })}
        </div>
    </div>
  )
}

export default Volunteer