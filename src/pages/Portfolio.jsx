import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import SEO from '../components/SEO'
import ParticleHero from '../components/ParticleHero'

const projects = [
  { id: 'wisetax', tag: 'Web Development & SEO', title: 'Wisetax Accountants', desc: 'We developed a new, professional website and implemented a robust SEO strategy to generate qualified local leads for this modern accounting firm.', img: '/wisetax-logo.jpg', alt: 'Wisetax Accountants website', challenge: "Wisetax had low organic visibility on Google and no consistent online lead generation funnel, causing them to miss out on their target market of local small businesses.", solution: 'We built a fast, mobile-friendly website and launched a targeted Google SEO campaign. This included comprehensive keyword research, on-page optimization for terms like "accountant in Berkshire," and creating a blog with valuable tax tips to build authority.', results: 'Within 3 months, Wisetax achieved a page 1 ranking for 5 key search terms and saw a 45% increase in organic traffic.' },
  { id: 'ejm', tag: 'Rebranding', title: 'EJM Pave & Turf', desc: 'A complete brand overhaul to position a traditional landscaping company as a modern, premium service provider, attracting high-value residential and commercial clients.', img: '/ejm-logo.jpg', alt: 'EJM Pave & Turf branding', reverse: true, challenge: "EJM's existing brand felt dated and didn't reflect the high quality of their work, making it difficult to attract high-value residential and commercial clients.", solution: 'We developed a sophisticated new brand identity, including a new logo, color palette, and typography. This was rolled out across new business cards, vehicle livery, and a digital style guide to ensure consistency.', results: 'The rebrand led to a 30% increase in quote requests and helped EJM secure larger, more profitable commercial contracts.' },
  { id: 'rvs', tag: 'Web Development & SEO', title: 'RVS Bespoke', desc: 'Creating a high-end digital presence for a luxury bespoke furniture maker and using SEO to attract a high-net-worth clientele.', img: '/rvs-logo.jpg', alt: 'RVS Bespoke website', challenge: "RVS Bespoke's craftsmanship was world-class, but their online presence didn't reflect this quality. They needed a website that conveyed luxury and ranked for niche, high-value keywords.", solution: 'We designed an elegant, image-rich website with a focus on visual storytelling. The SEO strategy targeted long-tail keywords like "bespoke oak furniture Berkshire," positioning RVS as the premier local choice for custom woodwork.', results: 'The new site led to a 60% increase in high-quality inquiries and successfully attracted two major commercial projects within the first six months.' },
]

function Modal({ project, onClose }) {
  if (!project) return null
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-[70] p-4" onClick={onClose}>
      <div className="bg-white rounded-xl max-w-3xl w-full shadow-lg relative max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl z-10" onClick={onClose} aria-label="Close"><FaTimes /></button>
        <img src={project.img} alt={project.alt} width="768" height="256" className="w-full h-64 object-cover rounded-t-xl" />
        <div className="p-8">
          <h3 className="text-3xl font-bold mb-2 text-indigo-700">{project.title}: {project.tag}</h3>
          <p className="text-gray-600 mb-6">{project.desc}</p>
          <div className="space-y-6">
            <div><h4 className="text-xl font-semibold text-gray-800 mb-2">The Challenge</h4><p className="text-gray-700">{project.challenge}</p></div>
            <div><h4 className="text-xl font-semibold text-gray-800 mb-2">Our Solution</h4><p className="text-gray-700">{project.solution}</p></div>
            <div><h4 className="text-xl font-semibold text-gray-800 mb-2">The Results</h4><p className="text-gray-700">{project.results}</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}

const portfolioStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Portfolio | Scalix Studios",
  "description": "Explore the portfolio of Scalix Studios. See our case studies in SEO, web development, and branding for businesses in Berkshire and beyond.",
  "url": "https://www.scalixstudios.co.uk/portfolio",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": projects.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": `${p.title} – ${p.tag}`,
      "description": p.desc
    }))
  }
}

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.scalixstudios.co.uk" },
    { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://www.scalixstudios.co.uk/portfolio" }
  ]
}

export default function Portfolio() {
  const [activeModal, setActiveModal] = useState(null)

  return (
    <>
      <SEO
        title="Portfolio | Scalix Studios | Our Work in Berkshire"
        description="Explore the portfolio of Scalix Studios. See our case studies in SEO, web development, and branding for businesses in Berkshire and beyond."
        keywords="digital agency portfolio, branding case study, seo results, web design examples, scalix studios work"
        canonical="https://www.scalixstudios.co.uk/portfolio"
        structuredData={[portfolioStructuredData, breadcrumbData]}
      />

      <ParticleHero className="min-h-[80vh]">
        <h1 className="text-4xl md:text-7xl font-extrabold mb-4 text-white leading-tight">Our Work</h1>
        <p className="text-lg md:text-xl text-indigo-100/90 leading-relaxed max-w-2xl mx-auto">A showcase of our passion for innovative design and digital strategy. Each project is a story of growth and collaboration.</p>
      </ParticleHero>

      <main>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">A Curated Showcase</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Explore the results-driven solutions we&apos;ve delivered for our flagship clients.</p>
            </div>
            <div className="space-y-24">
              {projects.map((p, i) => (
                <div key={p.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                  {p.reverse ? (
                    <>
                      <div className="lg:order-last"><img src={p.img} alt={p.alt} width="600" height="400" className="rounded-xl shadow-2xl w-full h-auto object-cover" loading="lazy" /></div>
                      <div className="text-left">
                        <p className="text-indigo-600 font-semibold mb-2">{p.tag}</p>
                        <h3 className="text-4xl font-bold text-gray-800 mb-4">{p.title}</h3>
                        <p className="text-lg text-gray-600 mb-6">{p.desc}</p>
                        <button onClick={() => setActiveModal(p)} className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-all transform hover:scale-105">View Case Study</button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div><img src={p.img} alt={p.alt} width="600" height="400" className="rounded-xl shadow-2xl w-full h-auto object-cover" loading="lazy" /></div>
                      <div className="text-left">
                        <p className="text-indigo-600 font-semibold mb-2">{p.tag}</p>
                        <h3 className="text-4xl font-bold text-gray-800 mb-4">{p.title}</h3>
                        <p className="text-lg text-gray-600 mb-6">{p.desc}</p>
                        <button onClick={() => setActiveModal(p)} className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-all transform hover:scale-105">View Case Study</button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Let&apos;s Build Something Amazing</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">Have a project you&apos;re passionate about? We&apos;d love to hear about it.</p>
            <Link to="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-gray-200 transform hover:scale-105 transition-all">Get In Touch</Link>
          </div>
        </section>
      </main>

      <Modal project={activeModal} onClose={() => setActiveModal(null)} />
    </>
  )
}
