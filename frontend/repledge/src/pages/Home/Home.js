import React from 'react'
import './Home.css'
import HeaderSignedIn from '../../components/HeaderSignedIn/HeaderSignedIn'
import donationImg from '../../resources/yourDonationsImg.svg'
import donate from '../../resources/donate.svg'
import volunteer from '../../resources/volunteer.svg'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'

function Home() {

const navigate=useNavigate();


  return (
    <div className='main'>
      <HeaderSignedIn />

      <div className='YourDonation'>
        <img src={donationImg} />
        {/* <p><b>{myDonations.length ? 'Your Donations':'Make your First Donation'}</b></p> */}
        <p>Your Donations</p>

      </div>

      <div className="donate_n_volunteer">
        <div onClick={()=>{

          navigate("/donate")

        }} className="donate">
          <img src={donate} />
          <p>Donate</p>
        </div>

        <div className="volunteer">
          <img src={volunteer}/>
          <p>Volunteer</p>
        </div>
        
        <div className="hostDrive">
          
        </div>
      </div>
        {/* <Footer/> */}

    </div>
  )
}

export default Home