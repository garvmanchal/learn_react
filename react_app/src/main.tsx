// This is the ENTRY POINT of the app — the very first file that runs.
// Vite's index.html loads this file directly via:
// <script type="module" src="/src/main.tsx">

import { StrictMode } from 'react' 
// StrictMode is a helper that doesn't render anything visible itself.
// It just double-checks your app in development to catch common mistakes early.

import { createRoot } from 'react-dom/client'
// createRoot is how React 18/19 attaches your app to the actual HTML page.

import { BrowserRouter, Routes, Route } from 'react-router-dom' 
// BrowserRouter enables client-side routing (changing pages without a
// full browser reload). Routes + Route define which component shows
// for which URL path.

import './index.css' 
// Global styles that apply to the whole app (fonts, body margin, etc.)

import App from './App.tsx'
// App is now a shared LAYOUT (Navbar + Footer) that wraps every page.

import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
// Individual page components, each shown for a specific URL.

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="..." element={...}> means:
            "when the URL matches this path, render this component" */}

        {/* App wraps its children (nested routes) with the Navbar/Footer layout.
            The <Route index> below fills in App's <Outlet /> with Home
            when the path is exactly "/" */}
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,  
)
