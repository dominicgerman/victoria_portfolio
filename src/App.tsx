import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthProvider from './components/Auth'
import RequireAuth from './components/RequireAuth'
import Layout from './components/Layout'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
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
