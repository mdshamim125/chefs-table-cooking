import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mx-20">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
    </>
  );
}

export default App;
