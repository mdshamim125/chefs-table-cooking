import { PropTypes } from "prop-types";
import WantCook from "./WantCook";
import CurrentCooking from "./CurrentCooking";
import { useState } from "react";

const Cooking = ({ wantCook, handleToDelete }) => {
  // console.log(wantCook);
  const [currentCooking, setCurrentCooking] = useState([]);
  const [countCurrentCooking, setCount] = useState(0);
  const handleCurrentCooking = (wantCook) => {
    const isExist = currentCooking.find(
      (cookingList) => cookingList.recipe_id === wantCook.recipe_id
    );
    if (!isExist) {
      const newList = [...currentCooking, wantCook];
      setCurrentCooking(newList);
      setCount(countCurrentCooking + 1);
    }
  };

  // console.log(wantCook);

  return (
    <div className="border border-solid border-gray-200 rounded-2xl p-4 mb-6">
      <h2 className="text-center text-2xl font-semibold my-4">
        Want to cook: {wantCook.length}
      </h2>

      <table>
        <thead>
          <tr className="flex justify gap-[75px] pl-4">
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
        </thead>
      </table>

      <div>
        {wantCook.map((wantCook, index) => (
          <WantCook
            key={index}
            index={index}
            wantCook={wantCook}
            handleCurrentCooking={handleCurrentCooking}
            handleToDelete={handleToDelete}
          ></WantCook>
        ))}
        <h2 className="text-center text-2xl font-semibold my-4">
          Currently cooking: {countCurrentCooking}
        </h2>
      </div>
      <div>
        {currentCooking.map((currentCooking, index) => (
          <CurrentCooking
            currentCooking={currentCooking}
            key={index}
            index={index}
          ></CurrentCooking>
        ))}
      </div>
    </div>
  );
};

export default Cooking;

Cooking.propTypes = {
  wantCook: PropTypes.array,
  currentCooking: PropTypes.array,
  countWantCook: PropTypes.number,
  handleToDelete: PropTypes.func,
};
