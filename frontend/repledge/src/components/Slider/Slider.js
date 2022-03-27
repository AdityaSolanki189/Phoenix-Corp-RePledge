import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Slider.css'

function Slider({image, topic, userImage, userName, location,id}) {

    const navigate=useNavigate();

  return (
    <div className='slider'>
        <div className="imageView">
            <img src={image} />
        </div>
        <div className="topic">
            <span>{topic}</span>
        </div>

        <div className="info">
            
            {userImage? <img src={userImage} /> : <span class="material-icons">account_circle</span> }
            <span>{userName}</span>
        </div>
        <div className="location">
        <span class="material-icons">
location_on
</span>
            <p>{location}</p>
        </div>

        <button onClick={()=>{navigate(`/drive/${id}`)}} className='volunteerButton'>Volunteer</button>

    </div>
  )
}

export default Slider