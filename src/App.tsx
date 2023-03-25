import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import { useQuery } from 'react-query'
import { client } from './components/utils/sanity'
import CaseStudyContext from './components/utils/CaseStudyContext'
import AuthProvider from './components/utils/Auth'
import RequireAuth from './components/utils/RequireAuth'
import Layout from './components/Layout'
import Home from './pages/Home'
const LazyAbout = React.lazy(() => import('./pages/About'))
import Navbar from './components/Navbar'
import Login from './components/utils/Login'
import CaseStudy from './components/CaseStudies/CaseStudy'
import CaseStudyList from './components/CaseStudies/CaseStudyList'

export default function App() {
  // fetch data for all case studies
  const { data } = useQuery('case-studies', async () => {
    try {
      const response = await client.fetch(
        '*[_type == "case-study"] | order(index asc)'
      )
      return response
    } catch (error) {
      console.error(error)
    }
  })

  return (
    <CaseStudyContext.Provider value={data}>
      <AuthProvider>
        <Layout>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/case-studies/:index"
              element={
                <RequireAuth>
                  <CaseStudy />
                </RequireAuth>
              }
            />

            <Route path="/login" element={<Login />} />
            <Route
              path="about"
              element={
                <React.Suspense fallback="Loading...">
                  <LazyAbout />
                </React.Suspense>
              }
            />
          </Routes>
        </Layout>
      </AuthProvider>
    </CaseStudyContext.Provider>
  )
}
