import React from 'react'
import SingleRecipesComponent from '../../components/single_recipes_component/SingleRecipesComponent'
import SingleNav from '../../components/single_nav/SingleNav'
import Container from '../../components/container/Container'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { Skeleton } from 'antd'

const SingleRecipesPage = () => {
  const element = useParams()
  const [data, loading] = useFetch(`/recipes/${element.recipeId}`, true)

  return (
    <div>
      <SingleNav />
      <Container>
        <div className="single_product">
          {
            loading
              ?
              <div className="skeloton_row">
                <Skeleton.Image active className="skeloton_img" style={{ width: "660px", height: "660px" }} />
                <div className="s_input">
                  <Skeleton.Input active className="skeloton_input" style={{ width: "500px", height: "50px" }} />
                  <Skeleton.Input active className="skeloton_input" style={{ width: "500px", height: "110px" }} />
                  <Skeleton.Input active className="skeloton_input" style={{ width: "20px" }} />
                  <Skeleton.Input active className="skeloton_input" style={{ width: "250px" }} />
                  <Skeleton.Input active className="skeloton_input" style={{ width: "300px" }} />
                  <Skeleton.Input active className="skeloton_input" style={{ width: "100" }} />
                  <Skeleton.Input active className="skeloton_input" style={{ width: "500px" }} />
                </div>

              </div>
              :
              <SingleRecipesComponent data={data} />
          }
        </div>
      </Container>
    </div>
  )
}

export default SingleRecipesPage
