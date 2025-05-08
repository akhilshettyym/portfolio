import { Navbar, Hero, About, Projects, ProfessionalJourney, Contact, Footer, Experience, LogoSection, FeatureCards } 
from "./imports"

const App = () => {
  return (
    <main className="max-w-7xl mx-auto" >
      <Navbar key="navbar" />
      <Hero key="hero" />
      <About key="about" />
      <LogoSection key="logosection" />
      <FeatureCards key="featurecards" />
      <Projects key="projects" />
      <Experience key="experience" />
      <ProfessionalJourney key="professionaljourney" />
      <Contact key="contact" />
      <Footer />
    </main>
  )
}

export default App;