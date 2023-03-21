import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthProvider from './components/utils/Auth'
import RequireAuth from './components/utils/RequireAuth'
import Layout from './components/Layout'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/utils/Login'
import CaseStudy from './components/CaseStudy'
import db from './assets/db.json'
const LazyAbout = React.lazy(() => import('./components/About'))

export default function App() {
  return (
    <AuthProvider>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="about"
            element={
              <React.Suspense fallback="Loading...">
                <LazyAbout />
              </React.Suspense>
            }
          ></Route>
          {db.caseStudies.map((item) => (
            <Route
              key={item.id}
              path={`/case-study-${item.id}`}
              element={
                <RequireAuth>
                  <CaseStudy study={item} length={db.caseStudies.length} />
                </RequireAuth>
              }
            >
              {' '}
            </Route>
          ))}
        </Routes>
      </Layout>
    </AuthProvider>
  )
}
