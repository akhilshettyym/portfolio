import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import ProfessionalJourney from "./sections/ProfessionalJourney"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Experience from "./sections/Experience"
import LogoSection from "./components/LogoSection"

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar key="navbar" />
      <Hero key="hero" />
      <About key="about" />
      <LogoSection key="logosection" />
      <Projects key="projects" />
      <Experience key="experience"/>
      <ProfessionalJourney key="ProfessionalJourney" />
      <Contact key="contact"/>
      <Footer />
    </main>
  )
}

export default App;