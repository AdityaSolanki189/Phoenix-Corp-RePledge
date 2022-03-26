import React from 'react'
import './Home.css'
import HeaderSignedIn from '../../components/HeaderSignedIn/HeaderSignedIn'
import YourDonation from '../../components/YourDonation/YourDonation'

function Home() {
  return (
    <div className='main'>
        <HeaderSignedIn/>
        <div className="yourDonations">
          <YourDonation/>
        </div>
    </div>
  )
}

export default Home