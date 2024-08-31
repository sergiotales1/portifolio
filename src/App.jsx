import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import StackClouds from "./components/StackClouds";

function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <StackClouds />
      <Projects />
    </main>
  );
}

export default App;
