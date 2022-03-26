import React from 'react'
import './YourDonation.css';
import donationImg from '../../resources/yourDonationsImg.svg'

function YourDonation() {
  return (
    <div className='YourDonation'>
        <img src={donationImg}/>
        <p>Your Donations</p>
    </div>
  )
}

export default YourDonation