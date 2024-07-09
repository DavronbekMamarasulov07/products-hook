import { IoIosArrowDropdownCircle } from "react-icons/io"; 
import { IoMdCheckmarkCircle } from "react-icons/io"; 
import { BsBasket } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import './SingleProductPage.css'
import Container from "../container/Container"
import { AiFillStar } from 'react-icons/ai'
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const SingleProductPage = ({ data }) => {
    const navigate = useNavigate();
    const [count, setCount] = useState(1);
    const [showBtn, setShowBtn] = useState(false)
    const [showReviews, setShowReviews] = useState(false)

    const handleShowBtn = () => {
        setShowBtn(true)
        toast.success("Product added to cart")
    }


    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        } else if (count === 1) {
            navigate("/");
        }
    };

    const handleIncrement = () => {
        if (count < data.stock) {
            setCount(count + 1);
        } else {
            toast.error("You can't add more than stock");
        }
    };

    return (
        <Container>
            <h2 className="single_product_main_title">Product Details</h2>
            <div className='single_product_content'>
                <div className="single_product_img_content">
                    <img src={data.thumbnail} alt={data.title} />
                </div>
                <div className="single_product_wrapper">
                    <h3 className="single_product_title">{data.title}</h3>
                    <p className="single_product_description">{data.description}</p>
                    <div className="single_product_info">
                        <div className="single_products_stock">
                            Stock: <span>{data.stock}</span>
                        </div>
                        <div className="single_products_category">
                            Category: <span>{data.category}</span>
                        </div>
                        <div className="single_products_tags">
                            Tags: <span>#{data.tags}</span>
                        </div>
                        <div className="single_products_rating">
                            {data.rating} / 5 <AiFillStar />
                        </div>
                    </div>
                    <div className="single_product_btn_content">
                        <div className="single_btn_items">
                            <div className="single_products_price_discount">
                                ${((data.price - (data.price * data.discountPercentage) / 100).toFixed(2) * count).toFixed(2)}
                                <span>${((data.price * count).toFixed(2))}</span>
                            </div>
                            <div className="price_box">
                                <button className="single_product_btn_count" onClick={handleIncrement}>
                                    <AiOutlinePlus />
                                </button>
                                <strong>{count}</strong>
                                <button className="single_product_btn_count" onClick={handleDecrement}>
                                    <AiOutlineMinus />
                                </button>
                            </div>
                        </div>
                        <button className="single_product_add_to_cart_btn" onClick={handleShowBtn}>

                            {
                                showBtn
                                    ?
                                    <span>Go to cart <BsBasket /></span>
                                    :
                                    <span>Add to cart <BsBasket /></span>
                            }

                        </button>
                    </div>
                </div>
            </div>
            <div className="single_product_reviews">
                <h2 className="single_product_reviews_title">
                    Comments <button onClick={() => setShowReviews(!showReviews)} className="single_product_reviews_btn"><IoIosArrowDropdownCircle /></button>
                </h2>
                <div className="reviews_content" style={showBtn ? { opacity: "1" } : { opacity: "0" }}>
                    {
                        data?.reviews?.map((review) => (
                            <div className="review_card" key={uuidv4()}>
                                <span className="review_rating">
                                    {
                                        Array.from({ length: review.rating.toFixed(0) }).map((item, index) => (
                                            <AiFillStar  key={index} />
                                        ))
                                    }
                                </span>
                                <h4 className="review_name">{review.reviewerName}<IoMdCheckmarkCircle /></h4>
                                <p className="review_comment">{review.comment}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Container>
    )
}

export default SingleProductPage;
