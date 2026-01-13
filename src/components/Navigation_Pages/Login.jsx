import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { auth } from "../../../authentication";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login Successfull");
            console.log("Login Successfull");
            navigate("/");
        } catch (error) {
            alert(error.message);
        }
        console.log("Login", email, password);
    }
    return (

        <Paper sx={{

            display: "flex",
            flexDirection: "row",
           
            width : 800,
            height: 500,
            transform: "translate(40% , 40%)",
            // backgroundColor :  "#ea9f7698",
            borderRadius: 10,
            boxShadow: "2px 2px 2px  #4e4e4f98",
            backgroundColor: " #e2e2e498"
        }}>
            <Box component="form"
                onSubmit={handleLogin} sx={{
                    // pl: 35,
                    pt: 7,
                    pl: 7,

                }}>
                <Typography sx={{
                    fontSize: 30,
                    mb: 4, pl: 9,
                    fontWeight: "bold"
                }}>Login</Typography>
                <Button onClick={() => navigate("/")}
                    sx={{
                        position: "absolute",
                        top: "5%",
                        left: "2%",
                        fontSize: 20,
                        border: "1px solid #9a9a9d98",
                        backgroundColor: "#9a9a9d98",
                        color: "black",
                        fontWeight: "bold"
                    }}>X</Button>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    mb: 2,

                }}>
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
                        }}/> < EmailIcon sx={{
                            position: "absolute",
                            left: "38%",
                            top: "29%",
                            fontSize: 35,
                            color: "#4e4e4f98",
                        }} />
                    <TextField type="password"
                        value={password}
                        label="Please Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{
                            width: 300,
                            "& .MuiOutlinedInput-root": {
                                borderRadius: 5
                            }
                        }}  /><LockIcon sx={{
                            position: "absolute",
                            left: "38%",
                            top: "46%",
                            fontSize: 35,
                            color: "#4e4e4f98",
                        }} />
                    <Typography sx={{pt: 3}}>Forget password...?</Typography>
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
                        }}>Login</Button>
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
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                border: "1px solid #7e75f798",
                backgroundColor: "#392bf698",
                //  borderRadius: 10,
                borderTopRightRadius: 32,
                borderBottomRightRadius: 32,
                borderTopLeftRadius: 120,
                borderBottomLeftRadius: 120,
                ml: 10
            }}>
                <Typography sx={{
                    fontWeight: "bold",
                    fontSize: 40,
                    // pl : 10,
                    // pr: 10,
                    color: "white"
                }}>Hello, Welcome!</Typography>
                <Typography sx={{
                    fontSize: 14,
                    pl: 15,
                    pb: 5,
                    pr: 12,
                    color: "white"
                }}>Don't have an account?</Typography>
                <Button onClick={() => navigate("/register")}
                    sx={{
                        color: "white",
                        fontSize: 20,
                        fontWeight: "bold",
                        border: "1px solid  #13131698",
                        // p : 2,
                        pr: 3,
                        pl: 3, pt: 1, pb: 1,
                        cursor: "pointer"
                    }}>Register</Button>
            </Box>
        </Paper>

    )
}