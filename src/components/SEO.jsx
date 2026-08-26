import React from "react";
import { Helmet } from "react-helmet-async";
import { siteSeo } from "../config/seoContent";

const SEO = ({
  title = siteSeo.title,
  description = siteSeo.description,
  keywords = siteSeo.keywords,
  canonicalUrl = siteSeo.canonicalUrl,
  ogImage = siteSeo.ogImage,
  twitterImage = siteSeo.twitterImage,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />

      <meta name="author" content="Quanta" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      <meta name="application-name" content="Quanta" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Quanta" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Quanta" />
      <meta property="og:locale" content="en_US" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {twitterImage && <meta property="twitter:image" content={twitterImage} />}

      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta name="theme-color" content="#070707" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Quanta',
          url: canonicalUrl,
          logo: `${canonicalUrl.replace(/\/$/, '')}/favicon.svg`,
          description: siteSeo.elevatorPitch,
          slogan: siteSeo.tagline,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Bangalore',
            addressCountry: 'IN',
          },
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Quanta',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          description: siteSeo.description,
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            description: 'Contact for enterprise pricing',
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
