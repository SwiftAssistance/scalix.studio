import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { FaMagnifyingGlassChart, FaLaptopCode, FaBullseye, FaCheck, FaChevronLeft, FaChevronRight, FaStar, FaArrowRight, FaCompass, FaPaintbrush, FaRocket } from 'react-icons/fa6'
import SEO from '../components/SEO'
import ParticleHero from '../components/ParticleHero'
import useScrollAnimation from '../hooks/useScrollAnimation'

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Scalix Studios",
  "image": "https://www.scalixstudios.co.uk/scalix_logo.webp",
  "@id": "https://www.scalixstudios.co.uk/#localbusiness",
  "url": "https://www.scalixstudios.co.uk",
  "telephone": "+441753257401",
  "email": "info@scalixstudios.co.uk",
  "priceRange": "££",
  "description": "Berkshire's leading digital agency specialising in SEO, web design, social media marketing, branding, PPC advertising, and AI automation for local businesses.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Barry Avenue",
    "addressLocality": "Windsor",
    "postalCode": "SL4 5JA",
    "addressRegion": "Berkshire",
    "addressCountry": "GB"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 51.4816, "longitude": -0.6125 },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "bestRating": "5", "worstRating": "1", "ratingCount": "3" },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00", "closes": "17:30"
  },
  "areaServed": [
    { "@type": "Place", "name": "Windsor" },
    { "@type": "Place", "name": "Slough" },
    { "@type": "Place", "name": "Reading" },
    { "@type": "Place", "name": "Berkshire" },
    { "@type": "Place", "name": "Thames Valley" }
  ],
  "sameAs": ["https://www.facebook.com/scalixstudios","https://www.instagram.com/scalixstudios/"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Search Engine Optimisation (SEO)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Design & Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PPC Advertising" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Branding & Creative Design" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Strategy" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI & Automation" } }
    ]
  }
}

const structuredData = [localBusinessData]

const coreServices = [
  {
    icon: FaLaptopCode,
    title: 'Web Design & Development',
    desc: 'Beautiful, responsive websites engineered to convert visitors into customers. Every pixel earns its place.',
    link: '/services/web-design',
    color: 'from-violet-500 to-purple-600',
    features: ['Conversion-focused design', 'Mobile-first builds', 'Lightning-fast performance'],
    img: '/web-development-scalix.webp',
    imgAlt: 'Web design and development by Scalix Studios',
    stat: '£299',
    statLabel: 'Websites from',
  },
  {
    icon: FaMagnifyingGlassChart,
    title: 'Search Engine Optimisation',
    desc: 'We get your business found. Data-driven SEO strategies that earn first-page rankings and consistent organic traffic.',
    link: '/services/seo',
    color: 'from-indigo-500 to-blue-600',
    features: ['Technical & on-page SEO', 'Local search dominance', 'Content-led authority building'],
    img: '/seo-strategy-berkshire.webp',
    imgAlt: 'SEO strategy and analytics dashboard',
    stat: 'Page 1',
    statLabel: 'Google rankings',
  },
  {
    icon: FaBullseye,
    title: 'Paid Advertising',
    desc: 'Targeted Google & social campaigns with real ROI. We turn ad spend into revenue with precision targeting.',
    link: '/services/ppc-advertising',
    color: 'from-emerald-500 to-teal-600',
    features: ['Google Ads management', 'Social media campaigns', 'Average 3x return on spend'],
    img: '/ppc-advertising-berkshire.webp',
    imgAlt: 'PPC advertising campaign management',
    stat: '3x',
    statLabel: 'Average ROAS',
  },
]

const featuredStudy = {
  tag: 'Google Ads Campaign',
  title: 'Fencing Co, Portsmouth',
  metric: '3 leads in 7 days',
  desc: 'Targeted Google Search campaign with £500 ad spend — generating qualified leads and phone inquiries within the first week of launch.',
  img: 'https://images.unsplash.com/photo-1588251545353-a1c6a2353f86?q=75&w=800&auto=format&fit=crop',
  alt: 'Modern wooden fence in a garden',
}

const supportingStudies = [
  { tag: 'SEO & Web Design', title: 'Accountancy Firm, Slough', metric: 'Page 1 on Google', img: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=75&w=600&auto=format&fit=crop', alt: 'Accountant working on laptop' },
  { tag: 'Branding & Web', title: 'Bespoke Furniture, Windsor', metric: 'Premium clientele', img: 'https://images.unsplash.com/photo-1595514522863-b765e921d882?q=75&w=600&auto=format&fit=crop', alt: 'Craftsman working on bespoke furniture' },
]

const processSteps = [
  { icon: FaCompass, num: '01', title: 'Discover', desc: 'We learn your business, goals, and audience. No templates — strategy built around what makes you different.', color: 'from-indigo-500 to-violet-600' },
  { icon: FaPaintbrush, num: '02', title: 'Create', desc: 'Design, build, and refine. You see progress at every stage — nothing launches without your sign-off.', color: 'from-violet-500 to-purple-600' },
  { icon: FaRocket, num: '03', title: 'Launch & Grow', desc: 'Go live with confidence. We track performance, optimise campaigns, and scale what works.', color: 'from-purple-500 to-indigo-600' },
]

const testimonials = [
  { name: 'Emil J', initials: 'EJ', role: 'Hampshire Fencing', text: '"The new website and local SEO campaign Scalix launched for us has been a game-changer. Our quote requests have more than doubled in just a few months!"' },
  { name: 'Ahmed A', initials: 'AA', role: 'Wisetax Accountants', text: '"Thanks to their expert SEO work, we are now ranking on the first page of Google for \'accountants in Slough\'. The increase in new client consultations has been remarkable."' },
  { name: 'Richard S', initials: 'RS', role: 'RVS Furniture', text: '"The branding and website Scalix created perfectly captured the quality of our craft. We\'ve attracted a more premium clientele and our average order value has increased."' },
]

function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  const next = useCallback(() => setCurrent(c => (c + 1) % testimonials.length), [])
  const prev = useCallback(() => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length), [])

  useEffect(() => {
    timerRef.current = setInterval(next, 7000)
    return () => clearInterval(timerRef.current)
  }, [next])

  const resetTimer = (fn) => () => { clearInterval(timerRef.current); fn(); timerRef.current = setInterval(next, 7000) }

  return (
    <div className="max-w-4xl mx-auto relative">
      <div className="rounded-2xl overflow-hidden">
        <div className="testimonial-slider-track" style={{ transform: `translateX(-${current * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-slide p-4">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-100">
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(5)].map((_, j) => <FaStar key={j} className="text-amber-400" />)}
                </div>
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8">{t.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">{t.initials}</div>
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={resetTimer(prev)} aria-label="Previous testimonial" className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 bg-white rounded-full shadow-lg border border-slate-200 w-12 h-12 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors z-10"><FaChevronLeft /></button>
      <button onClick={resetTimer(next)} aria-label="Next testimonial" className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-white rounded-full shadow-lg border border-slate-200 w-12 h-12 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors z-10"><FaChevronRight /></button>
      <div className="flex justify-center gap-3 mt-6" role="tablist" aria-label="Testimonial slides">
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => { clearInterval(timerRef.current); setCurrent(i); timerRef.current = setInterval(next, 7000) }} className={`relative h-12 w-12 flex items-center justify-center`} aria-label={`Go to testimonial ${i+1}`} role="tab" aria-selected={i === current}>
            <span className={`block rounded-full transition-all ${i === current ? 'bg-indigo-600 w-8 h-3' : 'bg-slate-400 hover:bg-slate-500 w-3 h-3'}`} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const scrollRef = useScrollAnimation()

  return (
    <>
      <SEO structuredData={structuredData} />
      <ParticleHero className="min-h-[75vh] md:min-h-[90vh]">
        <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-white/10 border border-white/20 rounded-full text-xs md:text-sm font-medium text-blue-200 mb-4 md:mb-6">Berkshire&apos;s Creative Digital Agency</span>
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold mb-4 md:mb-6 text-white leading-tight">Digital Experiences That <span className="gradient-text-teal">Inspire</span></h1>
        <p className="text-base md:text-xl mb-6 md:mb-8 text-blue-100/90 leading-relaxed max-w-2xl mx-auto px-2">We craft innovative brands, websites, and marketing strategies to help Berkshire businesses stand out and succeed.</p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-indigo-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-lg hover:bg-indigo-50 transition-all hover:gap-3">Start Your Project <FaArrowRight /></Link>
          <Link to="/case-studies" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/20 transition-all">View Our Work</Link>
        </div>
      </ParticleHero>

      <main ref={scrollRef}>
        {/* Trust strip */}
        <section className="bg-slate-900 border-t border-white/10 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 items-center text-center">
              {[{ n: '50+', l: 'Projects delivered' }, { n: '5.0', l: 'Google rating' }, { n: '3x', l: 'Average ROAS' }, { n: '£299', l: 'Websites from' }].map((s, i) => (
                <div key={i} className="animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                  <span className="text-2xl md:text-3xl font-extrabold text-white">{s.n}</span>
                  <span className="block text-slate-300 text-xs mt-0.5">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Services — Bento layout */}
        <section id="services" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
                <div>
                  <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold mb-4">What We Do</span>
                  <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Three things.<br />Done <span className="gradient-text">exceptionally</span> well.</h2>
                </div>
                <Link to="/services" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all animate-on-scroll self-start md:self-auto">All services <FaArrowRight /></Link>
              </div>

              {/* Bento grid */}
              <div className="bento-grid">
                {coreServices.map((s, i) => (
                  <Link
                    key={i}
                    to={s.link}
                    className={`bento-card group relative overflow-hidden rounded-3xl border border-slate-200 hover:border-indigo-300 transition-all duration-300 animate-on-scroll ${i === 0 ? 'bento-featured bg-slate-900 text-white' : 'bg-white'}`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {/* Service image */}
                    <div className={`bento-card-image relative overflow-hidden ${i === 0 ? 'h-56 md:h-auto md:min-h-[14rem]' : 'h-48'}`}>
                      <img src={s.img} alt={s.imgAlt} width="600" height="400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className={`absolute inset-0 ${i === 0 ? 'bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20' : 'bg-gradient-to-t from-white via-white/70 to-transparent'}`} />
                      {/* Stat badge */}
                      <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-xl text-center ${i === 0 ? 'bg-white/15 backdrop-blur-sm border border-white/20' : 'bg-slate-900/80 backdrop-blur-sm'}`}>
                        <span className={`block text-lg font-extrabold leading-tight ${i === 0 ? 'text-white' : 'text-white'}`}>{s.stat}</span>
                        <span className={`block text-xs uppercase tracking-wider ${i === 0 ? 'text-slate-300' : 'text-slate-300'}`}>{s.statLabel}</span>
                      </div>
                      {/* Icon floating over image bottom */}
                      <div className={`absolute bottom-0 left-8 translate-y-1/2 w-14 h-14 bg-gradient-to-br ${s.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform z-10`}>
                        <s.icon className="text-xl" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 pt-10 md:px-8 flex-shrink-0">
                      <h3 className={`text-xl font-bold mb-2 ${i === 0 ? 'text-white' : 'group-hover:text-indigo-600 transition-colors'}`}>{s.title}</h3>
                      <p className={`text-sm leading-relaxed mb-5 ${i === 0 ? 'text-slate-300' : 'text-slate-600'}`}>{s.desc}</p>
                      <ul className="space-y-2 mb-6">
                        {s.features.map((f, j) => (
                          <li key={j} className="flex items-center gap-2.5">
                            <FaCheck className={`text-xs flex-shrink-0 ${i === 0 ? 'text-indigo-300' : 'text-indigo-600'}`} />
                            <span className={`text-sm ${i === 0 ? 'text-slate-300' : 'text-slate-600'}`}>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <div className={`inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all ${i === 0 ? 'text-indigo-400' : 'text-indigo-600'}`}>
                        Learn more <FaArrowRight className="text-xs" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How We Work — Process */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold mb-4">How We Work</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Simple process.<br /><span className="gradient-text">Serious</span> results.</h2>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Connecting line on desktop */}
                <div className="hidden md:block absolute top-[4.5rem] left-[16.666%] right-[16.666%] h-px bg-gradient-to-r from-indigo-200 via-purple-300 to-indigo-200" />
                {processSteps.map((step, i) => (
                  <div key={i} className="relative text-center animate-on-scroll" style={{ transitionDelay: `${i * 150}ms` }}>
                    <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white mb-6 relative z-10 shadow-lg`}>
                      <step.icon className="text-2xl" />
                    </div>
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2 block">{step.num}</span>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section id="work" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
                <div>
                  <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold mb-4">Our Work</span>
                  <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Real results for<br /><span className="gradient-text">real businesses</span>.</h2>
                </div>
                <Link to="/case-studies" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all animate-on-scroll self-start md:self-auto">All case studies <FaArrowRight /></Link>
              </div>

              {/* Featured + supporting */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Featured large card */}
                <Link to="/case-studies" className="lg:col-span-3 group relative rounded-3xl overflow-hidden animate-on-scroll featured-study-card">
                  <img src={featuredStudy.img} alt={featuredStudy.alt} width="800" height="600" className="w-full h-72 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                    <span className="inline-block bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4">{featuredStudy.tag}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{featuredStudy.title}</h3>
                    <p className="text-slate-300 mb-4 max-w-lg leading-relaxed">{featuredStudy.desc}</p>
                    <div className="inline-flex items-center gap-2 bg-indigo-600 text-white text-sm font-bold px-5 py-2.5 rounded-full group-hover:bg-indigo-500 transition-colors">
                      {featuredStudy.metric} <FaArrowRight className="text-xs" />
                    </div>
                  </div>
                </Link>

                {/* Supporting cards */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                  {supportingStudies.map((cs, i) => (
                    <Link key={i} to="/case-studies" className="group flex-1 relative rounded-3xl overflow-hidden animate-on-scroll min-h-[200px]" style={{ transitionDelay: `${(i + 1) * 100}ms` }}>
                      <img src={cs.img} alt={cs.alt} width="600" height="400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="inline-block bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">{cs.tag}</span>
                        <h3 className="text-xl font-bold text-white mb-1">{cs.title}</h3>
                        <span className="text-sm font-semibold text-indigo-300">{cs.metric}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold mb-4">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Loved by local businesses.</h2>
            </div>
            <TestimonialSlider />
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 30% 50%, #4c1d95 0%, transparent 50%), radial-gradient(circle at 70% 50%, #1e40af 0%, transparent 50%)' }} />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">Ready to stand out<br />from the competition?</h2>
              <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">Free consultation — no jargon, no pressure. Let&apos;s talk about what your business actually needs.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-indigo-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-indigo-50 transition-all hover:gap-3">Start Your Project <FaArrowRight /></Link>
                <Link to="/pricing" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">View Pricing</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
