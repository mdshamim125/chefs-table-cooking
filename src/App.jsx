import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Recipes from "./components/Recipes";
import Cooking from "./components/Cooking";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      toast.success("Added to the cook list!");
    } else {
      toast.warn("Already exists to the cook list");
    }
  };

  const handleToDelete = (id) => {
    const remainingWantCook = wantCook.filter((item) => item.recipe_id !== id);
    setWantCook(remainingWantCook);
  };

  // console.log(wantCook);

  return (
    <>
      <div className="lg:mx-24 mx-10">
        <Navbar></Navbar>
        <Hero></Hero>
        <div className="text-center mt-20 mx-auto max-w-[700px]">
          <h1 className="text-4xl font-semibold mb-6">Our Recipes</h1>
          <p className="mb-10">
            Explore our collection of delectable recipes tailored to tantalize
            your taste buds. From comforting classics to exotic delights, each
            dish is crafted with care to elevate your culinary journey.
          </p>
        </div>
        <div className="lg:grid grid-cols-10 gap-4">
          <div className="col-span-6">
            <Recipes handleForCooking={handleForCooking}></Recipes>
          </div>
          <div className="col-span-4">
            <Cooking
              wantCook={wantCook}
              handleToDelete={handleToDelete}
            ></Cooking>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;




