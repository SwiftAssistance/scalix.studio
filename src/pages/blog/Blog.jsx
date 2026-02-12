import { Link } from 'react-router-dom'
import { FaArrowRight, FaClock } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import ParticleHero from '../../components/ParticleHero'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import blogPosts from '../../data/blogPosts'

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Scalix Studios Blog",
  "description": "Digital marketing tips, SEO guides, and web design advice for UK small businesses. Practical, no-jargon insights from Berkshire's leading digital agency.",
  "url": "https://www.scalixstudios.co.uk/blog",
  "publisher": { "@type": "Organization", "name": "Scalix Studios", "url": "https://www.scalixstudios.co.uk" },
  "blogPost": blogPosts.map(p => ({
    "@type": "BlogPosting",
    "headline": p.title,
    "description": p.excerpt,
    "datePublished": p.date,
    "url": `https://www.scalixstudios.co.uk/blog/${p.slug}`,
    "author": { "@type": "Organization", "name": "Scalix Studios" },
  })),
}

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.scalixstudios.co.uk" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.scalixstudios.co.uk/blog" },
  ]
}

export default function Blog() {
  const scrollRef = useScrollAnimation()

  return (
    <>
      <SEO
        title="Blog | Digital Marketing Tips & SEO Guides | Scalix Studios"
        description="Digital marketing tips, SEO guides, and web design advice for UK small businesses. Practical, no-jargon insights from Berkshire's leading digital agency."
        keywords="digital marketing blog, seo tips, web design advice, small business marketing, ppc guide, content marketing tips"
        canonical="https://www.scalixstudios.co.uk/blog"
        structuredData={[structuredData, breadcrumbData]}
      />

      <ParticleHero className="min-h-[65vh] md:min-h-[75vh]">
        <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-blue-200 mb-6">Blog & Resources</span>
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold mb-6 text-white leading-tight">Digital Marketing <span className="gradient-text-teal">Insights</span></h1>
        <p className="text-base md:text-xl text-blue-100/90 leading-relaxed max-w-2xl mx-auto px-2">Practical tips, honest advice, and proven strategies to help your business grow online. No fluff, no jargon.</p>
      </ParticleHero>

      <main ref={scrollRef}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {blogPosts.map((post, i) => (
                  <Link key={post.slug} to={`/blog/${post.slug}`} className="block bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all p-8 animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-500"><FaClock /> {post.readTime}</span>
                      <span className="text-xs text-slate-400">{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">{post.title}</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm">Read article <FaArrowRight className="text-xs" /></span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Want personalised advice?</h2>
            <p className="text-lg text-slate-600 mb-8 animate-on-scroll">Our blog covers general tips, but every business is different. Book a free strategy call and we'll give you tailored recommendations for your specific situation.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-500 transition-all hover:gap-3 animate-on-scroll">Book Free Strategy Call <FaArrowRight /></Link>
          </div>
        </section>
      </main>
    </>
  )
}
