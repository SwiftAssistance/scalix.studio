import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { FaMagnifyingGlassChart, FaLaptopCode, FaLightbulb, FaCheck, FaPlus, FaChevronLeft, FaChevronRight, FaStar, FaArrowRight } from 'react-icons/fa6'
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
  { icon: FaMagnifyingGlassChart, title: 'SEO', desc: 'Climb the rankings and attract organic traffic.' },
  { icon: FaLaptopCode, title: 'Web Design', desc: 'Beautiful, responsive sites built to convert.' },
  { icon: FaLightbulb, title: 'Branding', desc: 'Forge a memorable brand identity that captivates.' },
]

const caseStudies = [
  { tag: 'Google Ads Campaign', title: 'Fencing Co, Portsmouth', desc: 'Launched a targeted Google Search campaign with a £500 ad spend, generating a significant increase in qualified leads and phone inquiries within the first month.', img: 'https://images.unsplash.com/photo-1588251545353-a1c6a2353f86?q=80&w=1974&auto=format&fit=crop', alt: 'Modern wooden fence in a garden' },
  { tag: 'SEO & Web Design', title: 'Accountancy Firm, Slough', desc: 'Developed a professional, SEO-optimized website that achieved first-page rankings for key local search terms, driving a steady stream of new client consultations.', img: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop', alt: 'Accountant working on laptop' },
  { tag: 'Branding & Web Development', title: 'Bespoke Furniture, Windsor', desc: 'Created a sophisticated brand identity and a visually stunning portfolio website to showcase high-end custom furniture, attracting a premium clientele.', img: 'https://images.unsplash.com/photo-1595514522863-b765e921d882?q=80&w=1964&auto=format&fit=crop', alt: 'Craftsman working on bespoke furniture' },
]

const pricingPlans = [
  { name: 'Starter', desc: 'Perfect for new businesses', price: '£299', features: ['4-6 Page Website','Full SEO Optimisation','Mobile Responsive','Web3 Contact APIs'], popular: false },
  { name: 'Growth', desc: 'For businesses ready to scale', price: '£499', features: ['Unlimited Page Website','Full SEO Optimisation','Web3 Contact APIs','Social Media Setup','Google Business Setup','1 Month Ad Campaign','Branding Kit'], popular: true },
  { name: 'Enterprise', desc: 'Custom solutions for big players', price: "Let's Talk", features: ['Unlimited Pages','Ongoing SEO & Ads','Dedicated Support','Custom Features'], popular: false },
]

const testimonials = [
  { name: 'Emil J', initials: 'EJ', text: '"The new website and local SEO campaign Scalix launched for us has been a game-changer. Our quote requests have more than doubled in just a few months!"' },
  { name: 'Ahmed A', initials: 'AA', text: '"Thanks to their expert SEO work, we are now ranking on the first page of Google for \'accountants in Slough\'. The increase in new client consultations has been remarkable."' },
  { name: 'Richard S', initials: 'RS', text: '"The branding and website Scalix created perfectly captured the quality of our craft. We\'ve attracted a more premium clientele and our average order value has increased."' },
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
      <div className="rounded-xl overflow-hidden">
        <div className="testimonial-slider-track" style={{ transform: `translateX(-${current * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-slide p-8">
              <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 text-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-indigo-200 shadow-lg bg-indigo-50 flex items-center justify-center text-indigo-600 text-2xl font-bold">{t.initials}</div>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-lg text-slate-600 mb-4 italic">{t.text}</p>
                  <p className="font-bold text-lg text-slate-800">{t.name}</p>
                  <div className="flex items-center justify-center md:justify-start text-yellow-400 mt-2">
                    {[...Array(5)].map((_, j) => <FaStar key={j} />)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={resetTimer(prev)} aria-label="Previous testimonial" className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full shadow-md w-12 h-12 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors z-10"><FaChevronLeft /></button>
      <button onClick={resetTimer(next)} aria-label="Next testimonial" className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full shadow-md w-12 h-12 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors z-10"><FaChevronRight /></button>
      <div className="flex justify-center space-x-2 mt-4">
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => { clearInterval(timerRef.current); setCurrent(i); timerRef.current = setInterval(next, 7000) }} className={`w-3 h-3 rounded-full transition-colors ${i === current ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'}`} aria-label={`Go to slide ${i+1}`} />
        ))}
      </div>
    </div>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white p-6 rounded-lg shadow-sm animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
          <button className="font-semibold text-lg flex justify-between items-center w-full text-left" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
            {faq.q}
            <FaPlus className={`text-indigo-500 transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`} />
          </button>
          {openIndex === i && <p className="mt-4 text-slate-600">{faq.a}</p>}
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
        <h1 className="text-4xl md:text-7xl font-extrabold mb-6 text-white leading-tight">Digital Experiences That Inspire</h1>
        <p className="text-lg md:text-xl mb-8 text-blue-100/90 leading-relaxed max-w-2xl mx-auto">We are Scalix Studios. A creative agency crafting innovative brands, websites, and marketing strategies to help you stand out and succeed.</p>
        <Link to="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-200 transform hover:scale-105 transition-all">Start Your Project</Link>
      </ParticleHero>

      <main ref={scrollRef}>
        {/* Services */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-semibold">Our Services</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">What We Can Do For You</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4 animate-on-scroll">We offer a complete suite of digital services to elevate your brand.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {services.map((s, i) => (
                <div key={i} className="service-card-new bg-white rounded-full shadow-lg text-center flex flex-col justify-center items-center p-8 w-[280px] h-[280px] animate-on-scroll" style={{ transitionDelay: `${(i+1)*100}ms` }}>
                  <div className="service-icon-new bg-indigo-100 text-indigo-600 w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 mx-auto mb-6">
                    <s.icon className="text-4xl" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-slate-600">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-16 animate-on-scroll">
              <Link to="/services" className="inline-block bg-transparent border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-indigo-600 hover:text-white transform hover:scale-105 transition-all">View All Services</Link>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="work" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-semibold">Our Success Stories</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Real Results for Real Businesses</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4 animate-on-scroll">We&apos;re proud of the impact we&apos;ve made. Here are some of our favourite projects.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((cs, i) => (
                <div key={i} className="case-study-card bg-white rounded-lg shadow-lg overflow-hidden animate-on-scroll" style={{ transitionDelay: `${i*100}ms` }}>
                  <img src={cs.img} alt={cs.alt} className="w-full h-48 object-cover" loading="lazy" />
                  <div className="p-6">
                    <span className="text-sm font-semibold text-indigo-600">{cs.tag}</span>
                    <h3 className="text-2xl font-bold my-2">{cs.title}</h3>
                    <p className="text-slate-600 mb-4">{cs.desc}</p>
                    <Link to="/case-studies" className="font-semibold text-indigo-600 hover:underline">Read Case Study <FaArrowRight className="inline ml-1" /></Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-semibold">Our Pricing</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Affordable Plans for Every Business</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4 animate-on-scroll">Transparent pricing to help you get started.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {pricingPlans.map((plan, i) => (
                <div key={i} className={`pricing-card border-t-8 rounded-lg p-8 text-center relative animate-on-scroll ${plan.popular ? 'border-indigo-600 bg-white' : 'border-slate-300 bg-slate-50'}`} style={{ transitionDelay: `${i*100}ms` }}>
                  {plan.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">Most Popular</div>}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-slate-500 mb-6">{plan.desc}</p>
                  <p className="text-5xl font-extrabold mb-6">{plan.price}</p>
                  <ul className="space-y-4 text-slate-600 mb-8 text-left">
                    {plan.features.map((f, j) => <li key={j}><FaCheck className="inline text-green-500 mr-2" />{f}</li>)}
                  </ul>
                  <Link to="/contact" className={`font-bold py-3 px-6 rounded-full transition-colors w-full block mt-auto ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-200 text-slate-800 hover:bg-slate-300'}`}>
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
              <span className="text-indigo-600 font-semibold">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">What Our Clients Say</h2>
            </div>
            <TestimonialSlider />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-semibold">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Frequently Asked Questions</h2>
            </div>
            <FAQSection />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-indigo-600 font-semibold">Contact Us</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Let&apos;s Build Something Amazing</h2>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-2xl animate-on-scroll">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
