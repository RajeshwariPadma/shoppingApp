import { useState } from "react"


import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { auth } from "../../../authentication";
import Button from "@mui/material/Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";


export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");

   const navigate = useNavigate();

    const handleRegister = async (e) => {
         e.preventDefault();

        try {
            // await signInWithEmailAndPassword(auth, email, password)
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Registration Successful");
            console.log("Registration Successfull");
            navigate("/");

        } catch (error) {
            alert(error.message);
        }
        console.log("Registration", email, password, userName);
    }
    return (

        <Paper sx={{

            display: "flex",
            flexDirection: "row",
            width: 800,
            height: 500,
            transform: "translate(40% , 40%)",
            // backgroundColor :  "#ea9f7698",
            borderRadius: 10,
            boxShadow: "2px 2px 2px  #4e4e4f98",
            backgroundColor: " #e2e2e498"
        }}
        >
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                border: "1px solid #7e75f798",
                backgroundColor: "#392bf698",
                //  borderRadius: 10,
                borderTopRightRadius: 120,
                borderBottomRightRadius: 120,
                borderTopLeftRadius: 32,
                borderBottomLeftRadius: 32
            }}>
                <Typography sx={{
                    fontWeight: "bold",
                    fontSize: 40,
                    // pl : 10,
                    // pr: 10,
                    color: "white"
                }}>Welcome Back!</Typography>
                <Typography sx={{
                    fontSize: 20,
                    pl: 10,
                    pb: 5,
                    pr: 10,
                    color: "white"
                }}>Alredy have an account</Typography>
                <Button onClick={() => navigate("/login")} sx={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                    border: "1px solid  #13131698",
                    // p : 2,
                    pr: 3,
                    pl: 3, pt: 1, pb: 1,
                    cursor: "pointer"
                }}>Login</Button>
            </Box>
            <Box component="form" 
            onSubmit={handleRegister} sx={{
                // pl: 35,
                pt: 7,
                pl: 7 ,
               
            }}>
                <Typography  sx={{
                    fontSize: 30,
                    mb: 4, pl: 9,
                    fontWeight: "bold"
                }}>Registration</Typography>
                <Button onClick={() => navigate("/")} 
                    sx={{position : "absolute" ,
                        top : "5%",
                        right : "2%",
                        fontSize : 20,
                        border : "1px solid #9a9a9d98" ,
                        backgroundColor : "#9a9a9d98",
                        color : "black",
                        fontWeight : "bold"
                    }}>X</Button>
                <Box   sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    mb: 2,

                }}>
                    <TextField type="text"
                        value={userName}
                        label="User Name"
                        onChange={(e) => setUserName(e.target.value)}
                        variant="outlined"
                        sx={{
                            mb: 4,
                            width: 300,
                            "& .MuiOutlinedInput-root": {
                                borderRadius: 5
                            }
                        }} /> <AccountCircleIcon
                        sx={{
                            position: "absolute",
                            right: "10%",
                            top: "29%",
                            fontSize: 35,
                            color: "#4e4e4f98",
                        }} />
                    <TextField type="email"
                        value={email}
                        label="Please Enter Email"
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{
                            mb: 4,
                            width: 300,
                            "& .MuiOutlinedInput-root": {
                                borderRadius: 5
                            }
                        }} /> < EmailIcon sx={{
                            position: "absolute",
                            right: "10%",
                            top: "46%",
                            fontSize: 35,
                            color: "#4e4e4f98",
                        }} />
                    <TextField type="password"
                        label="Please Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{
                            width: 300,
                            "& .MuiOutlinedInput-root": {
                                borderRadius: 5
                            }
                        }} /> <LockIcon sx={{
                            position: "absolute",
                            right: "10%",
                            top: "64%",
                            fontSize: 35,
                            color: "#4e4e4f98",
                        }} />
                    <Button type="submit"
                        sx={{
                            border: "1px solid ",
                            width: 300,
                            borderRadius: 10,
                            mt: 2,
                            backgroundColor: "#3224f098",
                            color: "white",
                            fontWeight: "bold",
                            "&:hover": {
                                backgroundColor: "#1b11a398",
                            }
                        }}>Register</Button>
                </Box>

                <Box sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    mt: 2
                }}>
                    <FacebookIcon sx={{
                        color: "black",
                        border: "1px solid black",
                        p: 0.5,
                        borderRadius: 3,
                        cursor: "pointer",
                        "&:hover": {
                            background: "#0508d498",
                            color: "white",
                            transform: "scale(1.2)",
                            border: "none"
                        }

                    }} />
                    <InstagramIcon sx={{
                        color: "black", border: "1px solid black",
                        p: 0.5,
                        borderRadius: 3,
                        cursor: "pointer",
                        "&:hover": {
                            color: "white",
                            background: "linear-gradient(135deg , #e51fe598 , #ce071198 ,  #b7230c98 , #cfed2998)",
                            transform: "scale(1.2)",
                            border: "none"
                        }

                    }} />
                    <TwitterIcon sx={{
                        color: "black", border: "1px solid black",
                        p: 0.5,
                        borderRadius: 3,
                        cursor: "pointer",
                        "&:hover": {
                            color: "white",
                            background: " #0f34ec98",
                            transform: "scale(1.2)",
                            border: "none"
                        }
                    }} />
                    <GitHubIcon sx={{
                        color: "black", border: "1px solid black",
                        p: 0.5,
                        borderRadius: 3,
                        cursor: "pointer",
                        "&:hover": {
                            color: "white",
                            background: "black",
                            transform: "scale(1.2)",
                            border: "none"
                        }
                    }} />
                </Box>
            </Box>
        </Paper>

    )
}