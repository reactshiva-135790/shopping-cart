import React from "react";
import "../styles/productCard.css"; // Import the CSS file for styling

const ProductCardCom = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-details">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-description">{product.description}</p>
            </div>
        </div>
    );
};

export default ProductCardCom;
