import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const Mens = ({ products}) => {

    // const filterData = products.filter((p) => p.category && category &&
    //     p.category?.toLowerCase() === category.toLowerCase()
    // )

    // if (!products || products.length === 0) {
    //     return (
    //         <Typography sx={{ p: 5, fontSize: 20 }}>
    //             Loading Men's Cloths...
    //         </Typography>
    //     );
    // }


    const filterData = products.filter(
        p => p.category?.toLowerCase() === "men's clothing"
    );
    if (filterData.length === 0) {
        return (
            <Typography sx={{ p: 5, fontSize: 20 }}>
                No Men's Cloths found
            </Typography>
        );
    }
    return (

        <Box sx={{
            pl: 5,
            pr: 5
        }}>
            <Box sx={{
                pl: 2,
                pr: 5
            }}>
                <Typography sx={{
                    fontSize: 40,
                    fontWeight: "bold",
                    p: 3,

                    "&:hover": {
                        background: "linear-gradient(30deg ,  rgba(243, 21, 21, 1), rgba(44, 44, 232, 1), rgba(9, 241, 9, 1), rgb(226, 226, 25))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        cursor: "pointer"
                    },
                    display: "flex",
                    flexDirection: "row"
                }}>Mens</Typography>
            </Box>
            <Box sx={{
                // display: "grid",
                 backgroundColor: "#b8f1ed98",
                // gridTemplateRows: "repeat(auto-fill , 1fr)",
                // gridTemplateColumns: "repeat(2 , 1fr)",
                // width: 270,
                // height: "auto",
                gap: 4,
                // p: 2,
                // // borderRadius: 5,
                // display: "flex",
                borderRadius: 5,
                // width: "98%",
                display : "grid",
                gridTemplateColumns : "repeat(4 , 1fr)",
                // height: 350,
                height : "auto",
                cursor: "pointer",
                mb: 5,
                // pl: 2,
                // pr: 5
                p : (5 , 5)
            }}>
                {filterData.length > 0 ? (
                    filterData.map((device) => {
                        const rating =
                            typeof device.rating === "object"
                                ? device.rating.rate
                                : device.rating ?? "N/A";
                        return (
                            <>
                                <Card key={device.id}
                                    sx={{

                                        // width: 120,
                                        // height: 150,
                                        // display : "flex",
                                        // flexDirection : "column",
                                        width: "auto",
                                        pr: 5,
                                        // height: 150,
                                        boxShadow: "2px 2px 2px  #3736375e",
                                        borderRadius: 2,
                                        // cursor: "pointer",
                                        // "&:hover": {
                                        //     transform: "scale(1.1)"
                                        // }

                                    }}>
                                    <CardMedia component="img"
                                        image={device.images ? device.images[0] : device.image}
                                        alt={device.title}

                                        sx={{ // width: 60,
                                            // height: 60,
                                            width: 180,
                                            height: 180,
                                            p: (0, 7),

                                            "&:hover": {
                                                transform: "scale(1.1)"
                                            }
                                        }} />
                                    <CardContent ><Typography sx={{
                                        fontSize: 20,
                                        color: "black",
                                        width: 120,
                                        overflow: "hidden",
                                        whiteSpace: "nowrap",
                                        textOverflow: "ellipsis",
                                        cursor: "pointer",
                                        "&:hover": {
                                            color: "Black",
                                            fontWeight: "bold"
                                        },
                                        pl: 5


                                    }}>{device.title} </Typography>
                                        <Box sx={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "space-between"
                                        }}>
                                            <Button sx={{
                                                fontSize: 25,
                                                color: "black",
                                                cursor: "pointer",
                                                // fontWeight: "bold",
                                                // backgroundColor: "yellow",
                                                borderRadius: 2,
                                                mt: 3,
                                                "&:hover": {
                                                    color: "Black",
                                                    fontWeight: "bold"
                                                },
                                                // pl: 5
                                            }}> {device.price}$</Button>
                                            <Button sx={{
                                                fontSize: 15,
                                                color: "black",
                                                cursor: "pointer",
                                                fontWeight: "bold",
                                                backgroundColor: "yellow",
                                                borderRadius: 2,
                                                mt: 3

                                            }}>{rating}</Button>
                                        </Box>

                                    </CardContent>
                                </Card>
                            </>

                        )
                    })
                ) : <Box> no product</Box>}
            </Box>
        </Box>

    )
}