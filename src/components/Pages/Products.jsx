import { useEffect, useState } from "react"


export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoding] = useState(true);

    const fetchProducts = async () => {
        try {
            const [dummyRes, fakeRes] = await Promise.all([
                fetch('https://dummyjson.com/products?sortBy=title&order=asc').then(r => r.json()),
                fetch('https://fakestoreapi.com/products').then(r => r.json())
            ]);

            const normalized = [
                ...dummyRes.products.map(p => ({
                    id: p.id,
                    title: p.title,
                    image: p.images?.[0],
                    price: p.price,
                    rating: p.rating,
                    category: p.category
                }))
                , ...fakeRes.map(p => ({
                    id: p.id,
                    title: p.title,
                    image: p.image,
                    price: p.price,
                    rating: p.rating?.rate,
                    category: p.category,
                }))];

            setProducts(normalized);
            console.log(normalized);
        } catch (err) {
            console.error(err);
        } finally {
            setLoding(false);
        }

    };

    useEffect(() => {
        fetchProducts();
      
    }, []);

    return { products, loading };
};