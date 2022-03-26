import React from 'react'
import Slider from '../../components/Slider/Slider'
import {sliderData} from '../Home/Home'
import './Volunteer.css'

function Volunteer() {
    return (

        <div className='volunteer_parent'>

        <h1>Drives around you</h1>

            <div className='grid'>
                {sliderData.map(item => {
                    return (
                        <div className="nayaCard">
                            <div className='imageView'>
                                <img src={item.image}/>
                            </div>
                            <div className='heading'>
                                <h3>{item.topic}</h3>
                            </div>

                            <div className="info">

                                {item.userImage
                                    ? <img src={item.userImage}/>
                                    : <span class="material-icons">account_circle</span>}
                                <span>{item.userName}</span>
                            </div>

                            <div className="location">
                                <span class="material-icons">
                                    location_on
                                </span>
                                <p>{item.location}</p>
                            </div>

                            <button className='volunteerButton'>Volunteer</button>

                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default Volunteer