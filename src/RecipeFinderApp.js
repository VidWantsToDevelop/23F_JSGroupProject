import React, { useState, useEffect } from "react";
import { fetchOpenAIData } from "./services/openaiService";

const RecipeFinderApp = ({ initialIngredients }) => {
  const [ingredients, setIngredients] = useState(initialIngredients || '');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [warning, setWarning] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        
        const ingredientList = ingredients.split(',').map(ingredient => ingredient.trim());
        if (ingredientList.length < 4) {
          setWarning('Please add at least 4 ingredients.');
          return; 
        } else {
          setWarning(null); 
        }

        const prompt = `Find four recipes (under 75 words each) and put them together into one JSON file without the array, that can be made with the ingredients (don't have to contain all ingredients): ${ingredients};\n
        USE THIS JSON FORMAT:\n
        
        {
          "recipe1": {
            "name": "",
            "ingredients": ["", "", "", ""],
            "steps": ""
          },
          "recipe2": {
            "name": "",
            "ingredients": ["", "", "", ""],
            "steps": ""
          }
        }
        \n
        DON'T PUT ANY TEXT, USE ONLY JSON RESPONCE.`;

        const result = await fetchOpenAIData(prompt);
        setRecipes(result);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [ingredients]);

  return (
    <div>
      <h1>Recipe Finder</h1>

      <h2>Recipes:</h2>
      {warning ? (
        <p>{warning}</p>
      ) : loading ? (
        <p>Looking for recipes...</p>
      ) : (
        <ul>
          {Object.keys(recipes).map((recipeKey) => {
            const recipe = recipes[recipeKey];
            return (
              <li key={recipeKey}>
                <h3>{recipe.name}</h3>
                <p>Ingredients: {recipe.ingredients.join(', ')}</p>
                <p>Steps: {recipe.steps}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default RecipeFinderApp;
