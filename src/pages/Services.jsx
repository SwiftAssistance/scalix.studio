import { Link } from 'react-router-dom'
import { FaMagnifyingGlassChart, FaLaptopCode, FaHashtag, FaPalette, FaBullseye, FaPenFancy, FaRobot, FaArrowRight } from 'react-icons/fa6'
import SEO from '../components/SEO'
import ParticleHero from '../components/ParticleHero'
import useScrollAnimation from '../hooks/useScrollAnimation'

const services = [
  { icon: FaMagnifyingGlassChart, title: 'Search Engine Optimisation (SEO)', desc: 'Dominate Google search results in Berkshire. We deliver first-page rankings, increased organic traffic, and more qualified leads through proven local SEO strategies.', link: '/services/seo', img: '/seo-strategy-berkshire.webp', alt: 'SEO strategy analysis', color: 'from-indigo-500 to-blue-600', tag: 'Most Popular' },
  { icon: FaLaptopCode, title: 'Web Design & Development', desc: 'Beautiful, mobile-responsive websites built to convert visitors into customers. Custom designs from £299 with full SEO included as standard.', link: '/services/web-design', img: '/web-development-scalix.webp', alt: 'Responsive web design', color: 'from-violet-500 to-purple-600', tag: 'From £299' },
  { icon: FaHashtag, title: 'Social Media Marketing', desc: 'Build a thriving social media presence. We manage your Facebook, Instagram, and LinkedIn with engaging content, community management, and paid advertising.', link: '/services/social-media-marketing', img: '/social-media-marketing-agency.webp', alt: 'Social media marketing', color: 'from-pink-500 to-rose-600', tag: 'From £199/mo' },
  { icon: FaPalette, title: 'Branding & Creative', desc: 'Forge a memorable brand identity that connects with your audience. Logo design, brand guidelines, and visual identity that sets you apart from competitors.', link: '/services/branding', img: '/creative-branding-services.webp', alt: 'Brand identity design', color: 'from-amber-500 to-orange-600' },
  { icon: FaBullseye, title: 'PPC Advertising', desc: 'Get immediate leads with Google Ads and social media advertising. Precision-targeted campaigns that deliver an average 3x return on ad spend.', link: '/services/ppc-advertising', img: '/ppc-advertising-berkshire.webp', alt: 'PPC advertising dashboard', color: 'from-emerald-500 to-teal-600', tag: '3x Avg ROAS' },
  { icon: FaPenFancy, title: 'Content Strategy', desc: 'Attract and engage your audience with SEO-optimised blog posts, copywriting, and content marketing that builds authority and drives organic traffic.', link: '/services/content-strategy', img: '/content-strategy-agency.webp', alt: 'Content strategy planning', color: 'from-orange-500 to-red-600' },
  { icon: FaRobot, title: 'AI & Automation', desc: 'Streamline your business with AI chatbots, marketing automation, and workflow optimisation. Work smarter, save time, and scale faster.', link: '/services/ai-automation', img: '/ai-automation-solutions.webp', alt: 'AI automation solutions', color: 'from-cyan-500 to-blue-600', tag: 'New' },
]

const itemListData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Digital Marketing Services by Scalix Studios",
  "description": "Full-service digital marketing agency in Berkshire offering SEO, web design, social media, branding, PPC, content strategy, and AI automation.",
  "itemListElement": services.map((s, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": s.title,
    "url": `https://www.scalixstudios.co.uk${s.link}`
  }))
}

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.scalixstudios.co.uk" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.scalixstudios.co.uk/services" }
  ]
}

const structuredData = [itemListData, breadcrumbData]

export default function Services() {
  const scrollRef = useScrollAnimation()

  return (
    <>
      <SEO
        title="Digital Marketing Services Berkshire | SEO, Web Design & More | Scalix Studios"
        description="Full-service digital marketing agency in Berkshire. Expert SEO, web design, social media, branding, PPC, content strategy, and AI automation for local businesses in Windsor, Slough & Reading."
        keywords="digital marketing services berkshire, seo services windsor, web design slough, social media marketing berkshire, branding agency reading, ppc advertising berkshire, content marketing, ai automation"
        canonical="https://www.scalixstudios.co.uk/services"
        structuredData={structuredData}
      />

      <ParticleHero className="min-h-[70vh]">
        <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-blue-200 mb-6">7 Specialist Services</span>
        <h1 className="text-4xl md:text-7xl font-extrabold mb-4 text-white leading-tight">Our Digital Marketing<br /><span className="gradient-text-teal">Services</span></h1>
        <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto">A complete suite of digital solutions tailored to elevate your Berkshire business. Click any service to learn more.</p>
      </ParticleHero>

      <main ref={scrollRef}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="space-y-24">
              {services.map((s, i) => (
                <div key={i} className={`animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`} style={{ transitionDelay: `${i * 50}ms` }}>
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    {/* Browser frame */}
                    <div className="bg-slate-100 rounded-2xl p-3 border border-slate-200 shadow-lg group-hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-2 px-3 py-2 mb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                        <div className="flex-1 bg-slate-200 rounded-md h-4 ml-3" />
                      </div>
                      <img src={s.img} alt={s.alt} width="600" height="400" className="rounded-lg w-full object-cover" loading="lazy" />
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${s.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                        <s.icon className="text-xl" />
                      </div>
                      {s.tag && <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{s.tag}</span>}
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{s.title}</h2>
                    <p className="text-slate-600 mb-6 text-lg leading-relaxed">{s.desc}</p>
                    <Link to={s.link} className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-600 transition-colors hover:gap-3">
                      Learn More <FaArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden text-white">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #4c1d95, #1a202c)' }} />
          <div className="container mx-auto px-4 text-center relative z-10">
            <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-indigo-200 mb-6">Free Consultation</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-on-scroll">Not Sure Which Service You Need?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-slate-300 animate-on-scroll">Book a free consultation and we&apos;ll recommend the best strategy for your business goals and budget.</p>
            <div className="animate-on-scroll">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-indigo-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all hover:gap-3">Get Free Advice <FaArrowRight /></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
