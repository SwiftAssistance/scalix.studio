import { FaCircleCheck } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ParticleHero from '../components/ParticleHero'
import useScrollAnimation from '../hooks/useScrollAnimation'

const studies = [
  { tag: 'SEO & Web Design', title: 'Wisetax Accountants', desc: 'Wisetax needed a professional online presence to attract local clients in Slough. We built a clean, user-friendly website from the ground up, focusing on clear calls-to-action and expert content. Our targeted local SEO strategy ensured they ranked highly for key search terms, driving a significant increase in qualified leads.', results: ['First-page ranking for "accountants in Slough"','40% increase in new client consultations'], img: '/wisetax-logo.jpg', alt: 'Wisetax Accountants website on laptop' },
  { tag: 'Google Ads Campaign', title: 'Hampshire Fencing', desc: 'This client wanted immediate results. We launched a highly-targeted Google Ads campaign with a modest £200 ad spend. Within the first week, the campaign generated 3 high-quality leads, one of which converted into a significant sale, delivering an immediate return on investment.', results: ['3 qualified leads in the first 7 days','Achieved positive ROI within the first month'], img: '/ejm-logo.jpg', alt: 'Google Ads campaign report', reverse: true },
  { tag: 'Full Rebranding', title: 'Pave & Turf', desc: "Pave & Turf needed a complete brand overhaul to reflect the quality of their work. We designed a modern logo, built a stunning new website to showcase their portfolio, and launched their social media presence. This cohesive new brand has elevated their position in the market and attracted larger, more profitable projects.", results: ['Complete brand identity design','Established a strong social media presence'], img: '/rvs-logo.jpg', alt: 'Pave & Turf rebranding materials' },
  { tag: 'SEO & Google Presence', title: 'HM Clinic', desc: "HM Clinic required a website that was not only professional but also highly visible to local patients. We developed an SEO-optimised website and fully set up their Google Business Profile. This strategy significantly improved their local search ranking, making it easier for new patients to find and book appointments.", results: ['Top 3 ranking on Google Maps for local searches','25% increase in online appointment bookings'], img: '/scalix_logo.webp', alt: 'HM Clinic website on tablet', reverse: true },
]

export default function CaseStudies() {
  const scrollRef = useScrollAnimation()

  return (
    <>
      <SEO
        title="Case Studies | Scalix Studios | Proven Results in Berkshire"
        description="Explore our case studies to see how Scalix Studios delivers real results for businesses in Berkshire with web design, SEO, and Google Ads."
        keywords="web design case studies, seo results berkshire, digital marketing portfolio, scalix studios, windsor web design, slough seo agency"
        canonical="https://www.scalixstudios.co.uk/case-studies"
      />

      <ParticleHero className="min-h-[70vh]">
        <h1 className="text-4xl md:text-7xl font-extrabold mb-4 text-white leading-tight">Our Proven Results</h1>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">We&apos;re passionate about helping local businesses succeed. Here&apos;s a look at some of the results we&apos;ve achieved for our clients across Berkshire.</p>
      </ParticleHero>

      <main ref={scrollRef}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 space-y-20">
            {studies.map((s, i) => (
              <div key={i} className="animate-on-scroll grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {s.reverse ? (
                  <>
                    <div className="md:order-2"><img src={s.img} alt={s.alt} className="rounded-lg shadow-xl" loading="lazy" /></div>
                    <div className="md:order-1">
                      <span className="text-indigo-600 font-semibold text-sm">{s.tag}</span>
                      <h2 className="text-3xl font-bold my-2">{s.title}</h2>
                      <p className="text-slate-600 mb-6">{s.desc}</p>
                      <ul className="space-y-3 text-slate-600">
                        {s.results.map((r, j) => <li key={j} className="flex items-start"><FaCircleCheck className="text-indigo-500 mt-1 mr-3 flex-shrink-0" /><span>{r}</span></li>)}
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <img src={s.img} alt={s.alt} className="rounded-lg shadow-xl" loading="lazy" />
                    <div>
                      <span className="text-indigo-600 font-semibold text-sm">{s.tag}</span>
                      <h2 className="text-3xl font-bold my-2">{s.title}</h2>
                      <p className="text-slate-600 mb-6">{s.desc}</p>
                      <ul className="space-y-3 text-slate-600">
                        {s.results.map((r, j) => <li key={j} className="flex items-start"><FaCircleCheck className="text-indigo-500 mt-1 mr-3 flex-shrink-0" /><span>{r}</span></li>)}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden text-white">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #4c1d95, #1a202c)' }} />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-4 animate-on-scroll">Ready to Be Our Next Success Story?</h2>
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
