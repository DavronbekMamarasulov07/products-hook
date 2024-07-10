
import "./Main.css"
import { Skeleton } from "antd"
import Container from "../container/Container"
import { useState } from "react";
import { MdOutlineVerticalAlignTop } from "react-icons/md";
import ProductCart from "../product-cart/ProductCart";


const Main = ({data,loading}) => {
  
  const [step, setStep] = useState(3)
  


  let count = 3;



  return (
    <Container>
      <div className="main_content">
        {
          loading

            ?
            Array.from({ length: 9 }).map((_, index) => (
              <div className="skeloton" key={index}>
                <Skeleton.Image  active className="skeloton_img" style={{ width: "350px" , height: "350px"}} />
                <Skeleton.Input active className="skeloton_input" style={{ width: "350px" , height: "20px", marginBlock: "20px"}} />
                <Skeleton.Input active className="skeloton_input" style={{ width: "350px" , height: "80px"}} />
                <Skeleton.Input active className="skeloton_input" style={{ width: "350px" , height: "20px"}} />
                <Skeleton.Input active className="skeloton_input" style={{ width: "150px" , height: "30px"}} />

              </div>
            ))

            :

            data?.products?.slice(0, count * step).map((product) => (
                <ProductCart key={product.id} product={product} />
            ))


        }

      </div>
      {
        step == 10
          ?
          <div className="product_btn_content">
            <button className="main__button to-back" onClick={() => setStep((prevData) => prevData - 8)}><MdOutlineVerticalAlignTop /> Back</button>
          </div>
          :
          <div className="product_btn_content">
            <button className="main__button" onClick={() => setStep((prevData) => prevData + 1)}>Show more</button>
          </div>
      }
    </Container>
  )
}

export default Main
