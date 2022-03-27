import React from 'react'
// import PersonIcon from './user_icon.png';
import './HeaderSignedIn.css'
import { Link, useNavigate } from 'react-router-dom';


function HeaderSignedIn() {

    const navigate = useNavigate();
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

                        <li onClick={()=>{navigate("/my_drives")}} class="nav-link-list-item">My Drives</li>
                        
                        <li onClick={()=>{navigate("/my_donations")}} class="nav-link-list-item">My Donations</li>

                        <li onClick={()=>{navigate("/Volunteered")}} class="nav-link-list-item">Volunteered</li>

                        <a>
                        <span onClick={()=>{navigate("/profile")}} style={{fontSize:"2.25rem",marginRight:"2rem", cursor:"pointer"}} class="material-icons">
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