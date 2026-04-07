// src/routes.js — SEO: centralised route list required by vite-ssg for static pre-rendering

import { lazy } from 'react' // SEO: lazy imports match existing App.jsx structure

// SEO: each lazy import matches existing App.jsx structure — no renaming
const Home = lazy(() => import('./pages/Home')) // SEO: homepage route
const Services = lazy(() => import('./pages/Services')) // SEO: services hub
const About = lazy(() => import('./pages/About')) // SEO: about page
const Contact = lazy(() => import('./pages/Contact')) // SEO: contact page
const CaseStudies = lazy(() => import('./pages/CaseStudies')) // SEO: case studies page
const Pricing = lazy(() => import('./pages/Pricing')) // SEO: pricing page
const Portfolio = lazy(() => import('./pages/Portfolio')) // SEO: portfolio page
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy')) // SEO: privacy policy
const SEOService = lazy(() => import('./pages/services/SEOService')) // SEO: SEO service page
const WebDesign = lazy(() => import('./pages/services/WebDesign')) // SEO: web design service page
const SocialMediaMarketing = lazy(() => import('./pages/services/SocialMediaMarketing')) // SEO: social media service page
const Branding = lazy(() => import('./pages/services/Branding')) // SEO: branding service page
const PPCAdvertising = lazy(() => import('./pages/services/PPCAdvertising')) // SEO: PPC service page
const ContentStrategy = lazy(() => import('./pages/services/ContentStrategy')) // SEO: content strategy service page
const AIAutomation = lazy(() => import('./pages/services/AIAutomation')) // SEO: AI automation service page
const AreaPage = lazy(() => import('./pages/areas/AreaPage')) // SEO: individual area landing page
const Areas = lazy(() => import('./pages/areas/Areas')) // SEO: new hub page — see HIGH 5
const Blog = lazy(() => import('./pages/blog/Blog')) // SEO: blog listing page
const BlogPost = lazy(() => import('./pages/blog/BlogPost')) // SEO: individual blog post page

// SEO: exported routes array consumed by vite-ssg in main.jsx
export const routes = [
  { path: '/', component: Home }, // SEO: homepage
  { path: '/services', component: Services }, // SEO: services hub
  { path: '/services/seo', component: SEOService }, // SEO: SEO service
  { path: '/services/web-design', component: WebDesign }, // SEO: web design service
  { path: '/services/social-media-marketing', component: SocialMediaMarketing }, // SEO: social media service
  { path: '/services/branding', component: Branding }, // SEO: branding service
  { path: '/services/ppc-advertising', component: PPCAdvertising }, // SEO: PPC service
  { path: '/services/content-strategy', component: ContentStrategy }, // SEO: content strategy service
  { path: '/services/ai-automation', component: AIAutomation }, // SEO: AI automation service
  { path: '/case-studies', component: CaseStudies }, // SEO: case studies
  { path: '/pricing', component: Pricing }, // SEO: pricing page
  { path: '/contact', component: Contact }, // SEO: contact page
  { path: '/portfolio', component: Portfolio }, // SEO: portfolio page
  { path: '/about', component: About }, // SEO: about page
  { path: '/areas', component: Areas }, // SEO: new hub — links to all 12 area pages
  { path: '/areas/:slug', component: AreaPage }, // SEO: dynamic area pages
  { path: '/blog', component: Blog }, // SEO: blog listing
  { path: '/blog/:slug', component: BlogPost }, // SEO: individual blog posts
  { path: '/privacy-policy', component: PrivacyPolicy }, // SEO: privacy policy
]
