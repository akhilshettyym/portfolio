import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Clients from "./sections/Clients"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Experience from "./sections/Experience"

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar key="navbar" />
      <Hero key="hero" />
      <About key="about" />
      <Projects key="projects" />
      <Clients key="clients" />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

export default App;