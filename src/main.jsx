// src/main.jsx — SEO: replaced createRoot with ViteSSG for static HTML pre-rendering at build time
import { ViteSSG } from 'vite-ssg' // SEO: vite-ssg replaces createRoot for static generation
import { HelmetProvider } from 'react-helmet-async' // SEO: retain HelmetProvider for per-page meta tags
import { routes } from './routes' // SEO: centralised route list
import App from './App.jsx' // SEO: main app component
import './index.css' // SEO: global styles

// SEO: ViteSSG wraps the app and pre-renders every route listed in vite.config.js ssgOptions
export const createApp = ViteSSG(
  App, // SEO: root component
  { routes }, // SEO: pass routes so vite-ssg knows the routing structure
  ({ app }) => { // SEO: callback for app-level plugins
    // SEO: register HelmetProvider so all Helmet tags appear in pre-rendered HTML
    app.use ? app.use(HelmetProvider) : null // SEO: conditional check for SSG compatibility
  }
)
