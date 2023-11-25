import React from "react";
import ReactDOM from "react-dom/client";
import { fetchOpenAIData } from "../services/openaiService";

const RecipeFinderApp = ({ initialIngredients }) => {
    const [ingredients, setIngredients] = useState(initialIngredients || '');
    const [recipes, setRecipes] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const prompt = `Find not simplified recipes and put them into JSON format that can be made with the ingredients: ${ingredients}; with fields: "name" - String, "ingredients" - array, "steps" - String. Don't put other text, you can post only JSON.`;
  
          const result = await fetchOpenAIData(prompt);
          setRecipes(result);
        } catch (error) {
          console.error('Error fetching recipes:', error);
        }
      };

    fetchData();
  }, [ingredients]);

  return (

    
    <div>
      <h1>Recipe Finder</h1>

      <h2>Recipes:</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.name}</h3>
            <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            <p>Steps: {recipe.steps}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeFinderApp;

