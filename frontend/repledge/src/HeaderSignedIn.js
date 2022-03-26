import React from 'react'
import PersonIcon from './user_icon.png';
import './HeaderSignedIn.css'

function HeaderSignedIn() {
  return (
    <div className='main'>

        <div className="logo">
            Repledge
        </div>

        <div className="userIcon">
            <img src={PersonIcon} alt="img" />
        </div>

    </div>
  )
}

export default HeaderSignedIn;