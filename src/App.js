import Header from "./components/header/Header";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Contact />
    </>
  );
}

export default App;
