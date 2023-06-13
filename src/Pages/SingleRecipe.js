import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

function SingleRecipe() {
  const { idMeal } = useParams();
  // console.log({idMeal})
  const [recipe, setRecipe] = useState(null);

  const getSingleRecipe = () => {
    fetch(`${url}${idMeal}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          const {
            strMeal: name,
            strMealThumb: image,
            strArea: area,
            strTags: tags,
            strCategory: category,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
          } = data.meals[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
          ];

          const newMeal = {
            name,
            image,
            area,
            tags,
            category,
            instructions,
            ingredients,
          };
          console.log(newMeal);

          setRecipe(newMeal);
        } else {
          setRecipe(null);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getSingleRecipe();
  }, [idMeal]);

  const { name, image, area, tags, category, instructions, ingredients } =
    recipe ?? {};

  if (!recipe) {
    return <h2 className="section-title">No cocktail to display</h2>;
  }
  return (
    <div>
      <br />
      <br />
      <br />
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-success">
          Back Home
        </Link>
        <h2 className="section-title">{name} </h2>
        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
            <p>
              <span className="badge rounded-pill bg-success drink-data">Name:</span>
              {name}
            </p>
            <p>
              <span className="badge rounded-pill bg-primary drink-data">Category:</span>
              {category}
            </p>
            <p>
              <span className="badge rounded-pill bg-success drink-data">Area:</span>
              {area}
            </p>
            <p>
              <span className="badge rounded-pill bg-warning drink-data">Tags:</span>
              {tags}
            </p>
            <p>
              <span className="badge rounded-pill bg-info drink-data">Instructions:</span>
              {instructions}
            </p>
            <p>
              <span className="badge rounded-pill bg-danger drink-data">Ingredients:</span>
              {ingredients && ingredients.map((item, index) => {
                return item ? <span key={index}>{item},</span> : null;
              })}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SingleRecipe;
