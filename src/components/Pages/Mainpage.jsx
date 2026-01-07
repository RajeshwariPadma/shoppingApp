import Typography from "@mui/material/Typography"
import { Catagory } from "./Catagory"
import { Header } from "./Header"
import { Home } from "./Home"
import { Box } from "@mui/system"

export const Mainpage = ({ products = { products }, productsDetails = { productsDetails } }) => {
    return (
        <>
            <Box sx={{ mt: 20 }}>
                <Header />
                {/* <Home products={products} productsDetails={productsDetails} /> */}
                <Box sx={{ mt: 5,
                        mb: 5,
                         boxShadow :  "2px 2px 2px black",}}>
                    <Typography sx={{fontSize : 30,
                        fontWeight : "bold",
                        p: 3,
                       
                        "&:hover" : {
                            color : "red"
                        }
                    }}>Category</Typography>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 5,
                        mb: 5,
                        pt : 3,
                        pb : 3, 
                        pl: 5 ,
                        pr : 5
                    }}>

                        <Catagory category="women's clothing" products={products} />
                        <Box>
                            <Catagory category="men's clothing" products={products} />
                            <Catagory category="laptops" products={products} />
                        </Box>
                        <Box>
                            <Catagory category="jewelery" products={products} />
                            <Catagory category="groceries" products={products} />
                        </Box>
                        <Catagory category="electronics" products={products} />
                        {/* <Box>
 <Catagory category="sports-accessories" products={products} />
   <Catagory category="vehicle" products={products} />
                    </Box>
                   
                    <Catagory category="furniture" products={products} />
                     */}
                    </Box>

                </Box>




            </Box>

        </>
    )
}