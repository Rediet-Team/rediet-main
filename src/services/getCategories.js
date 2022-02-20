import axios from "axios";

let yummlyAPIOptions = {
  method: "GET",
  url: "https://yummly2.p.rapidapi.com/categories/list",
  headers: {
    "x-rapidapi-host": "yummly2.p.rapidapi.com",
    "x-rapidapi-key": "ae04700101msh41d5f070a82078ep195b34jsnf553f17f9014",
  },
};

export const getCategories = async () => {
  try {
    let res = await axios.request({
      ...yummlyAPIOptions,
    });
    return res.data["browse-categories"];
  } catch (err) {
    console.log("Get Categories Error", err);
    throw err;
  }
};
