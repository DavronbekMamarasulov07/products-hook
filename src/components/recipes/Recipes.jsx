import React, { useRef } from 'react'
import Container from '../container/Container'
import { Skeleton } from 'antd'
import RecipesCart from '../recipes_cart/RecipesCart'
import { useFetch } from '../../hooks/useFetch'
import { useDetect } from '../../hooks/useDetect'

const Recipes = () => {
    const recipeRef = useRef(null)
    const entry = useDetect(recipeRef, {});
    const isVisible = !!entry?.isIntersecting;
    const [data,loading] = useFetch("/recipes", isVisible)

    console.log(isVisible)


  return (
    <Container>
            <div  ref={recipeRef} className="main_recipes_content">
            <h2 className="all_products">All Recipes</h2>
            <div className="recipes_content">
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
                        data?.recipes?.slice(0, 30).map((recipes) => (
                            <RecipesCart key={recipes.id} recipes={recipes} />
                        ))


                }

            </div>
            </div>

        </Container>
  )
}

export default Recipes
