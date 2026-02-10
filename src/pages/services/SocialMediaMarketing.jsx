import { Link } from 'react-router-dom'
import { FaCircleCheck, FaHashtag, FaCamera, FaBullhorn, FaUsers, FaCalendarDays } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import ParticleHero from '../../components/ParticleHero'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import ContactForm from '../../components/ContactForm'

const features = [
  { icon: FaCalendarDays, title: 'Social Media Strategy', desc: 'We develop a tailored content strategy aligned with your business goals, target audience, and brand voice to maximise engagement and reach across platforms.' },
  { icon: FaCamera, title: 'Content Creation', desc: 'Eye-catching graphics, engaging captions, and scroll-stopping content designed to build your brand presence and drive meaningful interactions with your audience.' },
  { icon: FaUsers, title: 'Community Management', desc: 'We manage your social channels daily — responding to comments, engaging with followers, and building a loyal community around your brand.' },
  { icon: FaBullhorn, title: 'Paid Social Advertising', desc: 'Targeted ad campaigns on Facebook, Instagram, and LinkedIn that put your business in front of the right people at the right time.' },
  { icon: FaHashtag, title: 'Platform Management', desc: 'We handle Facebook, Instagram, LinkedIn, and TikTok so you can focus on running your business. Consistent posting, optimised profiles, and growth-focused tactics.' },
]

const results = [
  { stat: '200%', label: 'Average engagement increase' },
  { stat: '2+', label: 'Platforms managed per client' },
  { stat: '30', label: 'Posts per month included' },
]

const faqs = [
  { q: 'Which social media platforms should my business be on?', a: 'It depends on your target audience. For most local Berkshire businesses, Facebook and Instagram are essential. LinkedIn is ideal for B2B services, while TikTok can be powerful for reaching younger demographics. We help you identify the right platforms during our strategy session.' },
  { q: 'How often will you post on my social media?', a: 'Our standard packages include regular posting schedules tailored to each platform — typically 3-5 posts per week. Consistency is key to growing your audience and staying top of mind with your customers.' },
  { q: 'Can you run Facebook and Instagram ads for my business?', a: 'Yes, paid social advertising is one of our core services. We create, manage, and optimise ad campaigns on Facebook and Instagram to generate leads, drive website traffic, or increase brand awareness — all within your budget.' },
  { q: 'How do you measure social media success?', a: 'We track key metrics including reach, engagement rate, follower growth, website clicks, and conversions. You receive a monthly report with clear insights into what is working and how we are improving your social presence.' },
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Social Media Marketing Services in Berkshire",
  "provider": { "@type": "ProfessionalService", "name": "Scalix Studios", "url": "https://www.scalixstudios.co.uk" },
  "areaServed": { "@type": "Place", "name": "Berkshire, UK" },
  "description": "Professional social media marketing for Berkshire businesses. Content creation, community management, and paid advertising across all major platforms.",
  "url": "https://www.scalixstudios.co.uk/services/social-media-marketing"
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
}

export default function SocialMediaMarketing() {
  const scrollRef = useScrollAnimation()

  return (
    <>
      <SEO
        title="Social Media Marketing Berkshire | Social Media Agency Windsor | Scalix Studios"
        description="Social media marketing services for businesses in Berkshire. We manage Facebook, Instagram & LinkedIn to grow your audience, boost engagement, and drive leads. From £199/month."
        keywords="social media marketing berkshire, social media agency windsor, facebook marketing slough, instagram marketing berkshire, social media management reading, social media advertising berkshire"
        canonical="https://www.scalixstudios.co.uk/services/social-media-marketing"
        structuredData={[structuredData, faqStructuredData]}
      />

      <ParticleHero className="py-20 md:py-32">
        <nav aria-label="Breadcrumb" className="text-blue-200 text-sm mb-4">
          <Link to="/" className="hover:text-white">Home</Link> / <Link to="/services" className="hover:text-white">Services</Link> / <span className="text-white">Social Media Marketing</span>
        </nav>
        <h1 className="text-4xl md:text-7xl font-extrabold mb-4 text-white leading-tight">Social Media Marketing in Berkshire</h1>
        <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto">Build a powerful social presence that turns followers into customers. Strategic content, community management, and paid ads that deliver results.</p>
      </ParticleHero>

      <main ref={scrollRef}>
        <section className="py-12 bg-indigo-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {results.map((r, i) => (
                <div key={i} className="animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                  <p className="text-5xl font-extrabold">{r.stat}</p>
                  <p className="text-indigo-100 mt-2">{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-semibold">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Our Social Media Services</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4 animate-on-scroll">Everything you need to build and grow a thriving social media presence.</p>
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
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Social Media Questions Answered</h2>
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
                <h2 className="text-4xl font-bold mb-4">Ready to Grow Your Social Presence?</h2>
                <p className="text-slate-600 mb-6">Let us handle your social media so you can focus on what you do best — running your business.</p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />From £199/month</li>
                  <li className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />Content creation included</li>
                  <li className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />Monthly performance reports</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-xl animate-on-scroll">
                <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
                <ContactForm variant="standalone" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
