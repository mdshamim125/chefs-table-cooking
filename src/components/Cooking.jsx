import { PropTypes } from "prop-types";
import WantCook from "./WantCook";
import CurrentCooking from "./CurrentCooking";
import { useState } from "react";

const Cooking = ({ wantCook }) => {
  // console.log(wantCook);
  const [currentCooking, setCurrentCooking] = useState([]);
  const handleCurrentCooking = (wantCook) => {
    const isExist = currentCooking.find(
      (cookingList) => cookingList.recipe_id === wantCook.recipe_id
    );
    if (!isExist) {
      const newList = [...currentCooking, wantCook];
      setCurrentCooking(newList);
    }
  };

  console.log(wantCook);

  return (
    <div className="border border-solid border-gray-200 rounded-2xl p-4 mb-6">
      <h2 className="text-center text-2xl font-semibold my-4">Want to cook</h2>
      <div className="flex justify gap-[75px] pl-4">
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </div>
      <div>
        {wantCook.map((wantCook, index) => (
          <WantCook
            key={index}
            index={index}
            wantCook={wantCook}
            handleCurrentCooking={handleCurrentCooking}
          ></WantCook>
        ))}
        <h2 className="text-center text-2xl font-semibold my-4">
          Currently cooking
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
};
