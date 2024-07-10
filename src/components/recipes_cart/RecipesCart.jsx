import { AiFillStar } from 'react-icons/ai'
import  '../recipes/Recipes.css'
import { Link } from 'react-router-dom'

const RecipesCart = ({ recipes }) => {
  return (
    <div className="recipes_card" data-aos="fade-left" data-aos-duration="700">
            <Link className="recipes_link" to={`/single-recipes/${recipes.id}`} style={{width: "100%"}}>
                <div className="recipes_img">
                    <img src={recipes.image} alt={recipes.name} />
                </div>
            </Link>

            <div className="recipes_wrapper">
                <h3 className="recipes_title">{recipes.name}</h3>
                <div className="recipes_rating_item">
                    <p className='recipes_cuisine'>Cuisini : <strong>{recipes.cuisine}</strong> </p>
                    <strong className='recipes_rating'>
                        {
                            Array.from({ length: recipes.rating }).map((_, index) => <AiFillStar   key={index} />)
                        }
                        <span className='recipes_rating_count'>( {recipes.rating} / 5 )</span>
                    </strong>
                </div>
                <Link className="recipes_link" to={`/single-recipes/${recipes.id}`}>Read More</Link>

            </div>
        </div>
  )
}

export default RecipesCart
