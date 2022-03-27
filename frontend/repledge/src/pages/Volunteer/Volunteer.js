import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderSignedIn from '../../components/HeaderSignedIn/HeaderSignedIn'
import Slider from '../../components/Slider/Slider'
import {sliderData} from '../Home/Home'
import './Volunteer.css'
import { useEffect } from 'react'
import Loader from '../../components/Loader'

function Volunteer() {


    const navigate =useNavigate();

    async function getData(){
        try{    
            const response= await axios.get("https://fathomless-savannah-19987.herokuapp.com/drive/");
            console.log(response.data);
            setData(response.data)
        }catch(err){
            console.log(err)
        }
    }

    const [data,setData]=useState(null)

    useEffect(() => {
     
        getData();
    
      
    }, [])
    

    return (

        <div className='volunteer_parent'>

            <HeaderSignedIn/>
        <h1 style={{fontFamily:""}}>Drives around you</h1>

            <div className='grid'>


              


                {data?data.map(item=>{
                   return (
                    <div className="nayaCard">
                        <div className='imageView'>
                            <img src={item.image}/>
                        </div>
                        <div className='heading'>
                            <h3>{item.drive_name}</h3>
                        </div>

                        <div className="info">

                            {item.prof_image
                                ? <img src={item.prof_image}/>
                                : <span class="material-icons">account_circle</span>}
                            <span>{item.ngo}</span>
                        </div>

                        <div className="location">
                            <span class="material-icons">
                                location_on
                            </span>
                            <p>{item.location}</p>
                        </div>

                        <button onClick={()=>{navigate(`/drive/${item.id}`)}} className='volunteerButton'>Volunteer</button>

                    </div>
                )
                }):<div><Loader/></div>}





            </div>
        </div>
    )
}

export default Volunteer