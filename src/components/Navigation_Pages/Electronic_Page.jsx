import Box from "@mui/material/Box";
import { useProducts } from "../Pages/Products"
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

export const Electronic_Page = () => {

    const {products , loading} = useProducts();

    const filterData = products.filter((p) => ["electronics", "laptops", "smartphones"].includes(p.category?.toLowerCase()));

    if(filterData === 0){
        return (
            <Box>No product found</Box>
        )
    }
    return (
        <>
        <Box>
            {filterData.length > 0 (
                filterData.map((item) => (
                <Card key={item.id}>
                    <CardMedia component="img"
                    image={item.images ? item.images[0] : item.image}
                    alt={item.title} />
                    <CardContent>
                        {item.title}
                    </CardContent>
                </Card>
            ))
            ) }
        </Box>
        </>
    )
}