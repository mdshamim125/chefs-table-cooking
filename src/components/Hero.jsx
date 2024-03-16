const Hero = () => {
  return (
    <div>
      <div
        className="hero h-[550px] rounded-2xl"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/RzFcbSB/woman-chef-cooking-vegetables-pan.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-[700px]">
            <h1 className="mb-5 text-5xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <button className="btn bg-[#0be58a] rounded-full mr-6 font-semibold text-xl">
              Explore Now
            </button>
            <button className="btn bg-opacity-25 rounded-full text-white font-semibold text-xl">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
