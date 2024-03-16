import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Recipes from "./components/Recipes";
import Cooking from "./components/Cooking";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  const [wantCook, setWantCook] = useState([]);
  const handleForCooking = (recipe) => {
    const isExist = wantCook.find(
      (cookingList) => cookingList.recipe_id === recipe.recipe_id
    );
    if (!isExist) {
      const newRecipes = [...wantCook, recipe];
      // toast("hi");
      setWantCook(newRecipes);
    }
  };

  // console.log(wantCook);

  return (
    <>
      <div className="lg:mx-24 mx-10">
        <Navbar></Navbar>
        <Hero></Hero>
        <div className="text-center mt-20 mx-auto max-w-[700px]">
          <h1 className="text-4xl">Our Recipes</h1>
          <p className="mb-10">
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
            vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
            elementum mauris aenean neque.{" "}
          </p>
        </div>
        <div className="lg:grid grid-cols-10 gap-4">
          <div className="col-span-6">
            <Recipes handleForCooking={handleForCooking}></Recipes>
          </div>
          <div className="col-span-4">
            <Cooking wantCook={wantCook}></Cooking>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
