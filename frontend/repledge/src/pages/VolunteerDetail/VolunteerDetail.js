import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {useLocation, useParams} from 'react-router-dom'
import HeaderSignedIn from '../../components/HeaderSignedIn/HeaderSignedIn';
import Loader from '../../components/Loader';
import "./VolunteerDetail.css"
import TextField from "@mui/material/TextField";

function VolunteerDetail() {

    const {id} = useParams();

    const [data,
        setData] = useState(null);

    const [field,
        setField] = useState({});

    function onChangeHandler(event, {type}) {

        if (type === "NAME") {
            setField({
                ...field,
                name: event.target.value
            });
        } else if (type === "NUMBER") {
            setField({
                ...field,
                number: event.target.value
            });
        }
         else if (type === "LOCATION") {

            setField({
                ...field,
                location: event.target.value
            });
        }

        else if (type === "hrs") {

            setField({
                ...field,
                hrs: event.target.value
            });
        }
    }

    async function getData() {
        try {
            const response = await axios.get("https://fathomless-savannah-19987.herokuapp.com/drive/" + id + '/')
            console.log(response.data)
            setData(response.data);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>

            <HeaderSignedIn/> {data
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

                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Name"
                                type="text"
                                sx={{
                                color: "#1c626e",
                                margin: "1rem"
                            }}
                                onChange=
                                { (event) => onChangeHandler(event, {type: "NAME"}) }/>
                        </div>

                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Phone Number"
                                type="tel"
                                sx={{
                                color: "#1c626e",
                                margin: "1rem"
                            }}
                                onChange=
                                { (event) => onChangeHandler(event, {type: "NUMBER"}) }/>
                        </div>

                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Location"
                                type="text"
                                sx={{
                                color: "#1c626e",
                                margin: "1rem"
                            }}
                                onChange=
                                { (event) => onChangeHandler(event, {type: "Location"}) }/>
                        </div>

                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="No of hrs you can contribute"
                                type="text"
                                sx={{
                                color: "#1c626e",
                                margin: "1rem"
                            }}
                                onChange=
                                { (event) => onChangeHandler(event, {type: "hrs"}) }/>
                        </div>

                        <button style={{padding:"1rem"}} className='volunteerButton'>Volunteer</button>

                    </div>
                : <Loader></Loader>
}



        </div>
    )
}

export default VolunteerDetail