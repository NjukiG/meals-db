import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import TryLater from "./components/TryLater";
import AddFav from "./components/AddFav";
import RemoveFav from "./components/RemoveFav";
// import Later from "./components/Later";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchName, setSearchName] = useState("");
  // const [forLater, setForLater] = useState([]);
  const [favourite, setFavourite] = useState([]);

  const getRecipes = (searchName) => {
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?key=1&s=${
      !searchName ? "chicken" : searchName
    }`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data.meals);
          setRecipes(data.meals);
        }
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  };

  const saveLocally = (items)=> {
    localStorage.setItem("favourite-recipes", JSON.stringify(items))
  }

  useEffect(() => {
    getRecipes(searchName);
  }, [searchName]);

  useEffect(()=>{
    const savedFavourites = JSON.parse(localStorage.getItem("favourite-recipes"))
    setFavourite(savedFavourites)
  }, [])

  const addToFavourites = (recipe) => {
    const newFavourites = [...favourite, recipe];
    setFavourite(newFavourites);
    saveLocally(newFavourites)
  };

  const removeFavourite = (recipe) => {
    const newFavourites = favourite.filter((fav) => {
      return fav.idMeal !== recipe.idMeal;
    });
    setFavourite(newFavourites);
    saveLocally(newFavourites)
  };

  // const addToLater = (recipe) => {
  //   const newForLater = [...forLater, recipe];
  //   setForLater(newForLater);
  // };

  return (
    <div className="App container-fluid recipes-container">
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              recipes={recipes}
              searchName={searchName}
              setSearchName={setSearchName}
              AddToFav={AddFav}
              handleAddFavourite={addToFavourites}
              // AddToLater = {Later}
              // handleAddToLater = {addToLater}
            />
          }
        />
        <Route path="/trylater" element={<TryLater />} />
        <Route
          path="/favourites"
          element={
            <Favourites
              recipes={favourite}
              AddToFav={RemoveFav}
              handleAddFavourite={removeFavourite}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;






// // Your API key is: 52484b3191494bc0912298d1fabccde9


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [members, setMembers] = useState([]);
//   const [filteredMembers, setFilteredMembers] = useState([]);
//   const [filterValue, setFilterValue] = useState('');

//   useEffect(() => {
//     fetchMembers();
//   }, []);

//   const fetchMembers = async () => {
//     try {
//       const response = await axios.get('http://healthcloud-api.com/members');
//       setMembers(response.data);
//       setFilteredMembers(response.data);
//     } catch (error) {
//       console.error('Error fetching members:', error);
//     }
//   };

//   const handleFilterChange = (event) => {
//     const value = event.target.value;
//     setFilterValue(value);

//     const filtered = members.filter((member) =>
//       member.name.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilteredMembers(filtered);
//   };

//   return (
//     <div className="container">
//       <h1>Member Filtering</h1>
//       <input
//         type="text"
//         placeholder="Search by name"
//         value={filterValue}
//         onChange={handleFilterChange}
//         className="search-input"
//       />

//       <div className="members-list">
//         <h2>Members</h2>
//         {filteredMembers.length === 0 ? (
//           <p>No members found.</p>
//         ) : (
//           <ul>
//             {filteredMembers.map((member) => (
//               <li key={member.id}>{member.name}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;



