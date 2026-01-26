import { Routes, Route } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/home"
import AboutMe from './components/about-me'
import Projects from './components/projects'
import Footer from './components/footer'
import Error from "./pages/error"

function App() {
  return (
    <Routes>

      <Route element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Footer />} />
      </Route>

      {/* Erro 404 Not Found */}
      <Route path="*" element={<Error />} />

    </Routes>
  )
}

export default App
