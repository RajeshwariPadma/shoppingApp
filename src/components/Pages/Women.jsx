import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const Womens = ({ products, category }) => {

    const filterData = products.filter((p) => p.category && category &&
        p.category?.toLowerCase() === category.toLowerCase()
    )


    return (
        <>
            <Box sx={{
                // display: "grid",
                 backgroundColor: "#b2a4f298",
                // gridTemplateRows: "repeat(auto-fill , 1fr)",
                // gridTemplateColumns: "repeat(2 , 1fr)",
                // width: 270,
                // height: "auto",
                gap: 4,
                p: 2,
                m: 2,
                 borderRadius: 5,
                display: "flex",
                width: "98%",
                height: 350,
                cursor: "pointer",
                mb: 5
            }}>
                {filterData.length > 0 ? (
                    filterData.map((device) => {
                        return (
                            <>
                                <Card key={device.id}
                                    sx={{

                                        // width: 120,
                                        // height: 150,
                                        // display : "flex",
                                        // flexDirection : "column",
                                        width: 220,
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
                                            p: (0, 2.5),
                                             
                                            "&:hover": {
                                                transform: "scale(1.1)"
                                            }
                                        }} />
                                    <CardContent ><Typography sx={{
                                        fontSize: 15,
                                        color: "black",
                                        width: 120,
                                        overflow: "hidden",
                                        whiteSpace: "nowrap",
                                        textOverflow: "ellipsis",
                                        cursor: "pointer",
                                        "&:hover": {
                                            color: "red",
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
                                                mt: 3
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

                                            }}>{device.rating.rate}</Button>
                                        </Box>

                                    </CardContent>
                                </Card>
                            </>

                        )
                    })
                ) : <Box> no product</Box>}
            </Box>

        </>
    )
}