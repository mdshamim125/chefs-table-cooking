import { PropTypes } from "prop-types";

const CurrentCooking = ({ currentCooking, index }) => {
  const { recipe_name, preparing_time, calories } = currentCooking;
  return (
    <>
      <div className="flex justify-around items-center my-2">
        <td>{index + 1}</td>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
      </div>
    </>
  );
};

export default CurrentCooking;

CurrentCooking.propTypes = {
  currentCooking: PropTypes.object,
  index: PropTypes.arrayOf(PropTypes.number).isRequired,
};



