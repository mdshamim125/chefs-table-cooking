import { PropTypes } from "prop-types";
const WantCook = ({
  wantCook,
  index,
  handleCurrentCooking,
  handleToDelete,
}) => {
  const { recipe_name, preparing_time, calories, recipe_id } = wantCook;

  return (
    <>
      <tr className="flex justify-around items-center my-2">
        <td>{index + 1}</td>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <td
          className="btn"
          onClick={() => {
            handleCurrentCooking(wantCook);
            handleToDelete(recipe_id);
          }}
          className="btn rounded-3xl bg-[#0be58a]"
        >
          Preparing
        </td>
      </tr>
    </>
  );
};

export default WantCook;

WantCook.propTypes = {
  wantCook: PropTypes.object,
  index: PropTypes.number.isRequired,
  handleCurrentCooking: PropTypes.func,
  handleToDelete: PropTypes.func,
};
