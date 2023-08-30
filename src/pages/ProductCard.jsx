import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ProductCardCom from "../components/ProductCard"; // Import the new component
import { api } from "../http/axios";

const ProductCard = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const products = useFetch(api);

    useEffect(() => {
        const fetchedProduct = products.find(product => product.id === parseInt(id));
        if (fetchedProduct) {
            setProduct(fetchedProduct);
        } else {
            console.error("Product not found");
        }
    }, [id, products]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return <ProductCardCom product={product} />; // Pass the product to the new component
};

export default ProductCard;
