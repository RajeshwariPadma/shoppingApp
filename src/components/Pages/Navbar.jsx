
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import navbar_logo from "../../assets/navbar_logo.jpg"
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useContext, useState } from 'react';
import Paper from "@mui/material/Paper";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useMemo } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from '../Navigation_Pages/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../../authentication';

export const Navbar = ({ exploreWomenRef, exploreElectronicRef, exploMenRef, exploreAllRef, products, search, setSearch }) => {
 
    const {user} = useContext(AuthContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [loginAnchorEl, setLoginAnchorEl] = useState(null);
    const [loginOpen, setLoginOpen] = useState(false);
    const navigate = useNavigate();

    //Logout 
     const handleLogoutButton = async() => {
      if(!user){
        return
      }
        try {
            await signOut(auth);
            alert("Logout sucessfully");
            navigate("/");
        } catch (error) {
            alert(error.message);
            console.log(error);
        }
        
    };

   

    //Search bar
    const searchData = useMemo(() => {
        if (!search) return [];
        return products.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));
    }, [search, products]);

    //remove the text from search bar
    const handleRemove = () => {
        setSearch("");
    }

    //navigate to women block in mainpage
    const handleClickWomen = () => {
        navigate("/");
        setTimeout(() => {
            if (exploreWomenRef?.current) {
                exploreWomenRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    };

    //navigate to electronic block in mainpage
    const handleClickElectronics = () => {
        navigate("/");
        setTimeout(() => {
            if (exploreElectronicRef?.current) {
                exploreElectronicRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    };

 //navigate to men block in mainpage
    const handleClickMen = () => {
        navigate("/");
        setTimeout(() => {
            if (exploMenRef?.current) {
                exploMenRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
            }
        });
    };

     //if click on ALL , it show list of pages or blocks 
    const handleClickAll = () => {
        navigate("/");
        setTimeout(() => {
            if (exploreAllRef?.current) {
                exploreAllRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
            }
        });
    }



    
    return (

        <Box >
            <AppBar >
                <Toolbar sx={{
                    p: 2,
                    backgroundColor: "white",
                    // backgroundColor: "red"
                }}>
                    <Box component="img"
                        src={navbar_logo}
                        sx={{ width: 80 }} />
                    <Box sx={{
                        pl: 2,
                        display: "flex",
                        gap: 3,

                    }}>
                        <Box
                            onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
                            onMouseLeave={() => setAnchorEl(null)}

                            sx={{ color: "black", }}>
                            <Typography sx={{ fontSize: 20, pl: 4 }}>ALL</Typography>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={() => setAnchorEl(null)}
                                MenuListProps={{ onMouseLeave: () => setAnchorEl(null) }}
                            >
                                <MenuItem onClick={() => handleClickWomen()}>Women</MenuItem>
                                <MenuItem onClick={() => handleClickMen()}>Men</MenuItem>
                                <MenuItem onClick={() => handleClickElectronics()}>Electronic</MenuItem>
                                <MenuItem onClick={() => navigate("/footer")}>About</MenuItem>
                                <MenuItem onClick={() => navigate("/wishlist")}>WishList</MenuItem>
                                <MenuItem onClick={() => navigate("login")}>Login</MenuItem>
                                <MenuItem onClick={() => navigate("/register")}>Register</MenuItem>
                            </Menu>
                        </Box>
                        {["Home", "About", "Wishlist"].map((text) => (
                            <Typography key={text}
                                onClick={() => {
                                    if (text === "Home") navigate("/");
                                    if (text === "Women") handleClickWomen();
                                    if (text === "Men") handleClickMen();
                                    if (text === "About") navigate("/footer");
                                    if (text === "All") handleClickAll();
                                    if (text === "Electronic") handleClickElectronics();
                                }}
                                sx={{
                                    color: "black",
                                    cursor: "pointer",
                                    fontSize: 20,

                                    "&:hover": {
                                        textDecorationLine: "underline",
                                        textUnderlineOffset: "10px",
                                        textDecorationColor: "red",
                                        textDecorationThickness: 2,
                                        textDecorationStyle: "solid"
                                    }
                                }}>
                                {text}
                            </Typography>
                        ))}



                    </Box>
                    <Box sx={{
                        pl: 11,
                        label: {
                            color: "#68686c98",
                            fontSize: 25,
                            textAlign: "center",

                        },


                    }}>
                        <TextField
                            value={search}
                            onChange={(e) => { setSearch(e.target.value), setOpen(true) }}
                            label="type here..."
                            variant="outlined"
                            sx={{
                                position: "relative",

                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '15px',
                                    borderColor: "black",
                                    padding: 1,
                                    width: 547
                                },
                                "& .MuiInputBase-input": {
                                    overflowX: "hidden",
                                    whiteSpace: "nowrap",
                                    textOverflow: "ellipsis",
                                    width: 380
                                }
                            }}


                        /><CloseIcon onClick={handleRemove} sx={{
                            color: "black",
                            borderRight: "1px solid black",
                            p: 2,
                            backgroundColor: "#c6c6c798",
                            position: "absolute",
                            // right: "36.5%",
                            right: "33.6%",
                            fontSize: 39,
                            "&:hover": {
                                cursor: "pointer",
                                backgroundColor: "#75757898",
                            },

                        }} /> <SearchIcon sx={{
                            color: "black",
                            backgroundColor: "#c6c6c798",

                            fontSize: 39,
                            borderTopRightRadius: "15px",
                            borderBottomRightRadius: "15px",
                            p: 2,
                            position: "absolute",
                            // right: "31.8%",
                            right: "29%",
                            "&:hover": {
                                cursor: "pointer",
                                backgroundColor: "#75757898",
                            }

                        }} />

                        <Box >


                            {search && open && (
                                <Paper

                                    sx={{
                                        position: "absolute",
                                        // top: "64px",        // height of AppBar
                                        top: "120px",
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        // width: 300,
                                        width: 600,
                                        maxHeight: 300,
                                        overflowY: "auto",
                                        zIndex: 1300
                                    }}
                                >
                                    {searchData.length === 0 && (
                                        <Box sx={{ p: 1 }}>No result</Box>
                                    )}
                                    {searchData.map((item) => (
                                        <Box key={item.id}
                                            sx={{
                                                p: 1,
                                                cursor: "pointer",
                                                "&:hover": { background: "#b3b3b598", }
                                            }}
                                            onClick={() => {
                                                setSearch(item.title);
                                                setOpen(false);
                                            }}>
                                            {item.title} <Box component="img"
                                                src={item.images ? item.images[0] : item.image}
                                                sx={{
                                                    borderColor: "red",
                                                    width: 30,
                                                    height: 20,
                                                    border: "1px solid  #96969a98",
                                                    ml: 2,
                                                    position: "fixed",
                                                    right: "10px",
                                                    backgroundColor: "#75757898",
                                                }} />
                                        </Box>
                                    ))}
                                </Paper>
                            )}
                        </Box>
                    </Box>

                    <Box onMouseEnter={(e) => setLoginAnchorEl(e.currentTarget)}
                        onMouseLeave={() => setLoginAnchorEl(null)}
                        sx={{
                            border: "1px solid black",
                            borderRadius: 2,
                            ml: 5,
                            p: 1,
                            width: 80,
                            cursor: "pointer",
                            "&:hover": {
                                backgroundColor: "rgb(237, 240, 235)",
                            }
                        }}>
                        <Typography sx={{
                            color: "black",
                            fontSize: 20,
                        }} >
                            Login <AccountCircleIcon sx={{
                                color: "black",
                                fontSize: 25,
                                position: "absolute",
                                top: "41%",
                                right: "20.5%",

                            }} /></Typography>
                        <Menu anchorEl={loginAnchorEl}
                            open={Boolean(loginAnchorEl)}
                            onClose={() => setLoginAnchorEl(null)}
                            MenuListProps={{ onMouseLeave: () => setLoginAnchorEl(null) }}>
                            <MenuItem onClick={() => navigate("/login")}>Login <LoginIcon /></MenuItem>
                            <MenuItem onClick={() => handleLogoutButton()} sx={{color : "red"}}>LogOut <LogoutIcon  sx={{color : "red"}}/> </MenuItem>
                        </Menu>

                    </Box>
                    <Box>
                        <FavoriteBorderIcon onClick={() => navigate("/wishlist")} sx={{
                            color: "black",
                            fontSize: 40,
                            m: 3,
                            p: 1,
                            "&:hover": {
                                backgroundColor: "rgb(237, 240, 235)",
                                borderRadius: 2,
                                cursor: "pointer",
                            }
                        }} />
                    </Box>
                    <Box>
                        <ShoppingCartIcon onClick={() => navigate("/cart")} sx={{
                            color: "black",
                            fontSize: 40,
                            p: 1,
                            "&:hover": {
                                backgroundColor: "rgb(237, 240, 235)",
                                // p: 1 ,
                                borderRadius: 2,
                                cursor: "pointer",
                            }
                        }} />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>


    )
}