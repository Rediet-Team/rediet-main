import axios from "axios";

var options = {
  method: "GET",
  url: "https://edamam-recipe-search.p.rapidapi.com/search",
  params: { q: "chicken" },
  headers: {
    "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
    "x-rapidapi-key": "ae04700101msh41d5f070a82078ep195b34jsnf553f17f9014",
  },
};

export const getRecipes = async (ingredient) => {
  let recipes;
  if (!!ingredient) {
    try {
      let result = await axios.request({
        ...options,
        params: { q: ingredient },
      });
      recipes = result.data.hits.map((res) => res.recipe);
      return recipes;
    } catch (err) {
      console.log("Recipe Get Error", err);
      throw err;
    }
  } else {
    throw Error("Ingredient was not provided in the call");
  }
};
