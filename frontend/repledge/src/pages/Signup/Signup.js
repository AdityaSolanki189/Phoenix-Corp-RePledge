import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import {Alert} from "@mui/material";
import {useState, useContext} from "react";
import {AuthContext} from "../../contexts/AuthProvider";
import {Link} from "react-router-dom";
import signupPageLogo from "../../resources/signup.svg";
import onChangeHandler from "../../utils/onChangeHandler";
import signUpHandler from "../../utils/signUpHandler";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

export default function SignUp() {
    const [username,
        setUsername] = useState("");
    const [email,
        setEmail] = useState("");
    const [password,
        setPassword] = useState("");
    const [confirmPassword,
        setConfirmPassword] = useState("");

    const {
        signUp,
        error,
        loading,
        setError,
        setLoading
    } = useContext(AuthContext);

    return (
        <div
            style={{
            position: "fixed",
            top: "0rem",
            bottom: "0rem",
            left: "0rem",
            right: "0rem",
            overflowY: "scroll"
        }}>
            <div
                style={{
                width: "50vw",
                height: "50vh",
                margin: "auto"
            }}>
                <img
                    src={signupPageLogo}
                    style={{
                    width: "100%",
                    height: "100%"
                }}
                    alt="Landing Page Logo"></img>
            </div>

            <h1 >Sign up</h1>

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
                    lg: "30%",
                    xs: "80%"
                },
                margin: "auto",
                paddingBottom: "1rem"
            }}>

                <div
                    style={{
                    width: "60%",
                    margin: "auto"
                }}>
                    <FormControl variant="standard" fullWidth={true} required margin="normal">
                        <InputLabel
                            htmlFor="component-simple"
                            >
                            Username
                        </InputLabel>
                        <Input
                            id="component-simple"
                            type="username"
                            onChange={(event) => {
                            onChangeHandler(event, "username", setUsername, setEmail, setPassword, setConfirmPassword);
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
                            htmlFor="component-simple"
                        >
                            Email
                        </InputLabel>
                        <Input
                            id="component-simple"
                            
                            type="email"
                            onChange={(event) => {
                            onChangeHandler(event, "email", setUsername, setEmail, setPassword, setConfirmPassword);
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
                            type="password"
                            onChange={(event) => {
                            onChangeHandler(event, "password", setUsername, setEmail, setPassword, setConfirmPassword);
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
                            Confirm Password
                        </InputLabel>
                        <Input
                            id="component-simple"
                            type="password"
                            onChange={(event) => {
                            onChangeHandler(event, "confirmPassword", setUsername, setEmail, setPassword, setConfirmPassword);
                        }}/>
                    </FormControl>
                </div>

                <Button
                    onClick={() => {
                    signUpHandler(signUp, password, confirmPassword, email, username, setError, setLoading);
                }}
                    sx={{
                    margin: "1rem"
                }}
                    variant="contained"
                    disabled={loading}>
                    Sign Up
                </Button>
            </Card>
            <h2 >
                Have an account?{" "}
                <Link
                    to="/"
                    style={{
                    textDecoration: "none"
                }}>
                    <em>Sign In!</em>
                </Link>
            </h2>
        </div>
    );
}
