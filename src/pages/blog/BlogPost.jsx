import { Link, useParams, Navigate } from 'react-router-dom'
import { FaArrowRight, FaArrowLeft, FaClock, FaCalendar } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import blogPosts from '../../data/blogPosts'

function renderContent(blocks) {
  return blocks.map((block, i) => {
    switch (block.type) {
      case 'h2':
        return <h2 key={i} className="text-2xl md:text-3xl font-bold mt-10 mb-4">{block.text}</h2>
      case 'h3':
        return <h3 key={i} className="text-xl font-bold mt-8 mb-3">{block.text}</h3>
      case 'p':
        return <p key={i} className="text-slate-600 leading-relaxed mb-4">{block.text}</p>
      case 'ul':
        return (
          <ul key={i} className="list-disc list-inside space-y-2 mb-4 text-slate-600">
            {block.items.map((item, j) => <li key={j} className="leading-relaxed">{item}</li>)}
          </ul>
        )
      case 'cta':
        return (
          <div key={i} className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 md:p-8 mt-8">
            <p className="text-slate-700 font-medium mb-4">{block.text}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-500 transition-all hover:gap-3">Get in Touch <FaArrowRight /></Link>
          </div>
        )
      default:
        return null
    }
  })
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)
  const scrollRef = useScrollAnimation()

  if (!post) return <Navigate to="/blog" replace />

  const currentIndex = blogPosts.indexOf(post)
  const nextPost = blogPosts[currentIndex + 1]
  const prevPost = blogPosts[currentIndex - 1]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "dateModified": post.date,
    "url": `https://www.scalixstudios.co.uk/blog/${post.slug}`,
    "author": { "@type": "Organization", "name": "Scalix Studios", "url": "https://www.scalixstudios.co.uk" },
    "publisher": { "@type": "Organization", "name": "Scalix Studios", "url": "https://www.scalixstudios.co.uk", "logo": { "@type": "ImageObject", "url": "https://www.scalixstudios.co.uk/scalix_logo.webp" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://www.scalixstudios.co.uk/blog/${post.slug}` },
  }
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.scalixstudios.co.uk" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.scalixstudios.co.uk/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://www.scalixstudios.co.uk/blog/${post.slug}` },
    ]
  }

  return (
    <>
      <SEO
        title={post.metaTitle}
        description={post.metaDesc}
        keywords={post.metaKeywords}
        canonical={`https://www.scalixstudios.co.uk/blog/${post.slug}`}
        structuredData={[structuredData, breadcrumbData]}
      />

      <header className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4c1d95 0%, #1a202c 100%)' }}>
        <div className="absolute inset-0 opacity-15" style={{ background: 'radial-gradient(circle at 30% 50%, #6d28d9 0%, transparent 50%), radial-gradient(circle at 80% 80%, #3b82f6 0%, transparent 40%)' }} />
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-slate-300 text-sm mb-6">
            <Link to="/" className="hover:text-white">Home</Link> / <Link to="/blog" className="hover:text-white">Blog</Link> / <span className="text-white">{post.category}</span>
          </nav>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-block bg-white/10 border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full">{post.category}</span>
            <span className="flex items-center gap-1.5 text-sm text-slate-300"><FaClock /> {post.readTime}</span>
            <span className="flex items-center gap-1.5 text-sm text-slate-300"><FaCalendar /> {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">{post.title}</h1>
        </div>
      </header>

      <main ref={scrollRef}>
        <article className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="prose-custom">
              {renderContent(post.content)}
            </div>
          </div>
        </article>

        {/* Prev / Next */}
        {(prevPost || nextPost) && (
          <section className="py-12 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prevPost ? (
                  <Link to={`/blog/${prevPost.slug}`} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
                    <span className="flex items-center gap-1.5 text-xs text-slate-500 mb-2"><FaArrowLeft /> Previous</span>
                    <p className="font-bold text-sm">{prevPost.title}</p>
                  </Link>
                ) : <div />}
                {nextPost && (
                  <Link to={`/blog/${nextPost.slug}`} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all text-right">
                    <span className="flex items-center justify-end gap-1.5 text-xs text-slate-500 mb-2">Next <FaArrowRight /></span>
                    <p className="font-bold text-sm">{nextPost.title}</p>
                  </Link>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Back to blog */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all"><FaArrowLeft className="text-xs" /> Back to all articles</Link>
          </div>
        </section>
      </main>
    </>
  )
}
