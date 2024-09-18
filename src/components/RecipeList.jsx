import React from "react";
import { Grid2 } from "@mui/material";
import RecipeCard from "./RecipeCard.jsx";
const RecipeList = ({ recipes }) => {
  return (
    <Grid2 container spacing={4}>
      {recipes.map((item, index) => (
        <Grid2 item key={index} xs={12} sm={6} md={4}>
          <RecipeCard recipe={item.recipe} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default RecipeList;