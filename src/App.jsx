import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

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
      </div>
    </>
  );
}

export default App;
