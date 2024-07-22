import Footer from "./components/footer/footer"
import Header from "./components/header/Header"
import About from "./components/main/about/about"
import Contact from "./components/main/contact/contact"
import Projects from "./components/main/projects/projects"
import Resume from "./components/main/resume/resume"

function App() {
 

  return (
    <div className="app bg-black w-full h-full">

      <Header />

      <div className="main">
        <Resume />
        <About />
        <Projects />
        <Contact />
      </div>

      <Footer />
      
    </div>
  )
}

export default App
