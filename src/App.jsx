import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Sobre from "./components/Sobre";
import StackClouds from "./components/StackClouds";

function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <StackClouds />
      <Projects />
      <Sobre />
    </main>
  );
}

export default App;
