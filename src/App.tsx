import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {

  return (
    <div className="app">
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Footer />
    </div>
  )
}

export default App
