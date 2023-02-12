import React, { useState } from "react";
import axios from "axios";

export default function Recepis() {
  const [recipe, setRecipe] = useState("");
  const [results, setResults] = useState([]);
//   const [ingredients, setIngredients] = useState(null);
//   const [id,setId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiKey = "7924db2a31f34b2dbf12e70dfec9ace5"
    const response = await axios.get(
      `https://api.spoonacular.com/food/ingredients/search?query=${recipe}&apiKey=${apiKey}`
    );
    setResults(response.data.results);
//     setIngredients(response.data.results[0].name);
//     setId(response.data.results[0].id);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter recipe name"
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
        />
        <button type="submit">Get Ingredients</button>
      </form>
      {results.map(result => (
        <div key={result.id}>
          <p>Name: {result.name}</p>
        </div>
      ))}
      {/* {ingredients}
      {id} */}
    </div>
  );
}
