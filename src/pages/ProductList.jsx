import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
// import { GrCart, GrFormAdd, GrFormSubtract } from "react-icons/gr";
import "../styles/productList.css";
import { api } from "../http/axios";
import ProductListCardComponent from "../components/ProductListCardComponent";
import { Loader } from "../fileExport";
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, removeProduct } from "../store/cartSlice"
import Cart from "../components/Cart";
import Category from "./Category";

const ProductList = () => {
    const countValue = useSelector((state) => state.cart.initialState)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true); // Add loading state
    const productLists = useFetch(api);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const storedCartCount = localStorage.getItem("cartCount");
        if (storedCartCount) {
            setCartCount(parseInt(storedCartCount));
        }
    }, []);

    useEffect(() => {
        if (productLists.length > 0) {
            setIsLoading(false); // Set loading to false once data is fetched
        }
    }, [productLists]);

    const increaseCartCount = (productId) => {
        const newCartCount = cartCount + 1;
        setCartCount(newCartCount);
        localStorage.setItem("cartCount", newCartCount);

        // Store the added product ID in localStorage
        const storedProductIds = JSON.parse(localStorage.getItem("addedProductIds")) || [];
        storedProductIds.push(productId);
        localStorage.setItem("addedProductIds", JSON.stringify(storedProductIds));
    };


    const decreaseCartCount = () => {
        if (cartCount > 0) {
            const newCartCount = cartCount - 1;
            setCartCount(newCartCount);
            localStorage.setItem("cartCount", newCartCount);

            // Remove a product from localStorage or adjust your product removal logic here
            // For example, you could maintain an array of added product IDs in localStorage
            // and remove the last added product when decrementing.
            // Modify this according to your actual data structure.
            const storedProductIds = JSON.parse(localStorage.getItem("addedProductIds")) || [];
            if (storedProductIds.length > 0) {
                storedProductIds.pop(); // Remove the last added product ID
                localStorage.setItem("addedProductIds", JSON.stringify(storedProductIds));
            }
        }
    };


    return (
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-between mt-2">
                    <div>Product List</div>
                    <div>
                        <div className="product-list-page">
                            <Category />
                            <Cart cartValue={countValue} />
                        </div>
                        {/* <GrCart />   <GrFormSubtract onClick={() => decreaseCartCount()} /> {countValue} <GrFormAdd onClick={() => increaseCartCount()} /> */}
                    </div>
                </div>
                <div className="main cards">
                    {isLoading ? (
                        <div className="d-flex justify-content-center">
                            <Loader />
                        </div>
                    ) : (
                        productLists.map((product) => (
                            <ProductListCardComponent product={product} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
