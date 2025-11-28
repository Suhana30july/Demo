import "./App.css";
// import Header from "./Components/Header";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      {/* <Header></Header> */}
      <About></About>
      <Projects></Projects>
      {/* <Contact></Contact> */}
    </>
  );
}

export default App;
