
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";


function ProductCart({ product }) {
    


    return (
        <div className="main_product"  data-aos="fade-right" data-aos-duration="700">
            <Link className="product_btn_to_cart" to={`/single-product/${product.id}`} style={{width: "100%"}}>
                <div className="product_img">
                    <img src={product.thumbnail} alt={product.title} />
                </div>
            </Link>

            <div className="poduct_wrapper">
                <h3 className="product_title">{product.title}</h3>
                <p className="product_description">{product.description}</p>

                <div className="product_info">
                    <div className="products_rating">
                        {
                            Array.from({ length: product.rating }).map((_, index) => <AiFillStar key={index} />)
                        }
                        <span>({product.rating}/5)</span>
                    </div>
                    <div className="products_price_discount">
                        ${(product.price - (product.price * product.discountPercentage) / 100).toFixed(2)}
                        <span>${(product.price)}</span>
                    </div>
                </div>

            </div>
            <Link   to={`/single-product/${product.id}`} style={{width: "100%", display: "flex", justifyContent: "center"}}>
                <button  className="product_add_to_cart">Product Details</button>
            </Link>
        </div>
    )
}

export default ProductCart
