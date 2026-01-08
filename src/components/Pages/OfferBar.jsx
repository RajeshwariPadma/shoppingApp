import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

export const OfferBar = () => {
    return (
        <>
            <Box sx={{
                p: 5,
                m: 17,
                backgroundColor: "rgba(241, 152, 169, 0.67)",
                display: "flex",
                flexDirection: "row",
                gap: 10,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 40,
                 background: "linear-gradient(30deg ,  rgba(243, 118, 118, 1), rgba(148, 148, 233, 1), rgba(162, 240, 162, 1), rgba(236, 236, 143, 1))",
                cursor: "pointer",
                boxShadow : "1px 1px 1px rgba(79, 76, 76, 0.67)"
            }}>
             
                <Box>
                    <Typography sx={{
                        fontSize: 110,
                        fontWeight: "bold",
                        fontStyle : "italic"
                    }}> 50%</Typography>
                </Box>
                <Box>
                    <Typography sx={{
                        fontSize: 50,
                        fontWeight: "bold",
                         fontStyle : "italic"
                    }}>Sale is live </Typography>
                    <Typography sx={{
                        fontSize: 50,
                        fontWeight: "bold",
                         fontStyle : "italic"
                    }}> on ALL PRODUCTS</Typography>
            </Box>
             </Box>
        </>
    )
}