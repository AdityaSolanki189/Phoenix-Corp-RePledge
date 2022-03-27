import React, {useState, useContext} from 'react'
import HeaderSignedIn from '../../components/HeaderSignedIn/HeaderSignedIn';
import './ProfilePage.css';
import TextField from "@mui/material/TextField";
import Footer from '../../components/Footer/Footer';
import {Button} from '@mui/material';
import {signOut} from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import {auth} from '../../config/Firebase'
import {AuthContext} from '../../contexts/AuthProvider';

function ProfilePage() {

    const navigate = useNavigate();

    const [field,
        setField] = useState({});
    async function logout() {
        try {
            const response = signOut(auth);
            navigate("/");
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    function onChangeHandler(event, {type}) {

        if (type === "NAME") {
            setField({
                ...field,
                name: event.target.value
            });
        } else if (type === "LOCATION") {

            setField({
                ...field,
                location: event.target.value
            });
        } else if (type === "PHONE NUMBER") {

            setField({
                ...field,
                location: event.target.value
            });
        } else if (type === "EMAIL") {

            setField({
                ...field,
                location: event.target.value
            });
        }
    }

    const {
        signUp,
        error,
        loading,
        setError,
        setLoading,
        currentUser
    } = useContext(AuthContext);

    console.log(currentUser)

    const userImage = "https://image.shutterstock.com/image-photo/portrait-smiling-african-american-stu" +
            "dent-260nw-1194497215.jpg"

    return (
        <div className='profilePage'>
            <HeaderSignedIn/>
            <div className="mainContent">
                <div className="firstHalf">
                    <img src={userImage}/>

                </div>
                <div className="secondHalf">
                    <TextField
                        required={true}
                        id="outlined"
                        label={currentUser.displayName}
                        type="text"
                        sx={{
                        color: "#1c626e",
                        margin: "1rem",
                        width: "25vw"
                    }}
                        onChange=
                        { (event) => onChangeHandler(event, {type: "NAME"}) }/>
                    <TextField
                        required={true}
                        id="outlined"
                        label="7359102080"
                        type="number"
                        sx={{
                        color: "#1c626e",
                        margin: "1rem",
                        width: "25vw"
                    }}
                        onChange=
                        { (event) => onChangeHandler(event, {type: "MOBILE NUMBER"}) }/>
                    <TextField
                        required={true}
                        id="outlined"
                        label="Daman, Daman & Diu"
                        type="text"
                        sx={{
                        color: "#1c626e",
                        margin: "1rem",
                        width: "25vw"
                    }}
                        onChange=
                        { (event) => onChangeHandler(event, {type: "LOCATION"}) }/>

                    <TextField
                        required={true}
                        id="outlined"
                        label={currentUser.email}
                        type="text"
                        sx={{
                        color: "#1c626e",
                        margin: "1rem",
                        width: "25vw"
                    }}
                        onChange=
                        { (event) => onChangeHandler(event, {type: "EMAIL"}) }/>

                    <Button onClick={logout}>Log Out</Button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ProfilePage