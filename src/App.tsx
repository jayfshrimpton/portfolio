import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import McpServersCaseStudy from './pages/McpServersCaseStudy'
import CommonplaceCaseStudy from './pages/CommonplaceCaseStudy'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/mcp-servers-it-support" element={<McpServersCaseStudy />} />
        <Route path="/projects/commonplace" element={<CommonplaceCaseStudy />} />
      </Routes>
    </>
  )
}

export default App
