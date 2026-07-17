import Hero from "../Components/Hero";
import About from "../Components/About";
import ResumePage from "../Components/ResumePage";

function Pages() {
  return (
    <>
      <Hero />

      {/* Hero এর নিচে Content */}
      <div className="relative z-10 mt-[100vh] bg-white">
        <About />
      </div>
      <div className="">
          <ResumePage />
      </div>
   
    </>
  );
}

export default Pages;