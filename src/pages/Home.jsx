import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { FaMagnifyingGlassChart, FaLaptopCode, FaLightbulb, FaHashtag, FaBullseye, FaPenFancy, FaRobot, FaCheck, FaPlus, FaChevronLeft, FaChevronRight, FaStar, FaArrowRight } from 'react-icons/fa6'
import SEO from '../components/SEO'
import ParticleHero from '../components/ParticleHero'
import ContactForm from '../components/ContactForm'
import useScrollAnimation from '../hooks/useScrollAnimation'

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Scalix Studios",
  "image": "/scalix_logo.webp",
  "@id": "https://www.scalixstudios.co.uk",
  "url": "https://www.scalixstudios.co.uk",
  "telephone": "+441753257401",
  "priceRange": "££",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Barry Avenue",
    "addressLocality": "Windsor",
    "postalCode": "SL4 5JA",
    "addressRegion": "Berkshire",
    "addressCountry": "GB"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 51.4816, "longitude": -0.6125 },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "ratingCount": "3" },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00", "closes": "17:30"
  },
  "sameAs": ["https://www.facebook.com/scalixstudios","https://www.instagram.com/scalixstudios/"]
}

const services = [
  { icon: FaMagnifyingGlassChart, title: 'SEO', desc: 'First-page Google rankings that drive organic traffic and qualified leads.', link: '/services/seo', color: 'from-indigo-500 to-blue-600' },
  { icon: FaLaptopCode, title: 'Web Design', desc: 'Beautiful, responsive sites built to convert — from £299.', link: '/services/web-design', color: 'from-violet-500 to-purple-600' },
  { icon: FaHashtag, title: 'Social Media', desc: 'Engaging content and paid ads across every platform.', link: '/services/social-media-marketing', color: 'from-pink-500 to-rose-600' },
  { icon: FaLightbulb, title: 'Branding', desc: 'Memorable brand identities that connect and captivate.', link: '/services/branding', color: 'from-amber-500 to-orange-600' },
  { icon: FaBullseye, title: 'PPC Ads', desc: 'Targeted campaigns with an average 3x return on ad spend.', link: '/services/ppc-advertising', color: 'from-emerald-500 to-teal-600' },
  { icon: FaPenFancy, title: 'Content', desc: 'SEO copywriting and blog posts that build authority.', link: '/services/content-strategy', color: 'from-orange-500 to-red-600' },
  { icon: FaRobot, title: 'AI & Automation', desc: 'Chatbots and workflows that save hours every week.', link: '/services/ai-automation', color: 'from-cyan-500 to-blue-600' },
]

const caseStudies = [
  { tag: 'Google Ads Campaign', title: 'Fencing Co, Portsmouth', metric: '3 leads in 7 days', desc: 'Targeted Google Search campaign with £500 ad spend — generating qualified leads and phone inquiries within the first month.', img: 'https://images.unsplash.com/photo-1588251545353-a1c6a2353f86?q=80&w=1974&auto=format&fit=crop', alt: 'Modern wooden fence in a garden' },
  { tag: 'SEO & Web Design', title: 'Accountancy Firm, Slough', metric: 'Page 1 on Google', desc: 'Professional, SEO-optimized website that achieved first-page rankings for key local search terms and steady new client consultations.', img: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop', alt: 'Accountant working on laptop' },
  { tag: 'Branding & Web Development', title: 'Bespoke Furniture, Windsor', metric: 'Premium clientele', desc: 'Sophisticated brand identity and portfolio website to showcase high-end custom furniture, attracting a premium audience.', img: 'https://images.unsplash.com/photo-1595514522863-b765e921d882?q=80&w=1964&auto=format&fit=crop', alt: 'Craftsman working on bespoke furniture' },
]

const pricingPlans = [
  { name: 'Starter', desc: 'Perfect for new businesses', price: '£299', features: ['4-6 Page Website','Full SEO Optimisation','Mobile Responsive','Web3 Contact APIs'], popular: false },
  { name: 'Growth', desc: 'For businesses ready to scale', price: '£499', features: ['Unlimited Page Website','Full SEO Optimisation','Web3 Contact APIs','Social Media Setup','Google Business Setup','1 Month Ad Campaign','Branding Kit'], popular: true },
  { name: 'Enterprise', desc: 'Custom solutions for big players', price: "Let's Talk", features: ['Unlimited Pages','Ongoing SEO & Ads','Dedicated Support','Custom Features'], popular: false },
]

const testimonials = [
  { name: 'Emil J', initials: 'EJ', role: 'Hampshire Fencing', text: '"The new website and local SEO campaign Scalix launched for us has been a game-changer. Our quote requests have more than doubled in just a few months!"' },
  { name: 'Ahmed A', initials: 'AA', role: 'Wisetax Accountants', text: '"Thanks to their expert SEO work, we are now ranking on the first page of Google for \'accountants in Slough\'. The increase in new client consultations has been remarkable."' },
  { name: 'Richard S', initials: 'RS', role: 'RVS Furniture', text: '"The branding and website Scalix created perfectly captured the quality of our craft. We\'ve attracted a more premium clientele and our average order value has increased."' },
]

const faqs = [
  { q: 'How long does a website project take?', a: "A typical website build takes 4-6 weeks from start to finish, depending on the complexity and scope of the project. We'll provide a detailed timeline after our initial discovery call." },
  { q: 'How much does a new website cost?', a: 'Our pricing varies based on your specific needs. Our starter packages begin at £299. Check out our pricing page for more details, or contact us for a custom quote.' },
  { q: 'Do you provide ongoing support?', a: 'Yes! We offer ongoing website maintenance and SEO packages to ensure your site remains secure, up-to-date, and continues to rank well in search engines.' },
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
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => { clearInterval(timerRef.current); setCurrent(i); timerRef.current = setInterval(next, 7000) }} className={`h-2 rounded-full transition-all ${i === current ? 'bg-indigo-600 w-8' : 'bg-slate-300 hover:bg-slate-400 w-2'}`} aria-label={`Go to slide ${i+1}`} />
        ))}
      </div>
    </div>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
          <button className="font-semibold text-lg flex justify-between items-center w-full text-left p-6" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
            {faq.q}
            <FaPlus className={`text-indigo-500 transition-transform duration-300 flex-shrink-0 ml-4 ${openIndex === i ? 'rotate-45' : ''}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40 pb-6' : 'max-h-0'}`}>
            <p className="px-6 text-slate-600 leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Home() {
  const scrollRef = useScrollAnimation()

  return (
    <>
      <SEO structuredData={structuredData} />
      <ParticleHero className="min-h-[90vh]">
        <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-blue-200 mb-6">Berkshire&apos;s Creative Digital Agency</span>
        <h1 className="text-4xl md:text-7xl font-extrabold mb-6 text-white leading-tight">Digital Experiences<br />That <span className="gradient-text-teal">Inspire</span></h1>
        <p className="text-lg md:text-xl mb-8 text-blue-100/90 leading-relaxed max-w-2xl mx-auto">We craft innovative brands, websites, and marketing strategies to help Berkshire businesses stand out and succeed.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-indigo-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-indigo-50 transition-all hover:gap-3">Start Your Project <FaArrowRight /></Link>
          <Link to="/case-studies" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">View Our Work</Link>
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
                  <span className="block text-slate-400 text-xs mt-0.5">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold mb-4">Our Services</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Everything You Need to Grow</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4 animate-on-scroll">A complete suite of digital services to elevate your brand and drive results.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {services.map((s, i) => (
                <Link key={i} to={s.link} className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 animate-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className={`w-12 h-12 bg-gradient-to-br ${s.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    <s.icon className="text-xl" />
                  </div>
                  <h3 className="text-lg font-bold mb-1 group-hover:text-indigo-600 transition-colors">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12 animate-on-scroll">
              <Link to="/services" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all">View all services <FaArrowRight /></Link>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="work" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold mb-4">Our Work</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Real Results for Real Businesses</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {caseStudies.map((cs, i) => (
                <Link key={i} to="/case-studies" className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:border-indigo-200 transition-all duration-300 animate-on-scroll" style={{ transitionDelay: `${i*100}ms` }}>
                  <div className="relative overflow-hidden">
                    <img src={cs.img} alt={cs.alt} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-bold text-indigo-600 px-3 py-1 rounded-full">{cs.tag}</div>
                    <div className="absolute bottom-3 right-3 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg">{cs.metric}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">{cs.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{cs.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12 animate-on-scroll">
              <Link to="/case-studies" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-indigo-700 transition-colors hover:gap-3">View All Case Studies <FaArrowRight /></Link>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold mb-4">Pricing</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Transparent, Affordable Plans</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4 animate-on-scroll">No hidden fees. Pick the plan that fits your business.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
              {pricingPlans.map((plan, i) => (
                <div key={i} className={`relative rounded-2xl p-8 flex flex-col animate-on-scroll ${plan.popular ? 'bg-slate-900 text-white ring-2 ring-indigo-500 shadow-2xl md:-mt-4 md:mb-[-1rem] md:py-12' : 'bg-white border border-slate-200'}`} style={{ transitionDelay: `${i*100}ms` }}>
                  {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-wide">Most Popular</div>}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                    <p className={`text-sm ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>{plan.desc}</p>
                  </div>
                  <p className="text-5xl font-extrabold mb-8">{plan.price}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f, j) => <li key={j} className="flex items-center gap-3"><FaCheck className={`flex-shrink-0 ${plan.popular ? 'text-indigo-400' : 'text-indigo-600'}`} /><span className={`text-sm ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>{f}</span></li>)}
                  </ul>
                  <Link to="/contact" className={`font-bold py-3.5 px-6 rounded-full transition-all text-center block ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-slate-100 text-slate-800 hover:bg-indigo-600 hover:text-white'}`}>
                    {plan.popular ? 'Choose Plan' : plan.price === "Let's Talk" ? 'Contact Us' : 'Get Started'}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold mb-4">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Loved by Local Businesses</h2>
            </div>
            <TestimonialSlider />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold mb-4">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Frequently Asked Questions</h2>
            </div>
            <FAQSection />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold mb-4">Get in Touch</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Let&apos;s Build Something Amazing</h2>
              <p className="text-lg text-slate-500 max-w-xl mx-auto mt-4 animate-on-scroll">Free consultation — no jargon, no pressure.</p>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-200 animate-on-scroll">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
