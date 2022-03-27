import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import onChangeHandler from "../utils/onChangeHandler";
import {useContext, useState} from "react";
import {AuthContext} from "../contexts/AuthProvider";
import {Link} from "react-router-dom";
import {Alert} from "@mui/material";
import "../App.css";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

export default function LoginCard({cardWidthLG, cardWidthXS}) {
    const [email,
        setEmail] = useState("");
    const [password,
        setPassword] = useState("");

    const {logIn, error, loading} = useContext(AuthContext);

    return (
        <div>
            <h1>Log In</h1>

            {error
                ? (
                    <Alert
                        severity="error"
                        sx={{
                        width: "30%",
                        margin: "2rem auto"
                    }}>
                        {error}
                    </Alert>
                )
                : (
                    <div></div>
                )}
            <Card
                sx={{
                width: {
                    lg: cardWidthLG,
                    xs: cardWidthXS
                },
                margin: "0rem auto",
                paddingBottom: "1rem"
            }}>
                <div
                    style={{
                    width: "60%",
                    margin: "auto"
                }}>
                    <FormControl variant="standard" fullWidth={true} required margin="normal">
                        <InputLabel
                            htmlFor="component-simple">
                            Email
                        </InputLabel>
                        <Input
                            id="component-simple"
                            type="email"
                            onChange={(event) => {
                            onChangeHandler(event, "email", null, setEmail, setPassword, null);
                        }}/>
                    </FormControl>
                </div>

                <div
                    style={{
                    width: "60%",
                    margin: "auto"
                }}>
                    <FormControl variant="standard" fullWidth={true} required margin="normal">
                        <InputLabel
                            htmlFor="component-simple">
                            Password
                        </InputLabel>
                        <Input
                            id="component-simple"
                            onChange={(event) => {
                            onChangeHandler(event, "password", null, setEmail, setPassword, null);
                        }}
                            type="password"/>
                    </FormControl>
                </div>

                <Button
                    onClick={() => {
                    logIn(email, password);
                }}
                    sx={{
                    margin: "1rem"
                }}
                    variant="contained"
                    disabled={loading}>
                    Log In
                </Button>
            </Card>
            <h2 >
                Don't have an account?{" "}
                <Link
                    to="/signup"
                    style={{
                    textDecoration: "none"
                }}>
                    <em>Sign up!</em>
                </Link>
            </h2>
        </div>
    );
}
