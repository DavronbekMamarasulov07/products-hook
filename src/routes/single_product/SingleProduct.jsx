import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { Skeleton } from 'antd'
import SingleProductPage from '../../components/single_product_page/SingleProductPage'
import Container from '../../components/container/Container'


const SingleProduct = () => {
  const element = useParams()
  const [data, loading] = useFetch(`/products/${element.productId}`)


  return (
    <Container>
      <div className='single_product'>
        {
          loading
            ?
            <div className="skeloton_row">
              <Skeleton.Image active className="skeloton_img" style={{ width: "660px" , height: "660px"}} />
              <div className="s_input">
                <Skeleton.Input active className="skeloton_input"  style={ {width: "500px", height: "50px"} }  />
                <Skeleton.Input active className="skeloton_input"  style={ {width: "500px", height: "110px"} } />
                <Skeleton.Input active className="skeloton_input"  style={ {width: "20px"} } />
                <Skeleton.Input active className="skeloton_input"  style={ {width: "250px"} } />
                <Skeleton.Input active className="skeloton_input"  style={ {width: "300px"} } />
                <Skeleton.Input active className="skeloton_input"  style={ {width: "100"} } />
                <Skeleton.Input active className="skeloton_input"  style={{ width: "500px" }} />
              </div>

            </div>
            :


            <SingleProductPage data={data} />


        }
      </div>
    </Container>
  )
}

export default SingleProduct
