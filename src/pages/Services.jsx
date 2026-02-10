import { Link } from 'react-router-dom'
import { FaMagnifyingGlassChart, FaLaptopCode, FaHashtag, FaPalette, FaBullseye, FaPenFancy, FaRobot, FaArrowRight } from 'react-icons/fa6'
import SEO from '../components/SEO'
import ParticleHero from '../components/ParticleHero'
import useScrollAnimation from '../hooks/useScrollAnimation'

const services = [
  { icon: FaMagnifyingGlassChart, title: 'Search Engine Optimisation (SEO)', desc: 'Dominate Google search results in Berkshire. We deliver first-page rankings, increased organic traffic, and more qualified leads through proven local SEO strategies.', link: '/services/seo', img: '/seo-strategy-berkshire.webp', alt: 'SEO strategy analysis' },
  { icon: FaLaptopCode, title: 'Web Design & Development', desc: 'Beautiful, mobile-responsive websites built to convert visitors into customers. Custom designs from £299 with full SEO included as standard.', link: '/services/web-design', img: '/web-development-scalix.webp', alt: 'Responsive web design' },
  { icon: FaHashtag, title: 'Social Media Marketing', desc: 'Build a thriving social media presence. We manage your Facebook, Instagram, and LinkedIn with engaging content, community management, and paid advertising.', link: '/services/social-media-marketing', img: '/social-media-marketing-agency.webp', alt: 'Social media marketing' },
  { icon: FaPalette, title: 'Branding & Creative', desc: 'Forge a memorable brand identity that connects with your audience. Logo design, brand guidelines, and visual identity that sets you apart from competitors.', link: '/services/branding', img: '/creative-branding-services.webp', alt: 'Brand identity design' },
  { icon: FaBullseye, title: 'PPC Advertising', desc: 'Get immediate leads with Google Ads and social media advertising. Precision-targeted campaigns that deliver an average 3x return on ad spend.', link: '/services/ppc-advertising', img: '/ppc-advertising-berkshire.webp', alt: 'PPC advertising dashboard' },
  { icon: FaPenFancy, title: 'Content Strategy', desc: 'Attract and engage your audience with SEO-optimised blog posts, copywriting, and content marketing that builds authority and drives organic traffic.', link: '/services/content-strategy', img: '/content-strategy-agency.webp', alt: 'Content strategy planning' },
  { icon: FaRobot, title: 'AI & Automation', desc: 'Streamline your business with AI chatbots, marketing automation, and workflow optimisation. Work smarter, save time, and scale faster.', link: '/services/ai-automation', img: '/ai-automation-solutions.webp', alt: 'AI automation solutions' },
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Digital Marketing Services by Scalix Studios",
  "itemListElement": services.map((s, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": s.title,
    "url": `https://www.scalixstudios.co.uk${s.link}`
  }))
}

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
        <h1 className="text-4xl md:text-7xl font-extrabold mb-4 text-white leading-tight">Our Digital Marketing Services</h1>
        <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto">A complete suite of digital solutions tailored to elevate your Berkshire business and accelerate growth. Click any service to learn more.</p>
      </ParticleHero>

      <main ref={scrollRef}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((s, i) => (
                <div key={i} className={`animate-on-scroll grid grid-cols-1 md:grid-cols-2 gap-12 items-center`} style={{ transitionDelay: `${i * 50}ms` }}>
                  {i % 2 === 1 ? (
                    <>
                      <div className="md:order-2">
                        <img src={s.img} alt={s.alt} className="rounded-lg shadow-xl w-full" loading="lazy" />
                      </div>
                      <div className="md:order-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                            <s.icon className="text-xl" />
                          </div>
                          <h2 className="text-3xl font-bold">{s.title}</h2>
                        </div>
                        <p className="text-slate-600 mb-6 text-lg">{s.desc}</p>
                        <Link to={s.link} className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors">
                          Learn More <FaArrowRight />
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <img src={s.img} alt={s.alt} className="rounded-lg shadow-xl w-full" loading="lazy" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                            <s.icon className="text-xl" />
                          </div>
                          <h2 className="text-3xl font-bold">{s.title}</h2>
                        </div>
                        <p className="text-slate-600 mb-6 text-lg">{s.desc}</p>
                        <Link to={s.link} className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors">
                          Learn More <FaArrowRight />
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden text-white">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #4c1d95, #1a202c)' }} />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-4 animate-on-scroll">Not Sure Which Service You Need?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto animate-on-scroll">Book a free consultation and we&apos;ll recommend the best strategy for your business goals and budget.</p>
            <div className="animate-on-scroll">
              <Link to="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-gray-200 transform hover:scale-105 transition-all">Get Free Advice</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
