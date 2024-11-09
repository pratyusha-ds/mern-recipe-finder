import axios from "axios";
import { backendUrl } from "../config.js";

export const complexSearch = async (req, res) => {
  const { query, cuisine, diet } = req.query;

  try {
    const apiKey = process.env.API_KEY;
    const url = `https://api.spoonacular.com/recipes/complexSearch`;

    const response = await axios.get(url, {
      params: {
        query: query || "",
        cuisine: cuisine || "",
        diet: diet || "",
        number: 10,
        apiKey: apiKey,
      },
    });

    const recipes = response.data.results;

    const validatedRecipes = await Promise.all(
      recipes.map(async (recipe) => {
        if (recipe.image) {
          const isValid = await validateImageUrl(recipe.image);
          if (!isValid) {
            recipe.image = `${backendUrl}/images/Placeholder.jpg`;
            console.log("Recipes with images:", recipe.image);
            console.log("Image URL:", recipe.image);
          }
        } else {
          recipe.image = `${backendUrl}/images/Placeholder.jpg`;
          console.log("Image URL:", recipe.image);
        }
        return recipe;
      })
    );

    res.json({ results: validatedRecipes });
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
};

const validateImageUrl = async (url) => {
  try {
    const response = await axios.head(url);
    return response.status === 200;
  } catch (error) {
    return false;
  }
};
