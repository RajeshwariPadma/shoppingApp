import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Catagory = ({ products = [], category }) => {

    if (!products.length) return null;
    //      {
    //     return <Typography>No products</Typography>
    // }

    const filterData = products.filter(
        (p) => p.category?.toLowerCase() === category.toLowerCase()
    );

    if (filterData.length === 0) return null;



    return (

        <Box sx={{
            display: "grid",
            backgroundColor: "#dfc4df98",
            gridTemplateRows: "repeat(auto-fill , 1fr)",
            gridTemplateColumns: "repeat(2 , 1fr)",
            width: 270,
            height: "auto",
            gap: 2,
            p: 2,
            // borderRadius: 5,
            cursor: "pointer",
        }}>
            {/* {
                filterData.length > 0 ? (
                     filterData.map((device) => { */}
            {filterData.slice(0, 6).map((device) => {
                return (
                    <Card key={device.id}
                        sx={{
                            width: 120,
                            height: 150,
                            boxShadow: "2px 2px 2px black",
                            borderRadius: 2,
                            cursor: "pointer",
                            "&:hover": {
                                transform: "scale(1.1)"
                            }
                        }}>
                        <CardMedia component="img"
                            image={device.images ? device.images[0] : device.image}
                            alt={device.title}
                            sx={{
                                width: 60,
                                height: 60,
                                p: (0, 2.5),
                                }} />
                        <CardContent sx={{
                            fontSize: 15,
                            color: "black",
                            width: 80,
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            cursor: "pointer",
                            "&:hover": {
                                color: "Black",
                                fontWeight: "bold"
                            }
                        }}>{device.title} </CardContent>
                    </Card>
                )
            })
                // ) 
                // : <Box> no product</Box>
            }
        </Box>


    )
}