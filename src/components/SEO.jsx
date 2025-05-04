import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Quanta - AI Solutions for Enterprise | Data Annotation & AI Services",
  description = "Quanta provides cutting-edge AI solutions, data annotation services, and custom AI development for enterprises. Transform your business with our intelligent automation solutions.",
  keywords = "AI solutions, data annotation, machine learning, artificial intelligence, enterprise AI, data labeling, AI services",
  canonicalUrl = "https://www.quanta.co.in/",
  ogImage = "https://www.quanta.co.in/og-image.jpg",
  twitterImage = "https://www.quanta.co.in/twitter-image.jpg"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Quanta" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content="Quanta" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {ogImage && <meta property="twitter:image" content={ogImage} />}
      
      {/* Mobile Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta name="theme-color" content="#000000" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Quanta",
            "url": "${canonicalUrl}",
            "logo": "${canonicalUrl}iconLOGO.png",
            "description": "${description}",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            }
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
