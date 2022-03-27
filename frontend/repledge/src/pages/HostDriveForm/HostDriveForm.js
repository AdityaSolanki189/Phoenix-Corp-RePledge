import hostdrive from "../../resources/hostdrive.svg"
import "./HostDriveForm.css"
import {useContext, useState} from "react";
import { TextField } from "@mui/material";
import { InputLabel, Select, MenuItem, Button } from "@mui/material";
import axios from "axios";
import Loader from "../../components/Loader";

export default function HostDriveForm() {

    const [field, setField] = useState({});
    
    const [category, setCategory] = useState("");

    const [loadingMessage, setLoadingMessage] = useState("");

    const [loader, setLoader] = useState(false);

    function onChangeSelect(event) {
        setCategory(event.target.value)
    }

    async function postData(){
        try{
            setLoadingMessage("Hosting your drive..")
            console.log("Hosting")
            const data=field;
            const dataWithCategory={...data,category:category};
            console.log(dataWithCategory)
            const response=await axios.post("https://fathomless-savannah-19987.herokuapp.com/drive/",dataWithCategory)
            setLoader(false)
            setLoadingMessage("")
            console.log(response.data)
        }catch(err){
            console.log(err)
            setLoader(false)
        }
    }

    function onChangeHandler(event, {type}) {

        if (type === "DRIVENAME") {
            setField({
                ...field,
                drive_name: event.target.value
            });
        } else if (type === "CATEGORY") {
            setField({
                ...field,
                category: event.target.value
            });
        } else if (type === "LOCATION") {
            setField({
                ...field,
                location: event.target.value
            });
        } else if (type === "DESCRIPTION") {
            setField({
                ...field,
                description: event.target.value
            });

        } else if (type === "NUMBER") {
            setField({
                ...field,
                number: event.target.value
            });
        }
        else if (type === "NGO") {
            setField({
                ...field,
                ngo: event.target.value
            });
        }
    }

    return <div className="hostform-holder">
 
        { loader?<Loader loadingMessage={loadingMessage}></Loader>:<div></div>}  

        {
            loader?<Loader loadingMessage={loadingMessage}></Loader>:<div></div>
        }
        <h1 className="hostform-tagline">
            Host a Drive for a Greater Good!
        </h1>

        <div className="mainParent">
        <div className="hostform-image-parent">
            <img class="hostform-image" src={hostdrive}></img>
        </div>
        

        <div className="card">

            <div className="hostdrive-inputblock">
                <TextField
                    required
                    id="outlined-required"
                    label="Drive Name"
                    type="text"
                    sx={{
                    color: "#1c626e",
                    margin: "1rem" }}
                    
                    onChange={(event) => onChangeHandler(event, {type:"DRIVENAME"})}
                />
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    fullWidth={true}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Category"
                    onChange=
                    { (event) => onChangeSelect(event) }>
                    <MenuItem value={"books"}>Books</MenuItem>
                    <MenuItem value={"furniture"}>Furniture</MenuItem>
                    <MenuItem value={"electronic"}>Electronics</MenuItem>
                    <MenuItem value={"clothes"}>Clothes</MenuItem>
                </Select>
            </div>
            <div className="donationform-inputblock">
                <TextField
                    required
                    id="outlined-required"
                    label="Phone Number"
                    type="number"
                    sx={{
                    color: "#1c626e",
                    margin: "1rem"
                }}
                    onChange=
                    { (event) => onChangeHandler(event, {type: "NUMBER"}) }/>

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
                    { (event) => onChangeHandler(event, {type: "LOCATION"}) }/>
            </div>
            <div className="hostform-inputblock">
                <TextField
                    required
                    id="outlined-required"
                    label="Description"
                    type="text"
                    sx={{
                    color: "#1c626e",
                    margin: "1rem"
                }}
                    onChange=
                    { (event) => onChangeHandler(event, {type: "DESCRIPTION"}) }/>
            </div>
            <div className="hostform-inputblock">
                <TextField
                    required
                    id="outlined-required"
                    label="NGO Connected"
                    type="text"
                    sx={{
                    color: "#1c626e",
                    margin: "1rem"
                }}
                    onChange=
                    { (event) => onChangeHandler(event, {type: "NGO"}) }/>
            </div>
            <Button onClick={()=>{
                postData();
                setLoader(true)
                
                }} sx={{backgroundColor:"#1c626e"}} variant="contained">Host</Button>
        </div>
        </div>

        
    </div>
};
