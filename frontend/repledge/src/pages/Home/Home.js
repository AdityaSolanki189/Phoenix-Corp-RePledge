import React from 'react'
import './Home.css'
import HeaderSignedIn from '../../components/HeaderSignedIn/HeaderSignedIn'
import donationImg from '../../resources/yourDonationsImg.svg'
import donate from '../../resources/donate.svg'
import volunteer from '../../resources/volunteer.svg'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import host from "../../resources/host.svg"

function Home() {

const navigate=useNavigate();


  return (
    <div className='main'>
      <HeaderSignedIn />

      

      <div className="donate_n_volunteer">
        <div onClick={()=>{

          navigate("/donate")

        }} className="donate">
          <img src={donationImg} />
          <p>Donate</p>
        </div>

        <div className="volunteer">
          <img src={volunteer}/>
          <p>Volunteer</p>
        </div>

        <div className="host">
          <img src={host}/>
          <p>Host Drive</p>
        </div>
        
        
      </div>
        {/* <Footer/> */}

    </div>
  )
}

export default Home