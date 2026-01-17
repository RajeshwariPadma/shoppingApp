import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Footer = () => {
    return (
        <Box sx={{
            mt: 10,
            backgroundColor: "lightgrey",
            display: "grid",
            gridTemplateColumns: "repeat(3 , 1fr)",
            p: 8
        }}>
            <Box>
                <Typography sx={{
                    fontSize: 30,
                    fontWeight: "bold",
                }}>About</Typography>
                <Typography sx={{ fontSize: 15, pt: 2 ,
                    "&::first-letter" : {
                        color : "black",
                        fontSize : 30
                    }
                 }}>Panda Shopping App is your one-stop destination for easy, secure, and enjoyable online shopping. Discover a wide range of quality products, great deals, and a smooth shopping experience—all in one place.</Typography>
            </Box>

            <Box sx={{ pl: 14 }}>
                <Typography sx={{
                    fontSize: 30,
                    fontWeight: "bold"
                }}>Social Media</Typography>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    mt: 2,
                    flexDirection: "column",
                    gap: 2
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,

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

                        }} /> <Typography sx={{
                            fontSize: 18, pt: 0.5,
                            "&:hover": {
                                textDecorationLine: "underline",
                                textDecorationThickness: 1,
                                cursor: "pointer",
                            }

                        }}>Facebook</Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,

                    }}>
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

                        }} /><Typography sx={{
                            fontSize: 18, pt: 0.5,
                            "&:hover": {
                                textDecorationLine: "underline",
                                textDecorationThickness: 1,
                                cursor: "pointer",
                            }

                        }}>Instagram</Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,

                    }}>
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
                        }} /><Typography sx={{
                            fontSize: 18, pt: 0.5,
                            "&:hover": {
                                textDecorationLine: "underline",
                                textDecorationThickness: 1,
                                cursor: "pointer",
                            }

                        }}>Twitter</Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,

                    }}>
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
                        }} /><Typography sx={{
                            fontSize: 18, pt: 0.5,
                            "&:hover": {
                                textDecorationLine: "underline",
                                textDecorationThickness: 1,
                                cursor: "pointer",
                            }

                        }}>GitHub</Typography>
                    </Box>

                </Box>


            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                cursor : "pointer"

            }}>
                <Typography sx={{
                    fontSize: 30,
                    fontWeight: "bold"
                }}>Contact Us</Typography>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <Typography sx={{
                        fontSize: 20,
                        fontWeight: "bold"
                    }}>Email: </Typography>
                    <Typography sx={{ fontSize: 20 ,
                         "&:hover": {
                                textDecorationLine: "underline",
                                textDecorationThickness: 1,
                                cursor: "pointer",
                            }
                     }}> abcd@gmail.com</Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <Typography sx={{
                        fontSize: 20,
                        fontWeight: "bold"
                    }}>Phone Number</Typography>
                    <Typography sx={{ fontSize: 20 ,
                         "&:hover": {
                                textDecorationLine: "underline",
                                textDecorationThickness: 1,
                                cursor: "pointer",
                            }
                     }}>+91-9874563210</Typography>
                </Box>
            </Box>
        </Box>

    )
}