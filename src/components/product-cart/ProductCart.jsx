
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";


function ProductCart({ product }) {


    return (
        <div className="main_product" key={product.id}>
            <Link className="product_btn_to_cart" to={`/single-product/${product.id}`} style={{width: "100%"}}>
                <div className="product_img">
                    <img src={product.thumbnail} alt={product.title} />
                </div>
            </Link>

            <div className="poduct_wrapper">
                <h3 className="product_title">{product.title}</h3>
                <p className="product_description">{product.description}</p>

                <div className="product_info">
                    <div className="products_price_discount">
                        <span>${(product.price)}</span>
                        ${(product.price - (product.price * product.discountPercentage) / 100).toFixed(2)}
                    </div>
                    <div className="products_rating">
                        {product.rating} / 5 <AiFillStar />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductCart
