import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/utils/ScrollToTop'
import App from './App'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)
