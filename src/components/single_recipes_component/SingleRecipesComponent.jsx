import { AiFillStar } from "react-icons/ai";
import Container from "../container/Container"
import "./SingleRecipesComponent.css"
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const SingleRecipesComponent = ({ data }) => {
  const [isModalIngredientOpen, setIsModalIngredientOpen] = useState(false);
  const [isModalInstructionOpen , setIsModalInstructionsOpen] = useState(false)
  const id = uuidv4()
  const showInstructionsModal = () => {
    setIsModalInstructionsOpen(true);
  };

  const showIngredientOpen = () => {
    setIsModalIngredientOpen(true);
  };

  
 

  return (
    <Container>
      <h2 className="single_recipes_title">{data.name}</h2>
      <div className="recipes_page_content">
        <div className="recipes_content_wrapper">
          <div className="recipes_content_image_box">
            <img src={data.image} alt={data.name} className="recipes_content_image" />
          </div>
          <div className="recipes_content_desciption">
            <h3 className="recipes_content_title">{data.name}</h3>
            <div className="recipes_content_desc_wrapper">
              <p className="recipes_content_desc">Cuisine : <strong>{data.cuisine}</strong></p>
              <p className="recipes_content_desc">Difficulty : <strong>{data.difficulty}</strong></p>
              <p className="recipes_content_desc">CookTime : <strong>{data.cookTimeMinutes} min</strong> </p>
              <p className="recipes_content_desc">PrepTime :  <strong>{data.prepTimeMinutes} min</strong> </p>
              <p className="recipes_content_desc">Calories : <strong>{data.caloriesPerServing} cal</strong> </p>
              <div>{data.tags?.slice(1, 2).map(tag => <span key={id}>#{tag}</span>)}</div>
              <p className="recipes_content_rating">
                {
                  Array.from({ length: data.rating }).map((_, index) => <AiFillStar key={index} />)
                }
                <span>({data.rating}/5)</span>
              </p>
            </div>
            <div className="recipes_content_btn_wrapper">
              <p onClick={showInstructionsModal}>ingredients</p>
              <p onClick={showIngredientOpen}>instructions</p>
            </div>
          </div>

        </div>
        <Modal title="Basic Modal" open={isModalIngredientOpen} onCancel={() => setIsModalIngredientOpen(false)} footer={null} maskClosable={false}>
          <ul>
            {
              data.instructions?.map((instruction , index) => <li key={id}>{index + 1}. {instruction}</li>)
            }
          </ul>
        </Modal>
        <Modal title="Basic Modal" open={isModalInstructionOpen} onCancel={() => setIsModalInstructionsOpen(false)} footer={null} maskClosable={false} >
          <ul>
            {
              data.ingredients?.map((ingredient, index) => <li key={id}>{index+1}. {ingredient}</li>)

            }
          </ul>
        </Modal>
      </div>
    </Container>
  )
}

export default SingleRecipesComponent
