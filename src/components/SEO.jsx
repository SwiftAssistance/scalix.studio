import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://www.scalixstudios.co.uk'

function resolveImageUrl(path) {
  if (!path) return `${SITE_URL}/scalix_logo.webp`
  if (path.startsWith('http')) return path
  return `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`
}

export default function SEO({
  title = 'Scalix Studios | Premier Digital Agency in Berkshire, UK',
  description = "Scalix Studios: Berkshire's leading digital agency. We craft stunning websites, drive results with expert SEO, and create unforgettable brands.",
  keywords = 'digital agency berkshire, seo services berkshire, web design reading, social media marketing newbury, creative agency slough, scalix studios',
  canonical = `${SITE_URL}/`,
  ogTitle,
  ogDescription,
  ogImage = '/scalix_logo.webp',
  ogUrl,
  ogType = 'website',
  noindex = false,
  structuredData = null,
}) {
  const absoluteOgImage = resolveImageUrl(ogImage)

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Scalix Studios" />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />

      {/* Geo meta tags for local SEO */}
      <meta name="geo.region" content="GB-BKM" />
      <meta name="geo.placename" content="Windsor, Berkshire" />
      <meta name="geo.position" content="51.4816;-0.6125" />
      <meta name="ICBM" content="51.4816, -0.6125" />

      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:alt" content={ogTitle || title} />
      <meta property="og:url" content={ogUrl || canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content="Scalix Studios" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={absoluteOgImage} />

      {structuredData && (
        Array.isArray(structuredData)
          ? structuredData.map((data, i) => (
            <script key={i} type="application/ld+json">
              {JSON.stringify(data)}
            </script>
          ))
          : <script type="application/ld+json">
              {JSON.stringify(structuredData)}
            </script>
      )}
    </Helmet>
  )
}
