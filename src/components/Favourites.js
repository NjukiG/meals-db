import React from "react";
import RecipeCard from "./RecipeCard";

function Favourites({recipes, AddToFav, handleAddFavourite}) {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h1>Favourites.</h1>

      <div className="container row">
        {recipes.map((recipe, index) => {
          return (
            <RecipeCard
              recipe={recipe}
              key={index}
              AddToFav={AddToFav}
              handleAddFavourite={handleAddFavourite}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Favourites;
