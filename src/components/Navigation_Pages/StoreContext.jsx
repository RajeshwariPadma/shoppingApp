import { createContext, useEffect, useState } from "react"
import { useProducts } from "../Pages/Products";

export const StoreContext = createContext(null);
export const StoreContextProvider = ({children}) => {

    const getDefaultCart = () => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : {};
    };

    const[cartItems , setCartItems] = useState(getDefaultCart);

    const {products} = useProducts();

    const addToCart = (itemId) => {
        if(!cartItems[itemId]) {
            setCartItems((prev) => ({...prev , [itemId] : 1}))
        }
        else {
            setCartItems((prev) => ({...prev , [itemId] : prev[itemId] +1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev , [itemId] : prev[itemId] - 1}))
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id === Number(item));
                if(itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item]
                }
            }
        }
        return totalAmount;
    }

    useEffect(() => {
        localStorage.setItem("cartItems" , JSON.stringify(cartItems));
    } , [cartItems])

    const contextValue = {
        products,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalAmount,
    }
    return (
        <>
        <StoreContext.Provider value={contextValue} >
            {children}
        </StoreContext.Provider>
        </>
    )
}