import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
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

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
      <Footer />
      <CookieBanner />
      <BackToTop />
    </>
  )
}

export default App
