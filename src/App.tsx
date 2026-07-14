import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CustomCursor } from './components/CustomCursor'
import { Navbar } from './components/Navbar'
import Home from './pages/Home'

const SceneCanvas = lazy(() =>
  import('./components/SceneCanvas').then((module) => ({ default: module.SceneCanvas })),
)
const McpServersCaseStudy = lazy(() => import('./pages/McpServersCaseStudy'))
const CommonplaceCaseStudy = lazy(() => import('./pages/CommonplaceCaseStudy'))

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Suspense fallback={null}>
        <SceneCanvas />
      </Suspense>
      <CustomCursor />
      <Navbar />
      <Suspense fallback={<div className="route-loader">Loading project…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/mcp-servers-it-support" element={<McpServersCaseStudy />} />
          <Route path="/projects/commonplace" element={<CommonplaceCaseStudy />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
