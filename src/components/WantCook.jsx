import { PropTypes } from "prop-types";
const WantCook = ({ wantCook, index, handleCurrentCooking }) => {
  const { recipe_name, preparing_time, calories, recipe_id } = wantCook;

  return (
    <>
      <div className="flex justify-around items-center my-2">
        <td>{index + 1}</td>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <button
          onClick={() => handleCurrentCooking(wantCook, wantCook.recipe_id)}
          className="btn rounded-3xl bg-[#0be58a]"
        >
          Preparing
        </button>
      </div>
    </>
  );
};

export default WantCook;

WantCook.propTypes = {
  wantCook: PropTypes.object,
  index: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleCurrentCooking: PropTypes.func,
};
