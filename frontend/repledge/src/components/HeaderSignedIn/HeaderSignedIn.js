import React from 'react'
// import PersonIcon from './user_icon.png';
import './HeaderSignedIn.css'

function HeaderSignedIn() {
    return (
        <div className='holder'>

            <div className="logo">
                Repledge
            </div>

            <div className="userIcon">
                {/* <img src={PersonIcon} alt="img" /> */}
                <span class="material-icons">
                    account_circle
                </span>
            </div>

        </div>
    )
}

export default HeaderSignedIn;