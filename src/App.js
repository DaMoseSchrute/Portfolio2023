import AboutMe from "./Components/AboutMe";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";


function App() {
  return (
    <>

      <div className="Portfolio App">
        
        <Navbar />
        <Home />
        <AboutMe />
        <Skills />
      </div>
    </>
  );
}

export default App;
