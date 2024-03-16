import PropTypes from "prop-types";
import { FiClock } from "react-icons/fi";
import { HiMiniFire } from "react-icons/hi2";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Recipe = ({ recipe, handleForCooking }) => {
  const {
    recipe_id,
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <>
      <div>
        <div className="border border-solid border-gray-200 rounded-2xl p-4 mb-6">
          <img src={recipe_image} alt="" className=" " />
          <h2 className="text-xl">{recipe_name}</h2>
          <p className="pr-2">{short_description}</p>
          <hr />
          <h4>Ingredients: {ingredients.length}</h4>
          <ul className="list-disc ml-10">
            {ingredients.slice(0, 3).map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <hr />
          <div className="flex gap-10">
            <div className="flex items-center gap-2">
              <FiClock></FiClock>
              {preparing_time}
            </div>
            <div className="flex items-center gap-2">
              <HiMiniFire></HiMiniFire>
              {calories}
            </div>
          </div>
          <button
            onClick={() => handleForCooking(recipe)}
            className="btn rounded-full mt-4 bg-[#0be58a]"
          >
            Want to Cook
          </button>
          {/* <ToastContainer /> */}
        </div>
      </div>
    </>
  );
};

export default Recipe;
Recipe.propTypes = {
  recipe: PropTypes.object,
  handleForCooking: PropTypes.func,
};
