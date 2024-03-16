import React from "react";
import { PropTypes } from "prop-types";
import WantCook from "./WantCook";

const Cooking = ({ wantCook }) => {
  //   console.log(wantCook);

  return (
    <div className="border border-solid border-gray-200 rounded-2xl p-4 mb-6">
      <h2 className="text-center text-2xl">Want to cook</h2>
      <div className="flex justify gap-[75px] pl-4">
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </div>
      <div>
        {wantCook.map((wantCook, index) => (
          <WantCook key={index} index={index} wantCook={wantCook}></WantCook>
        ))}
      </div>
    </div>
  );
};

export default Cooking;

Cooking.propTypes = {
  wantCook: PropTypes.array,
};
