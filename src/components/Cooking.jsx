import React from "react";
import { PropTypes } from "prop-types";

const Cooking = ({ wantCook }) => {
//   console.log(wantCook);
  return (
    <div>
      <h2 className="text-center text-2xl">Want to cook</h2>
      <h3>{wantCook.length}</h3>
    </div>
  );
};

export default Cooking;

Cooking.propTypes = {
  wantCook: PropTypes.object,
};
