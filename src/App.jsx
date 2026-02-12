import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense, Component } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import BackToTop from './components/BackToTop'
import Preloader from './components/Preloader'
import ScrollToTop from './components/ScrollToTop'

const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const CaseStudies = lazy(() => import('./pages/CaseStudies'))
const Pricing = lazy(() => import('./pages/Pricing'))
const Contact = lazy(() => import('./pages/Contact'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))

const SEOService = lazy(() => import('./pages/services/SEOService'))
const WebDesign = lazy(() => import('./pages/services/WebDesign'))
const SocialMediaMarketing = lazy(() => import('./pages/services/SocialMediaMarketing'))
const Branding = lazy(() => import('./pages/services/Branding'))
const PPCAdvertising = lazy(() => import('./pages/services/PPCAdvertising'))
const ContentStrategy = lazy(() => import('./pages/services/ContentStrategy'))
const AIAutomation = lazy(() => import('./pages/services/AIAutomation'))

const About = lazy(() => import('./pages/About'))
const AreaPage = lazy(() => import('./pages/areas/AreaPage'))
const Blog = lazy(() => import('./pages/blog/Blog'))
const BlogPost = lazy(() => import('./pages/blog/BlogPost'))

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error) {
    // If a lazy chunk fails to load (stale cache), force reload
    if (error?.message?.includes('Failed to fetch dynamically imported module') || error?.message?.includes('Loading chunk')) {
      window.location.reload()
      return
    }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="text-slate-600 mb-6">Please try refreshing the page.</p>
            <button onClick={() => window.location.reload()} className="bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors">Refresh Page</button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <ErrorBoundary>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/seo" element={<SEOService />} />
            <Route path="/services/web-design" element={<WebDesign />} />
            <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="/services/branding" element={<Branding />} />
            <Route path="/services/ppc-advertising" element={<PPCAdvertising />} />
            <Route path="/services/content-strategy" element={<ContentStrategy />} />
            <Route path="/services/ai-automation" element={<AIAutomation />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/areas/:slug" element={<AreaPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer />
      <CookieBanner />
      <BackToTop />
    </>
  )
}

export default App
