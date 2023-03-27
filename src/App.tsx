import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useQuery } from 'react-query'
import { client } from './hooks/sanity'
import CaseStudyContext from './hooks/CaseStudyContext'
import AuthProvider from './utils/Auth'
import RequireAuth from './utils/RequireAuth'
import Layout from './components/Layout'
import Home from './components/Home'
const LazyAbout = React.lazy(() => import('./components/About'))
import Navbar from './components/Navbar'
import Login from './utils/Login'
import CaseStudy from './components/CaseStudies/CaseStudy'

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
