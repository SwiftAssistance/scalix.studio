import { Link } from 'react-router-dom'
import { FaCircleCheck, FaPenFancy, FaVideo, FaCalendarCheck, FaClipboardList, FaBlog } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import ParticleHero from '../../components/ParticleHero'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import ContactForm from '../../components/ContactForm'

const features = [
  { icon: FaClipboardList, title: 'Content Audits', desc: 'We analyse your existing content to identify what is working, what is not, and where the biggest opportunities lie for improvement and new content creation.' },
  { icon: FaCalendarCheck, title: 'Editorial Calendars', desc: 'A structured content plan aligned with your business goals, seasonal trends, and keyword targets. Never wonder what to post again.' },
  { icon: FaBlog, title: 'Blog & Article Writing', desc: 'SEO-optimised blog posts and articles that establish your authority, attract organic traffic, and answer the questions your customers are searching for.' },
  { icon: FaPenFancy, title: 'Copywriting', desc: 'Compelling website copy, email campaigns, and marketing materials that speak directly to your audience and drive them to take action.' },
  { icon: FaVideo, title: 'Video & Visual Content', desc: 'Short-form video content, infographics, and visual assets designed to boost engagement across social media and your website.' },
]

const faqs = [
  { q: 'Why does my business need a content strategy?', a: 'Content is the foundation of modern digital marketing. It drives SEO rankings, fuels social media, builds trust with potential customers, and establishes your authority in your industry. Without a strategy, content efforts are scattered and ineffective.' },
  { q: 'How often should I publish new content?', a: 'For most Berkshire businesses, we recommend 2-4 blog posts per month as a strong foundation. The key is consistency and quality over quantity. Each piece should be strategically targeted to keywords your audience is searching for.' },
  { q: 'Do you write the content for us?', a: 'Yes, our team of experienced copywriters handles all content creation. We research your industry, interview you for expertise, and produce polished, SEO-optimised content that sounds like you and resonates with your audience.' },
  { q: 'How does content marketing help with SEO?', a: 'Every piece of quality content is a new opportunity to rank on Google. Blog posts target long-tail keywords, attract backlinks, and demonstrate expertise to search engines. Businesses that blog consistently get 55% more website visitors on average.' },
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Content Strategy Services in Berkshire",
  "provider": { "@type": "ProfessionalService", "name": "Scalix Studios", "url": "https://www.scalixstudios.co.uk" },
  "areaServed": { "@type": "Place", "name": "Berkshire, UK" },
  "description": "Professional content strategy and copywriting services for businesses in Berkshire. Blog writing, content audits, and editorial planning that drives traffic and builds authority.",
  "url": "https://www.scalixstudios.co.uk/services/content-strategy"
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
}

export default function ContentStrategy() {
  const scrollRef = useScrollAnimation()

  return (
    <>
      <SEO
        title="Content Strategy Berkshire | Copywriting & Blog Writing | Scalix Studios"
        description="Professional content strategy and copywriting for Berkshire businesses. SEO blog writing, content audits, and editorial planning that drives organic traffic and builds authority."
        keywords="content strategy berkshire, copywriting services windsor, blog writing berkshire, content marketing slough, seo copywriting, content creation agency berkshire"
        canonical="https://www.scalixstudios.co.uk/services/content-strategy"
        structuredData={[structuredData, faqStructuredData]}
      />

      <ParticleHero className="py-20 md:py-32">
        <nav aria-label="Breadcrumb" className="text-blue-200 text-sm mb-4">
          <Link to="/" className="hover:text-white">Home</Link> / <Link to="/services" className="hover:text-white">Services</Link> / <span className="text-white">Content Strategy</span>
        </nav>
        <h1 className="text-4xl md:text-7xl font-extrabold mb-4 text-white leading-tight">Content Strategy in Berkshire</h1>
        <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto">Strategic content that attracts, engages, and converts. We help Berkshire businesses build authority and drive traffic through powerful storytelling.</p>
      </ParticleHero>

      <main ref={scrollRef}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-semibold">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Our Content Services</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4 animate-on-scroll">Content that works as hard as you do — driving traffic, building trust, and generating leads.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((f, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-8 animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="bg-indigo-100 text-indigo-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                    <f.icon className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-slate-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-semibold">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Content Questions Answered</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-slate-50 p-6 rounded-lg animate-on-scroll group" style={{ transitionDelay: `${i * 80}ms` }}>
                  <summary className="font-semibold text-lg flex justify-between items-center cursor-pointer list-none">
                    {faq.q}
                    <span className="text-indigo-500 transition-transform duration-300 group-open:rotate-45 text-xl">+</span>
                  </summary>
                  <p className="mt-4 text-slate-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="animate-on-scroll">
                <h2 className="text-4xl font-bold mb-4">Let&apos;s Create Content That Converts</h2>
                <p className="text-slate-600 mb-6">Get a free content audit and discover how strategic content can drive more traffic and leads for your business.</p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />Free content audit</li>
                  <li className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />SEO-optimised writing</li>
                  <li className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />Monthly content reporting</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-xl animate-on-scroll">
                <h3 className="text-2xl font-bold mb-6">Get Your Free Content Audit</h3>
                <ContactForm variant="standalone" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
