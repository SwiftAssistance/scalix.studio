// vite.config.js — SEO: full config with static pre-rendering route list
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { compression } from 'vite-plugin-compression2'

// SEO: all 12 area slugs — must match keys in src/data/areas.js exactly
const areaSlugs = [
  'windsor', 'slough', 'reading', 'maidenhead', 'bracknell',
  'wokingham', 'ascot', 'staines-upon-thames', 'egham',
  'henley-on-thames', 'marlow', 'high-wycombe',
]

// SEO: all blog slugs — must match slug fields in src/data/blogPosts.js exactly
const blogSlugs = [
  'how-much-does-a-website-cost-uk',
  'seo-tips-small-business',
  'google-ads-vs-seo',
  'why-every-business-needs-a-website-2026',
]

export default defineConfig({
  plugins: [
    react(), // SEO: React plugin
    tailwindcss(), // SEO: Tailwind CSS v4 plugin
    compression({ algorithm: 'gzip', threshold: 1024 }), // SEO: gzip compression for performance
    compression({ algorithm: 'brotliCompress', threshold: 1024 }), // SEO: brotli compression for performance
  ],
  // SEO: ssgOptions tells vite-ssg which routes to pre-render as static HTML
  ssgOptions: {
    script: 'async', // SEO: async script loading preserves LCP performance
    formatting: 'minify', // SEO: minified HTML reduces TTFB
    // SEO: explicit route list — every URL here gets its own index.html in the dist output
    includedRoutes() {
      return [
        '/', // SEO: homepage
        '/services', // SEO: services hub
        '/services/seo', // SEO: SEO service page
        '/services/web-design', // SEO: web design service page
        '/services/social-media-marketing', // SEO: social media service page
        '/services/branding', // SEO: branding service page
        '/services/ppc-advertising', // SEO: PPC service page
        '/services/content-strategy', // SEO: content strategy service page
        '/services/ai-automation', // SEO: AI automation service page
        '/case-studies', // SEO: case studies page
        '/pricing', // SEO: pricing page
        '/contact', // SEO: contact page
        '/portfolio', // SEO: portfolio page
        '/about', // SEO: about page
        '/areas', // SEO: new areas hub page
        '/blog', // SEO: blog listing page
        '/privacy-policy', // SEO: privacy policy page
        ...areaSlugs.map(s => `/areas/${s}`), // SEO: generates /areas/windsor, /areas/slough etc
        ...blogSlugs.map(s => `/blog/${s}`),  // SEO: generates /blog/slug for each post
      ]
    },
  },
  build: {
    target: 'es2020', // SEO: modern JS target
    cssMinify: 'lightningcss', // SEO: fast CSS minification
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom')) return 'react-vendor' // SEO: chunk splitting for caching
          if (id.includes('node_modules/react/')) return 'react-vendor' // SEO: chunk splitting for caching
          if (id.includes('node_modules/react-router')) return 'router' // SEO: chunk splitting for caching
          if (id.includes('node_modules/react-helmet-async')) return 'router' // SEO: chunk splitting for caching
          if (id.includes('node_modules/react-icons')) return 'icons' // SEO: chunk splitting for caching
        },
      },
    },
  },
})
