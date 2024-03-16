import { PropTypes } from "prop-types";
const WantCook = ({ wantCook, index, handleCurrentCooking }) => {
  // console.log(wantCook);
  const { recipe_name, preparing_time, calories } = wantCook;

  return (
    <>
      <div className="flex justify-around items-center">
        <td>{index + 1}</td>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <button onClick={()=>handleCurrentCooking(wantCook)} className="btn rounded-3xl bg-[#0be58a]">Preparing</button>
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
