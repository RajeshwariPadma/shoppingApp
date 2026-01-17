import { createContext, useEffect, useState } from "react"
import { useProducts } from "../Pages/Products";

export const WishListContext = createContext({ wishList: {} });
export const WishListContextProvide = ({ children }) => {
    const getDefaultwishlist = () => {
        const wishListCart = localStorage.getItem("wishList");
        return wishListCart ? JSON.parse(wishListCart) : {};
    }
    const [wishList, setWishList] = useState(getDefaultwishlist);
    const { products } = useProducts();

    const addToWishList = (itemId) => {

        setWishList((prev) => ({ ...prev, [itemId]: true }))

    }
    const removeFromWishlist = (itemId) => {
        setWishList((prev) => {
            const updated = { ...prev };
            delete updated[itemId]
            return updated;
        });
    }

    useEffect(() => {
        localStorage.setItem("wishList"  , JSON.stringify(wishList));
    } , [wishList])
    return (
        <WishListContext.Provider value={{
            wishList,
            setWishList,
            addToWishList,
            removeFromWishlist
        }} >
            {children}
        </WishListContext.Provider>
    )
}