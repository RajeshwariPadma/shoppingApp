
import { useEffect, useState } from "react";
import { Home } from "./components/Pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Pages/Header";
import { Mainpage } from "./components/Pages/Mainpage";


function App() {
  const [products, setProducts] = useState([]);

  const productsDetails = async () => {
    const [dummyres, fakeres] = await Promise.all([
      (await fetch('https://dummyjson.com/products?sortBy=title&order=asc')).json(),
      (await fetch('https://fakestoreapi.com/products')).json()
    ]);

    const mergeData = [...dummyres.products, ...fakeres];
    setProducts(mergeData);
    console.log(mergeData)
  }

  useEffect(() => {
    productsDetails();
  }, [])
  return (
    <>

      <BrowserRouter>

        <Routes>
          {/* <Route path="/Header" element={<Header />} /> */}
          {/* <Route path="/" element={<Home products={products} productsDetails={productsDetails} />} /> */}
          <Route path="/" element={<Mainpage products={products} productsDetails={productsDetails} />} />
          {/* <Route path="/Catageri" element={<Catagery Catagery="furniture" products={products}  productsDetails={productsDetails} />} /> */}

         
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
