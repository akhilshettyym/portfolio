import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Education from "./sections/Education"

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar key="navbar" />
      <Hero key="hero" />
      <About key="about" />
      <Education key="education" />
      <Projects key="projects" />
    </main>
  )
}

export default App;