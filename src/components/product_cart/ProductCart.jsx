
// import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


function ProductCart({ product }) {
    // const [count, setCount] = useState(1)



    // const handleCountCart = () => {
    //     setCount(count + 1)
    // }

    const handleToCart = () => {
       toast.success("Product added to cart")
    }


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
            <button onClick={handleToCart} className="product_add_to_cart">Add to cart</button>
        </div>
    )
}

export default ProductCart
