import { Helmet } from 'react-helmet-async'

export default function SEO({
  title = 'Scalix Studios | Premier Digital Agency in Berkshire, UK',
  description = "Scalix Studios: Berkshire's leading digital agency. We craft stunning websites, drive results with expert SEO, and create unforgettable brands.",
  keywords = 'digital agency berkshire, seo services berkshire, web design reading, social media marketing newbury, creative agency slough, scalix studios',
  canonical = 'https://www.scalixstudios.co.uk/',
  ogTitle,
  ogDescription,
  ogImage = '/scalix_logo.webp',
  ogUrl,
  noindex = false,
  structuredData = null,
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Scalix Studios" />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow'} />

      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl || canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content="Scalix Studios" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}
