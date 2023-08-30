import { Link } from "react-router-dom";
import "../styles/productCard.css"

const ProductListCardComponent = ({product}) => {
    return (
        <>
            <li key={product.id} className="cards_item">
                <div className="card">
                    <div className="card_image">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="card_content">
                        <h2 className="card_title">{product.title}</h2>
                        <p className="card_text">{product.description}</p>
                        <Link to={`/product/${product.id}`} onClick={() => increaseCartCount(product.id)} className="btn card_btn">View Details</Link>
                    </div>
                </div>
            </li>

        </>
    )
}

export default ProductListCardComponent