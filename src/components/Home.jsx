import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar.jsx";
import RecipeList from "./RecipeList.jsx";
const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const fetchRecipes = async (query = "pasta") => {
  const response = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=f05b816c&app_key=7264294a0ae1be2b20ed8f41aa2e7bbc`
  );
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  };
  useEffect(() => {
    fetchRecipes();
  }, []);
  return (
    <Container>
      <SearchBar onSearch={fetchRecipes} />
      <RecipeList recipes={recipes} />
    </Container>
  );
};

export default Home;
