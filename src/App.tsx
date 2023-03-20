import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import CaseStudy from './components/CaseStudy'
import db from './assets/db.json'

export default function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          {db.caseStudies.map((item) => (
            <Route
              path={`/case-studies-${item.id}`}
              element={<CaseStudy study={item} />}
            ></Route>
          ))}
        </Routes>
      </Layout>
    </>
  )
}
