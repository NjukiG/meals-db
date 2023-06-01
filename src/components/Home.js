import React from "react";
import RecipeCard from "./RecipeCard";

function Home({
  recipes,
  searchName,
  setSearchName,
  AddToFav,
  handleAddFavourite,
  // AddToLater,
  // handleAddToLater
}) {
  // const recipes = []

  const handleSubmit = (e)=> {
      e.preventDefault()
      setSearchName(e.target.value)
  }
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h2>All Recipes.</h2>
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          className="form-control me-sm-2"
          type="search"
          placeholder="Search"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>

      <div className="container row">
        {(recipes !== null && recipes !== undefined) && recipes.map((recipe, index) => {
          return (
            <RecipeCard
              recipe={recipe}
              key={index}
              AddToFav={AddToFav}
              handleAddFavourite={handleAddFavourite}
              // AddToLater={AddToLater}
              // handleAddToLater={handleAddToLater}
            />
          ) ;
        })}
      </div>
    </div>
  );
}

export default Home;
