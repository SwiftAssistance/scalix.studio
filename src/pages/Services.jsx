import { FaCircleCheck } from 'react-icons/fa6'
import SEO from '../components/SEO'
import ParticleHero from '../components/ParticleHero'
import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'

const services = [
  { title: 'Search Engine Optimization (SEO)', desc: 'Improve your online visibility and dominate search rankings with our comprehensive SEO strategies. We go beyond keywords to build a strong, authority-driven digital presence that attracts customers in Berkshire.', features: ['On-Page & Off-Page SEO','Technical SEO Audits','Local SEO for Windsor & Slough','Keyword Research & Strategy'], img: '/seo-strategy-berkshire.webp', alt: 'SEO analysis on computer screen' },
  { title: 'Web Development & Design', desc: 'Your website is your digital storefront. We build beautiful, responsive, and high-performing websites that captivate your audience and grow your business.', features: ['Custom Website Design','E-commerce Solutions','Mobile-First Responsive Design','Content Management Systems (CMS)'], img: '/web-development-scalix.webp', alt: 'Responsive website on devices', reverse: true },
  { title: 'Social Media Marketing', desc: 'Build a thriving online community and engage your target audience with strategic social media campaigns that resonate and convert.', features: ['Social Media Strategy','Engaging Content Creation','Community Management','Paid Social Advertising'], img: '/social-media-marketing-agency.webp', alt: 'Social media icons on smartphone' },
  { title: 'Branding & Creative', desc: 'Forge a memorable brand identity that connects with your audience and stands out from the competition in the Thames Valley market.', features: ['Logo & Visual Identity','Brand Guidelines','Copywriting & Tone of Voice','Graphic Design Services'], img: '/creative-branding-services.webp', alt: 'Branded materials collection', reverse: true },
  { title: 'PPC Advertising', desc: 'Drive immediate, targeted traffic to your website and generate leads with precision-targeted Pay-Per-Click advertising campaigns on Google and social media.', features: ['Google Ads Management','Social Media Ads','Landing Page Optimization','Performance Analytics'], img: '/ppc-advertising-berkshire.webp', alt: 'Google Ads dashboard' },
  { title: 'Content Strategy', desc: 'Engage and attract your target audience by delivering valuable, relevant, and consistent content that builds trust and drives action across all platforms.', features: ['Content Audits','Editorial Calendars','Blog & Article Writing','Video & Motion Graphics'], img: '/content-strategy-agency.webp', alt: 'Person planning content', reverse: true },
  { title: 'AI & Automation', desc: 'Leverage the power of artificial intelligence to streamline your marketing efforts, enhance customer interactions, and unlock data-driven insights.', features: ['Chatbot Integration','Marketing Automation','Predictive Analytics','Personalized Content Delivery'], img: '/ai-automation-solutions.webp', alt: 'AI brain with circuits' },
]

const faqData = [
  { q: 'How long does a website project take?', a: "A typical website build takes 4-6 weeks from start to finish, depending on the complexity and scope of the project. We'll provide a detailed timeline after our initial discovery call." },
  { q: 'How much does a new website cost?', a: 'Our pricing varies based on your specific needs. Our starter packages begin at £299. Check out our pricing page for more details, or contact us for a custom quote.' },
  { q: 'Do you provide ongoing support?', a: 'Yes! We offer ongoing website maintenance and SEO packages to ensure your site remains secure, up-to-date, and continues to rank well in search engines.' },
]

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
}

export default function Services() {
  const scrollRef = useScrollAnimation()

  return (
    <>
      <SEO
        title="Our Services | Scalix Studios | Web Design & SEO in Berkshire"
        description="Explore our expert web design, SEO, and digital marketing services. We help local businesses in Berkshire, Windsor, and the Thames Valley thrive online."
        keywords="digital marketing services, SEO berkshire, web design berkshire, social media marketing, branding services, scalix studios, content marketing, PPC, AI solutions"
        canonical="https://www.scalixstudios.co.uk/services"
        structuredData={faqStructuredData}
      />

      <ParticleHero className="min-h-[70vh]">
        <h1 className="text-4xl md:text-7xl font-extrabold mb-4 text-white leading-tight">Our Digital Marketing Services</h1>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">A complete suite of digital solutions, tailored to elevate your Berkshire business and accelerate its growth.</p>
      </ParticleHero>

      <main ref={scrollRef}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 space-y-20">
            {services.map((s, i) => (
              <div key={i} className={`animate-on-scroll grid grid-cols-1 md:grid-cols-2 gap-12 items-center`} style={{ transitionDelay: `${i * 50}ms` }}>
                {s.reverse ? (
                  <>
                    <div className="md:order-2"><img src={s.img} alt={s.alt} className="rounded-lg shadow-xl" loading="lazy" /></div>
                    <div className="md:order-1">
                      <h2 className="text-3xl font-bold mb-4">{s.title}</h2>
                      <p className="text-slate-600 mb-6">{s.desc}</p>
                      <ul className="space-y-3 text-slate-600">
                        {s.features.map((f, j) => <li key={j} className="flex items-start"><FaCircleCheck className="text-indigo-500 mt-1 mr-3 flex-shrink-0" /><span>{f}</span></li>)}
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <img src={s.img} alt={s.alt} className="rounded-lg shadow-xl" loading="lazy" />
                    <div>
                      <h2 className="text-3xl font-bold mb-4">{s.title}</h2>
                      <p className="text-slate-600 mb-6">{s.desc}</p>
                      <ul className="space-y-3 text-slate-600">
                        {s.features.map((f, j) => <li key={j} className="flex items-start"><FaCircleCheck className="text-indigo-500 mt-1 mr-3 flex-shrink-0" /><span>{f}</span></li>)}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-on-scroll">
              <span className="text-indigo-600 font-semibold">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqData.map((faq, i) => (
                <details key={i} className="bg-white p-6 rounded-lg shadow-sm animate-on-scroll group" style={{ transitionDelay: `${i*100}ms` }}>
                  <summary className="font-semibold text-lg flex justify-between items-center cursor-pointer list-none">
                    {faq.q}
                    <span className="text-indigo-500 transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-slate-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden text-white">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #4c1d95, #1a202c)' }} />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-4 animate-on-scroll">Ready to Grow Your Business?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto animate-on-scroll">Let&apos;s discuss how our services can help you achieve your goals in the Berkshire market.</p>
            <div className="animate-on-scroll">
              <Link to="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-gray-200 transform hover:scale-105 transition-all">Get a Free Quote</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
