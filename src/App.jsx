import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar key="navbar" />
      <Hero key="hero" />
      <About key="about" />
      <Projects key="projects" />
    </main>
  )
}

export default App;