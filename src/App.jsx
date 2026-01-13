
import { useEffect, useRef, useState } from "react";
import { Home } from "./components/Pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Pages/Header";
import { Mainpage } from "./components/Pages/Mainpage";
import { Navbar } from "./components/Pages/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Mens } from "./components/Pages/Mens";
import { Electronics } from "./components/Pages/Electronic";
import { Womens } from "./components/Pages/Womens";
import { OfferBar } from "./components/Pages/OfferBar";
import { useProducts } from "./components/Pages/Products";
import navbar_logo from "./assets/navbar_logo.jpg"
import { Electronic_Page } from "./components/Navigation_Pages/Electronic_Page";
import { Register } from "./components/Navigation_Pages/Register";
import { Login } from "./components/Navigation_Pages/Login";

function App() {

   const [search, setSearch] = useState("");
  // const [open, setOpen] = useState(false);
 
  const { products, loading } = useProducts();

  const exploreWomenRef = useRef(null);
  const exploreElectronicRef = useRef(null);
  const exploMenRef = useRef(null);
  const exploreAllRef = useRef(null);

  if (loading) {
    return  <Typography sx={{
      fontSize: 30,
      pl: 40,
      ml: 40,
      pt: 25,
      mt: 25,

    }}>Loading...</Typography> ;
  }



  return (
    <>

      <BrowserRouter>
        <Navbar exploreWomenRef={exploreWomenRef}
          exploreElectronicRef={exploreElectronicRef}
          exploMenRef={exploMenRef}
          exploreAllRef={exploreAllRef}
          products={products}
          search={search}
           setSearch={setSearch}
          // open={open}
          // setOpen={setOpen}
        />
        
        <Routes>


          <Route path="/" element={<Mainpage products={products} loading={loading}
            exploreWomenRef={exploreWomenRef}
            exploreElectronicRef={exploreElectronicRef}
            exploMenRef={exploMenRef}
            exploreAllRef={exploreAllRef} 
            search={search}/>} />
          <Route path="/home" element={<Home products={products} loading={loading} />} />

          <Route path="/electronics_page" element={<Electronic_Page category="electronics" products={products} loading={loading} />} />
          <Route path="/women" element={<Womens category="women's clothing" products={products} loading={loading} />} />
          {/* <Route path="/Catageri" element={<Catagery Catagery="furniture" products={products}  productsDetails={productsDetails} />} />  */}
          <Route path="/mens" element={<Mens category="men's clothing" products={products} loading={loading} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
