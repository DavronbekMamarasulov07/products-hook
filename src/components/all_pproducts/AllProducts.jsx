import { Skeleton } from "antd"
import Container from "../container/Container"
import ProductCart from "../product_cart/ProductCart";
import "./AllProducts.css"
import { useFetch } from "../../hooks/useFetch";

const AllProducts = () => {
    const [data, loading] = useFetch("/products/",true)
    return (
        <Container>
            <h2 className="all_products">All Products</h2>
            <div className="main_content" >
                {
                    loading

                        ?
                        Array.from({ length: 30 }).map((_, index) => (
                            <div className="skeloton" key={index}>
                                <Skeleton.Image active className="skeloton_img" style={{ width: "350px", height: "350px" }} />
                                <Skeleton.Input active className="skeloton_input" style={{ width: "350px", height: "20px", marginBlock: "20px" }} />
                                <Skeleton.Input active className="skeloton_input" style={{ width: "350px", height: "80px" }} />
                                <Skeleton.Input active className="skeloton_input" style={{ width: "350px", height: "20px" }} />
                                <Skeleton.Input active className="skeloton_input" style={{ width: "150px", height: "30px" }} />

                            </div>
                        ))

                        :
                        data?.products?.slice(0, 30).map((product) => (
                            <ProductCart key={product.id} product={product} />
                        ))


                }

            </div>

        </Container>
    )
}

export default AllProducts
