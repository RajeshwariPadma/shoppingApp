import Typography from "@mui/material/Typography"
import { Catagory } from "./Catagory"
import { Header } from "./Header"
import { Home } from "./Home"
import { Box } from "@mui/system"
import { Womens } from "./Womens"
import { Mens } from "./Mens"
import { Electronics } from "./Electronic"
import { OfferBar } from "./OfferBar"
import { useProducts } from "./Products"
import { useMemo } from "react"



export const Mainpage = ({ exploreWomenRef, exploreElectronicRef, exploMenRef, exploreAllRef }) => {

    const { products, loading } = useProducts();
    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    // const filteredProducts = useMemo(() => {
    //     if (!search) return products;

    //     return products.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));
    // }, [search, products]);
    return (

        <Box sx={{
            //  mt: 30,
            // pl: 2,
            // pr: 5
            mt: 15
        }}>
            <Header products={products}/>
        <OfferBar />
            <Box ref={exploreAllRef}
                sx={{ scrollMarginTop: "100px" }}>

                <Home products={products} />


                <Box sx={{
                    mt: 5,
                    mb: 5,
                    // pl: 5,
                    // pr :5,
                    ml: 5,
                    mr: 5,
                    boxShadow: "2px 2px 2px black",
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
                        }
                    }}>Shop By Category</Typography>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 5,
                        mb: 5,
                        pt: 3,
                        pb: 3,
                        pl: 5,
                        pr: 5
                        // pl: 2,
                        // pr : 2
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

                    </Box>

                </Box>
            </Box>
            <Box ref={exploreWomenRef}
                sx={{ scrollMarginTop: "100px" }}>
                <Womens category="women's clothing" products={products} />
            </Box>
            <Box ref={exploreElectronicRef}
                sx={{ scrollMarginTop: "100px" }}>
                <Electronics category="electronics" products={products} />
            </Box>

            <Box ref={exploMenRef}
                sx={{ scrollMarginTop: "100px" }}>
                <Mens category="men's clothing" products={products} />
            </Box>


        </Box >


    )
}