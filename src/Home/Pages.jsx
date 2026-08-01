import Hero from "../Components/Hero";
import About from "../Components/About";
import ResumePage from "../Components/ResumePage";
import Portfolio from "../Components/Portfolio";
import Certificate from "../Components/Certificate";
import Contact from "../Components/Contact";

function Pages() {
  return (
    <>
      <Hero />

      {/* Hero এর নিচে Content */}
      <div className="relative z-10 mt-[100vh] bg-white">
        <About />
      </div>
    
          <ResumePage />
           <Portfolio/>
           <Certificate/>
           <Contact/>
   
    </>
  );
}

export default Pages;