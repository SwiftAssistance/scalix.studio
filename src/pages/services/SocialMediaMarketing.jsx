import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaLinkedin, FaArrowRight } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import ServiceHero from '../../components/ServiceHero'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const faqs = [
  { q: 'Which platforms should I be on?', a: 'For most Berkshire businesses, Facebook and Instagram are essential. LinkedIn for B2B. We help you pick the right ones.' },
  { q: 'How often will you post?', a: '3-5 posts per week per platform. Consistency is key to growing your audience.' },
  { q: 'Can you run paid ads?', a: 'Yes! We create, manage, and optimise campaigns on Facebook, Instagram, and LinkedIn within your budget.' },
  { q: 'How do you measure success?', a: 'Reach, engagement, follower growth, website clicks, and conversions. Clear monthly reports.' },
]

const structuredData = { "@context": "https://schema.org", "@type": "Service", "name": "Social Media Marketing in Berkshire", "description": "Social media marketing for Berkshire businesses. We manage Facebook, Instagram & LinkedIn. From £199/month.", "provider": { "@type": "ProfessionalService", "name": "Scalix Studios", "url": "https://www.scalixstudios.co.uk", "@id": "https://www.scalixstudios.co.uk/#localbusiness" }, "areaServed": [{ "@type": "Place", "name": "Berkshire, UK" }, { "@type": "Place", "name": "Windsor" }, { "@type": "Place", "name": "Slough" }, { "@type": "Place", "name": "Reading" }], "url": "https://www.scalixstudios.co.uk/services/social-media-marketing", "serviceType": "Social Media Marketing", "offers": { "@type": "Offer", "priceCurrency": "GBP", "price": "199", "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "GBP", "price": "199", "unitText": "per month starting from" } } }
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }
const breadcrumbData = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.scalixstudios.co.uk" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.scalixstudios.co.uk/services" }, { "@type": "ListItem", "position": 3, "name": "Social Media Marketing", "item": "https://www.scalixstudios.co.uk/services/social-media-marketing" }] }

export default function SocialMediaMarketing() {
  const scrollRef = useScrollAnimation()
  return (
    <>
      <SEO title="Social Media Marketing Berkshire | Social Media Agency Windsor | Scalix Studios" description="Social media marketing for Berkshire businesses. We manage Facebook, Instagram & LinkedIn with strategic content, paid ads, and community management. Plans from £199/month." keywords="social media marketing berkshire, social media agency windsor, facebook marketing slough, instagram marketing berkshire, linkedin marketing" canonical="https://www.scalixstudios.co.uk/services/social-media-marketing" structuredData={[structuredData, faqStructuredData, breadcrumbData]} />

      <ServiceHero breadcrumb="Social Media" badge="Social Media Marketing" title="Social Media That" highlight="Actually Works" highlightClass="gradient-text-warm" description="Turn followers into customers with strategic content and paid ads across every platform." cta="Get Started" image="/social-media-marketing-agency.webp" imageAlt="Social media marketing campaigns" />

      <main ref={scrollRef}>
        <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-on-scroll">
              <div>
                <div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white"><FaInstagram className="text-2xl" /></div><h2 className="text-3xl font-bold">Instagram</h2></div>
                <p className="text-slate-600 leading-relaxed mb-4">Scroll-stopping Reels, Stories, and posts that build brand awareness and drive engagement. We handle content creation, hashtag strategy, and community management.</p>
                <p className="text-sm text-purple-600 font-semibold">Best for: Visual brands, retail, food & drink, lifestyle</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3"><div className="w-8 h-8 bg-purple-100 rounded-full" /><div><div className="h-3 w-24 bg-slate-200 rounded" /><div className="h-2 w-16 bg-slate-100 rounded mt-1" /></div></div>
                <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg h-48 mb-3" />
                <div className="flex gap-4 text-slate-500 text-sm"><span>&#9825; 247</span><span>&#9993; 18</span><span>&#8631; 12</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-on-scroll">
              <div className="md:order-2">
                <div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white"><FaFacebook className="text-2xl" /></div><h2 className="text-3xl font-bold">Facebook</h2></div>
                <p className="text-slate-600 leading-relaxed mb-4">Targeted campaigns that reach your ideal local customer. We manage your page, run ads, and build a community around your brand in Berkshire.</p>
                <p className="text-sm text-blue-600 font-semibold">Best for: Local businesses, services, events, lead generation</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm md:order-1">
                <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg inline-block mb-3">Sponsored</div>
                <div className="bg-gradient-to-br from-blue-100 to-slate-100 rounded-lg h-40 mb-3" />
                <div className="h-3 w-3/4 bg-slate-200 rounded mb-2" />
                <div className="h-3 w-1/2 bg-slate-100 rounded" />
                <div className="mt-4 flex gap-3"><span className="bg-blue-600 text-white text-xs px-4 py-2 rounded-lg">Learn More</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-on-scroll">
              <div>
                <div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 bg-sky-700 rounded-xl flex items-center justify-center text-white"><FaLinkedin className="text-2xl" /></div><h2 className="text-3xl font-bold">LinkedIn</h2></div>
                <p className="text-slate-300 leading-relaxed mb-4">Position your business as a thought leader. We create professional content, grow your network, and generate B2B leads through organic and paid strategies.</p>
                <p className="text-sm text-sky-400 font-semibold">Best for: B2B, professional services, recruitment, consultancy</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 bg-sky-800 rounded-full" /><div><div className="h-3 w-28 bg-white/20 rounded" /><div className="h-2 w-20 bg-white/10 rounded mt-1" /></div></div>
                <div className="h-3 w-full bg-white/10 rounded mb-2" />
                <div className="h-3 w-full bg-white/10 rounded mb-2" />
                <div className="h-3 w-3/4 bg-white/10 rounded mb-4" />
                <div className="flex gap-4 text-white/30 text-sm"><span>&#128077; 64</span><span>&#128172; 8</span><span>&#8631; 5</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 flex flex-wrap justify-center gap-16 text-center">
            {[{ n: '200%', l: 'Engagement increase' }, { n: '30+', l: 'Posts per month' }, { n: '£199', l: 'Starting price' }].map((s, i) => (<div key={i}><span className="text-4xl font-extrabold">{s.n}</span><span className="block text-purple-100 text-sm mt-1">{s.l}</span></div>))}
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 animate-on-scroll">Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-purple-50 rounded-xl p-6 animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                  <h3 className="font-bold mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-8 text-center animate-on-scroll">Works even better with</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'Content Strategy', desc: 'Fuel your social channels with strategic content.', link: '/services/content-strategy' },
                { title: 'Branding', desc: 'A consistent brand identity across all platforms.', link: '/services/branding' },
                { title: 'PPC Advertising', desc: 'Amplify your best posts with paid ads.', link: '/services/ppc-advertising' },
              ].map((s, i) => (
                <Link key={i} to={s.link} className="bg-white rounded-xl p-6 border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                  <h3 className="font-bold mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-600">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)' }}>
          <div className="container mx-auto px-4 text-center text-white animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to blow up your socials?</h2>
            <p className="text-white/70 mb-8">Let us handle it so you can focus on running your business.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 hover:text-purple-900 transition-all hover:gap-3">Let&apos;s Talk <FaArrowRight /></Link>
          </div>
        </section>
      </main>
    </>
  )
}
