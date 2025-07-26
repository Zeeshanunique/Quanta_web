import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Quanta | Vertical AI Automation Platform",
  description = "Quanta provides specialized vertical AI agents with deep domain expertise to transform your industry. Outperform general-purpose AI with our industry-specific solutions.",
  keywords = "vertical AI agents, domain-specific AI, industry AI, SaaS replacement, vertical automation, specialized AI, Quanta",
  canonicalUrl = "https://www.quanta.ai/",
  ogImage = "https://www.quanta.ai/og-image.jpg",
  twitterImage = "https://www.quanta.ai/twitter-image.jpg",
  page = "home"
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
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* PWA Meta Tags */}
      <meta name="application-name" content="Quanta" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Quanta" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Quanta" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {twitterImage && <meta property="twitter:image" content={twitterImage} />}
      
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
