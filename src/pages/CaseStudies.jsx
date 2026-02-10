import { FaCircleCheck, FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ParticleHero from '../components/ParticleHero'
import useScrollAnimation from '../hooks/useScrollAnimation'

const studies = [
  { tag: 'SEO & Web Design', title: 'Wisetax Accountants', desc: 'Wisetax needed a professional online presence to attract local clients in Slough. We built a clean, user-friendly website from the ground up, focusing on clear calls-to-action and expert content. Our targeted local SEO strategy ensured they ranked highly for key search terms, driving a significant increase in qualified leads.', results: ['First-page ranking for "accountants in Slough"','40% increase in new client consultations'], img: '/wisetax-logo.jpg', alt: 'Wisetax Accountants website on laptop', metric: 'Page 1 Google', color: 'from-indigo-500 to-blue-600' },
  { tag: 'Google Ads Campaign', title: 'Hampshire Fencing', desc: 'This client wanted immediate results. We launched a highly-targeted Google Ads campaign with a modest £200 ad spend. Within the first week, the campaign generated 3 high-quality leads, one of which converted into a significant sale, delivering an immediate return on investment.', results: ['3 qualified leads in the first 7 days','Achieved positive ROI within the first month'], img: '/ejm-logo.jpg', alt: 'Google Ads campaign report', metric: '3 leads in 7 days', color: 'from-emerald-500 to-teal-600' },
  { tag: 'Full Rebranding', title: 'Pave & Turf', desc: "Pave & Turf needed a complete brand overhaul to reflect the quality of their work. We designed a modern logo, built a stunning new website to showcase their portfolio, and launched their social media presence. This cohesive new brand has elevated their position in the market and attracted larger, more profitable projects.", results: ['Complete brand identity design','Established a strong social media presence'], img: '/rvs-logo.jpg', alt: 'Pave & Turf rebranding materials', metric: 'Full rebrand', color: 'from-amber-500 to-orange-600' },
  { tag: 'SEO & Google Presence', title: 'HM Clinic', desc: "HM Clinic required a website that was not only professional but also highly visible to local patients. We developed an SEO-optimised website and fully set up their Google Business Profile. This strategy significantly improved their local search ranking, making it easier for new patients to find and book appointments.", results: ['Top 3 ranking on Google Maps for local searches','25% increase in online appointment bookings'], img: '/scalix_logo.webp', alt: 'HM Clinic website on tablet', metric: 'Top 3 Maps', color: 'from-violet-500 to-purple-600' },
]

const caseStudyStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Case Studies | Scalix Studios",
  "description": "Explore our case studies to see how Scalix Studios delivers real results for businesses in Berkshire with web design, SEO, and Google Ads.",
  "url": "https://www.scalixstudios.co.uk/case-studies",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": studies.map((s, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": `${s.title} – ${s.tag}`,
      "description": s.desc
    }))
  }
}

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.scalixstudios.co.uk" },
    { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.scalixstudios.co.uk/case-studies" }
  ]
}

export default function CaseStudies() {
  const scrollRef = useScrollAnimation()

  return (
    <>
      <SEO
        title="Case Studies | Scalix Studios | Proven Results in Berkshire"
        description="Explore our case studies to see how Scalix Studios delivers real results for businesses in Berkshire with web design, SEO, and Google Ads."
        keywords="web design case studies, seo results berkshire, digital marketing portfolio, scalix studios, windsor web design, slough seo agency"
        canonical="https://www.scalixstudios.co.uk/case-studies"
        structuredData={[caseStudyStructuredData, breadcrumbData]}
      />

      <ParticleHero className="min-h-[70vh]">
        <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-blue-200 mb-6">Client Success Stories</span>
        <h1 className="text-4xl md:text-7xl font-extrabold mb-4 text-white leading-tight">Our Proven <span className="gradient-text-teal">Results</span></h1>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">We&apos;re passionate about helping local businesses succeed. Here&apos;s a look at what we&apos;ve achieved for our clients across Berkshire.</p>
      </ParticleHero>

      <main ref={scrollRef}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl space-y-24">
            {studies.map((s, i) => (
              <div key={i} className={`animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  {/* Image with browser frame */}
                  <div className="relative">
                    <div className="bg-slate-100 rounded-2xl p-3 border border-slate-200 shadow-lg">
                      <div className="flex items-center gap-2 px-3 py-2 mb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                        <div className="flex-1 bg-slate-200 rounded-md h-4 ml-3" />
                      </div>
                      <div className="bg-white rounded-lg p-8 flex items-center justify-center min-h-[280px]">
                        <img src={s.img} alt={s.alt} width="400" height="192" className="max-h-48 max-w-full object-contain" loading="lazy" />
                      </div>
                    </div>
                    {/* Floating metric badge */}
                    <div className={`absolute -bottom-4 ${i % 2 === 1 ? 'left-4' : 'right-4'} bg-gradient-to-r ${s.color} text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg`}>
                      {s.metric}
                    </div>
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="inline-block text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-3">{s.tag}</span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{s.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{s.desc}</p>
                  <div className="space-y-3">
                    <p className="text-sm font-bold text-slate-900 uppercase tracking-wide">Key Results</p>
                    {s.results.map((r, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <FaCircleCheck className="text-indigo-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden text-white">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #4c1d95, #1a202c)' }} />
          <div className="container mx-auto px-4 text-center relative z-10">
            <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-indigo-200 mb-6">Your Turn</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-on-scroll">Ready to Be Our Next Success Story?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-slate-300 animate-on-scroll">Let&apos;s discuss how our services can help you achieve your goals in the Berkshire market.</p>
            <div className="animate-on-scroll">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-indigo-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all hover:gap-3">Get a Free Quote <FaArrowRight /></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
