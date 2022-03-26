import React from 'react'
// import PersonIcon from './user_icon.png';
import './HeaderSignedIn.css'
import { Link } from 'react-router-dom';

function HeaderSignedIn() {
    return (

        <header>
            <nav class="nav-container">
                <div
                    class="mobile-nav-toggle"
                    aria-controls="nav-link-list"
                    aria-expanded="false">
                    <span class="sr-only">Menu</span>
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>

                <div class="nav-logo">
                    <a href="/">
                        <div class="nav-title" style={{fontFamily:"none"}}>
                            Repledge
                            
                        </div>
                        <div class="nav-tagline" style={{color:"#8c042c"}} >Donate Volunteer Host</div>
                    </a>
                </div>

                <div style={{marginLeft:"auto"}} class="nav-links">
                    <ul class="nav-link-list" id="nav-link-list" data-visible="false">
                        <a href="/">
                            <li class="nav-link-list-item">My Drives</li>
                        </a>

                        <a href="/docs.html">
                            <li class="nav-link-list-item">My Donations</li>
                        </a>

                        <a href="/docs.html">
                            <li class="nav-link-list-item">Volunteered</li>
                        </a>

                        <a>
                        <span style={{fontSize:"2.25rem",marginRight:"2rem"}} class="material-icons">
                                account_circle
                            </span>
                        </a>


                    </ul>
                </div>

               
            </nav>
        </header>

    // <div className='holder'>     <div className="logo">         Repledge
    // </div>     <div className="userIcon">         {/* <img src={PersonIcon}
    // alt="img" /> */}         <span class="material-icons">
    // account_circle         </span>     </div> </div>
    )
}

export default HeaderSignedIn;