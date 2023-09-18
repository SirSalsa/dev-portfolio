import Footer from "../footer/footer"
import Intro from "../intro/intro"
import Skills from "../skills/skills"
import Experience from "../experience/experience"
import Projects from "../projects/projects"
import Navbar from "../navbar/navbar"
import "./App.scss"

function App(): JSX.Element {

  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App