import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getCaseStudies } from './components/utils/sanity'
import CaseStudyContext from './components/utils/CaseStudyContext'
import AuthProvider from './components/utils/Auth'
import RequireAuth from './components/utils/RequireAuth'
import Layout from './components/Layout'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './components/utils/Login'
import CaseStudy from './components/CaseStudies/CaseStudy'
const LazyAbout = React.lazy(() => import('./pages/About'))

export default function App() {
  // fetch data for all case studies
  const { data } = useQuery('case-studies', () => {
    return getCaseStudies()
  })

  return (
    <CaseStudyContext.Provider value={data}>
      <AuthProvider>
        <Layout>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/case-studies/:index"
              element={
                <RequireAuth>
                  <CaseStudy />
                </RequireAuth>
              }
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="about"
              element={
                <React.Suspense fallback="Loading...">
                  <LazyAbout />
                </React.Suspense>
              }
            ></Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </CaseStudyContext.Provider>
  )
}
