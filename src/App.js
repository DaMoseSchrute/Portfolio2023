import Home from "./Components/Home";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <>

      <div className="Portfolio App">
        {/* <h1 className="text-xl font-bold text-primary px-4" style={{fontFamily: 'var(--font-family)'}}>Jacob Riggs Portfolio</h1> */}
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
