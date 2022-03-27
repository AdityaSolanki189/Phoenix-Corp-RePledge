import axios from 'axios'
import React, {useEffect} from 'react'
import './MyDrives.css'
import {useContext, useState} from 'react'
import {AuthContext} from '../../contexts/AuthProvider'

function MyDrives() {

    useEffect(() => {
        getData();
    }, [])

    const {currentUser} = useContext(AuthContext);

    async function getData() {
        try {
          console.log(currentUser)
            const response = await axios.get("https://fathomless-savannah-19987.herokuapp.com/drive/filter/" + currentUser.displayName)
            console.log(response.data)
            setData(response.data)
            console.log(response)
        } catch (err) {
            console.logo(err)
        }
    }

    const [data,
        setData] = useState([])

    return (
        <div className='MyDrives'>

            {data.length > 0
                ? <div
                        style={{
                        boxShadow: "0 0 5px rgb(0 0 0 / 25%)",
                        width: "fit-content",
                        padding: "1rem",
                        margin: "1rem auto"
                    }}>

                        <h1 class="volunteer-detail-title">
                            {data.drive_name}
                        </h1>

                        <h2>{data.description}</h2>

                        <img alt="Depiction of volunteer" src={data.image}></img>

                        <p>
                            <span class="material-icons">
                                location_on
                            </span>{data.location}</p>

                        <div
                            style={{
                            textAlight: "left"
                        }}>
                            Organised by {data.ngo}
                        </div>

                    </div>
                : <h1>You have never hosted any drives :( </h1>}

            {/* <div
                        style={{
                        boxShadow: "0 0 5px rgb(0 0 0 / 25%)",
                        width: "fit-content",
                        padding: "1rem",
                        margin: "1rem auto"
                    }}>
                        <h1 class="volunteer-detail-title">
                            {data.drive_name}
                        </h1>

                        <h2>{data.description}</h2>

                        <img alt="Depiction of volunteer" src={data.image}></img>

                        <p>
                            <span class="material-icons">
                                location_on
                            </span>{data.location}</p>

                        <div
                            style={{
                            textAlight: "left"
                        }}>
                            Organised by {data.ngo}
                        </div>
                        </div> */}

        </div>
    )
}

export default MyDrives