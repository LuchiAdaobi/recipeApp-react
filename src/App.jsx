import { useEffect, useState } from 'react'
import Recipe from './Recipe';

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const APP_ID = import.meta.env.VITE_APP_ID;



  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('steak');

  useEffect(() => {
    getRecipes();
  },[query])

 const getRecipes = async () => {
   try {
     const response = await fetch(
       `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`
     );
     const data = await response.json();
     setRecipes(data.hits);
     console.log(data.hits);
   } catch (error) {
     console.error("Error fetching recipes:", error);
   }
 };


// const getRecipes = useCallback( async () => {
//   try {
//     const response = await fetch(
//       `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`
//       );
//       const data = await response.json();
//       setRecipes(data.hits);
//       console.log(data.hits);
//     } catch (error) {
//       console.error("Error fetching recipes:", error);
//     }
//   }, [query,APP_ID,API_KEY])
  
//   useEffect(() => {
//       getRecipes();
//     },[query,getRecipes])

const updateSearch = e => {
  setSearch(e.target.value);
}

const getSearch = e => {
  e.preventDefault()
  setQuery(search);
  setSearch('');
}

  return (
    <div className="app">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className='recipes'>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
        ))}
        </div>
    </div>
  );
}

export default App

