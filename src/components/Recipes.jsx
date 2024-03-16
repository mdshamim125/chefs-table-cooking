import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import PropTypes from "prop-types";

const Recipes = ({handleForCooking}) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("../../public/fakeData.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {recipes.map((recipe, id) => (
          <Recipe
            key={id}
            recipe={recipe}
            handleForCooking={handleForCooking}
          ></Recipe>
        ))}
      </div>
    </>
  );
};

export default Recipes;
Recipes.propTypes = {
  recipe: PropTypes.object,
  handleForCooking: PropTypes.func,
};