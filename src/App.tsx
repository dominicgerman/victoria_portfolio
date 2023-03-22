import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { QueryClientProvider, QueryClient, useQuery } from 'react-query'
import AuthProvider from './components/utils/Auth'
import RequireAuth from './components/utils/RequireAuth'
import Layout from './components/Layout'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/utils/Login'
import CaseStudy from './components/CaseStudy'
import db from './assets/db.json'
import axios from 'axios'
const LazyAbout = React.lazy(() => import('./components/About'))

export default function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
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
            <Route
              path="case-studies/:id"
              element={
                <RequireAuth>
                  <CaseStudy />
                </RequireAuth>
              }
            ></Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </QueryClientProvider>
  )
}
