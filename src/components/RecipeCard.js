import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({
  recipe,
  AddToFav,
  handleAddFavourite,
  // AddToLater,
  // handleAddToLater,
}) {
  const FavouriteComponent = AddToFav;
  // const LaterComponent = AddToLater;
  const { strMeal, strInstructions, strMealThumb, strYoutube, idMeal } = recipe;
  return (
    <div className="image-container d-block justify-content-start m-3">
      <img src={strMealThumb} alt={strMeal} className="card-image" />
      <br />
      <br />
      <div>
        <h5>{strMeal}</h5>
      </div>
      <div className="container d-flex p-2">
        <div onClick={() => handleAddFavourite(recipe)}>
          <FavouriteComponent />
        </div>
        <div>
          <button className="btn btn-warning">
            <a
              href={`https://www.themealdb.com/meal/${idMeal}`}
              target="_blank"
            >
              Source
            </a>
          </button>
        </div>

        <div>
          <Link to={`/recipe/${idMeal}`} className="btn btn-info">
            View Details
          </Link>
        </div>

        {/* <div onClick={() => handleAddToLater(recipe)}>
          <LaterComponent />
        </div> */}
      </div>
    </div>
  );
}

export default RecipeCard;
