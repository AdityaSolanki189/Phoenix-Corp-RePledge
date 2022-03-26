import donate from "../../resources/donate.svg"
import "./DonationForm.css"
import {useContext, useState} from "react";
import TextField from "@mui/material/TextField";
import {InputLabel, Select, MenuItem,Button} from "@mui/material";
import {margin} from "@mui/system";

export default function DonationForm() {

    const [field,
        setField] = useState({});

    const [category,
        setCategory] = useState("");

    function onChangeSelect(event) {
        setCategory(event.target.value)
    }

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
        } else if (type === "ITEMNAME") {
            setField({
                ...field,
                item_name: event.target.value
            });
        } else if (type === "QUANTITY") {
            setField({
                ...field,
                quantity: event.target.value
            });

        } else if (type === "DATE") {


            setField({
                ...field,
                pickup: event.target.value
            });
        }
        else if (type === "NGO") {


            setField({
                ...field,
                ngo: event.target.value
            });
        }
        else if (type === "APARTMENT") {


            setField({
                ...field,
                apartment: event.target.value
            });
        }
        else if (type === "LOCATION") {


            setField({
                ...field,
                location: event.target.value
            });
        }
    }

    return <div className="donationform-holder">

        <div className="donationform-image-parent">
            <img class="donationform-image" src={donate}></img>
        </div>

        <h1 className="donationform-tagline">Donate things which you think could be useful to others!</h1>

        <div class="card">

            <div className="donationform-inputblock">
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

                <TextField
                    required
                    id="outlined-required"
                    label="Ph Number"
                    type="tel"
                    sx={{
                    margin: "1rem",
                    color: "#1c626e"
                }}
                    onChange=
                    { (event) => onChangeHandler(event, {type: "NUMBER"}) }/>
            </div>

            <div className="donationform-inputblock">
                <TextField
                    required
                    id="outlined-required"
                    label="Item Name"
                    type="text"
                    sx={{
                    color: "#1c626e",
                    margin: "1rem"
                }}
                    onChange=
                    { (event) => onChangeHandler(event, {type: "ITEMNAME"}) }/>

                <TextField
                    required
                    id="outlined-required"
                    label="Quantity"
                    type="number"
                    sx={{
                    color: "#1c626e",
                    margin: "1rem"
                }}
                    onChange=
                    { (event) => onChangeHandler(event, {type: "QUANTITY"}) }/>
            </div>

            <div className="donationform-inputblock">
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
                    required={true}
                    id="outlined-required"
                    type="date"
                    sx={{
                    color: "#1c626e",
                    margin: "1rem"
                }}
                    onChange=
                    { (event) => onChangeHandler(event, {type: "DATE"}) }/>

                <TextField
                    required={false}
                    id="outlined"
                    label="NGO"
                    type="text"
                    sx={{
                    color: "#1c626e",
                    margin: "1rem"
                }}
                    onChange=
                    { (event) => onChangeHandler(event, {type: "NGO"}) }/>

            </div>


            <div className="donationform-inputblock">
                <TextField
                    required={true}
                    id="outlined-required"
                    type="text"
                    label="Apartment Number"
                    sx={{
                    color: "#1c626e",
                    margin: "1rem"
                }}
                    onChange=
                    { (event) => onChangeHandler(event, {type: "APARTMENT"}) }/>

                <TextField
                    required={true}
                    id="outlined"
                    label="Location"
                    type="text"
                    sx={{
                    color: "#1c626e",
                    margin: "1rem"
                }}
                    onChange=
                    { (event) => onChangeHandler(event, {type: "LOCATION"}) }/>

            </div>

            <Button sx={{backgroundColor:"#1c626e"}} variant="contained">Donate</Button>

        </div>

    </div>
}