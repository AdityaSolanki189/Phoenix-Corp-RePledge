import React, { useEffect, useRef } from 'react'
import './Home.css'
import HeaderSignedIn from '../../components/HeaderSignedIn/HeaderSignedIn'
import donationImg from '../../resources/yourDonationsImg.svg'
import donate from '../../resources/donate.svg'
import volunteer from '../../resources/volunteer.svg'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import host from "../../resources/host.svg"
import Slider from '../../components/Slider/Slider'

export const sliderData = [
  {
    image: "https://media.istockphoto.com/photos/professional-doctor-preparing-patient-for-procedure-picture-id627290560?k=20&m=627290560&s=612x612&w=0&h=LAe2Ou94kCGRju_7KDbAwZBSw1yH7EGLRRNKSOvFx2c=",
    topic: "Blood Donation Camp",
    userImage: "https://lh3.googleusercontent.com/a-/AOh14GgKi3wA77XAADe3-D4CtBg06TYVutdtGh2xmaMUjA=s48",
    userName: "Aditya Nair",
    location: "Kalyan, Mumbai"
  },
  {
    image: "https://media.istockphoto.com/photos/woman-donating-unwanted-items-to-charity-shop-picture-id487227763?k=20&m=487227763&s=612x612&w=0&h=aeVCR-IlknPeImzqqlPi1R7yOVsdC5cdh7DR6vkas_A=",
    topic: "Books Donation Camp",
    userImage: "https://lh3.googleusercontent.com/ogw/ADea4I5oLFrbMfbGcw1mFvbfhM-_DfiRdiirmKw-eipRKw=s32-c-mo",
    userName: "Anurag Patil",
    location: "Daman, Daman & Diu"
  },
  {
    image: "https://media.istockphoto.com/photos/volunteers-planting-a-tree-picture-id1130655067?k=20&m=1130655067&s=612x612&w=0&h=RAzFqA78Vpge5nBtFY26BYK0BoDOJP6ZANhK-nCQPLY=",
    topic: "Tree Plantation",
    userImage: "",
    userName: "Aditya Solanki",
    location: "Thane, Mumbai"
  },
  {
    image: "https://media.istockphoto.com/photos/generous-people-helping-to-poor-people-picture-id1139776668?k=20&m=1139776668&s=612x612&w=0&h=9ASOaytjDWhH5y6flg4g7Hbm0It_V7PVeoO_428XeDk=",
    topic: "Food Donation",
    userImage: "",
    userName: "Prem Jha",
    location: "Kalyan, Mumbai"
  }
];


function Home() {

  const scroller = useRef();

  function leftScroll() {
    scroller.current.scrollLeft -= 400;
  }

  function rightScroll() {
    scroller.current.scrollLeft += 400;
  }

//   const {
//     signUp,
//     error,
//     loading,
//     setError,
//     setLoading,
//     currentUser
// } = useContext(AuthContext);

// useEffect(()=>{
//   currentUser?navigate('/home'):navigate('/login')
// },[])


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

        <div onClick={()=>{

            navigate("/volunteer")

          }} className="volunteer">
          <img src={volunteer} />
          <p>Volunteer</p>
        </div>

        <div className="host">
          <img src={host}/>
          <p>Host Drive</p>
        </div>
        
        
      </div>

      <h1 style={{marginBottom:"-1rem",color:"#212529"}}>Upcoming Drives</h1>

      <div
        className="playlist-slot-desktop"
        style={{ width: "100%", margin: "auto", display: "flex", justifyContent: "center" }}
      >
        {/* <h3 style={{ textAlign: "left" }}>{playlistName}</h3> */}
        <button
          onClick={() => {
            leftScroll();
          }}
          style={{
            marginLeft: "auto",
            padding: "0.5rem",
            backgroundColor: "white",
            border: "none",
            cursor: "pointer"
          }}
        ><span class="material-icons">
            arrow_back_ios
          </span>
        </button>
        <div
          ref={scroller}
          style={{
            margin: "2rem auto" ,
            display: "flex",
            width: "72vw",
            flexDirection: "row",
            overflowX: "hidden",
            scrollBehavior: "smooth",
            padding:"1rem"
            // border: "2px #D1D9D9 solid",
          }}
        >
          {" "}
          {sliderData.map(item => {
            return (<Slider
              image={item.image}
              topic={item.topic}
              userImage={item.userImage}
              userName={item.userName}
              location={item.location}
            />)

          })}
        </div>
        <button
          onClick={() => rightScroll()}
          style={{
            marginRight: "auto",
            padding: "0.5rem",
            backgroundColor: "white",
            border: "1px white solid",
            cursor: "pointer"
          }}
        >
          <span class="material-icons">
            arrow_forward_ios
          </span>
        </button>
      </div>

      {/* <Footer/> */}

    </div>
  )
}

export default Home