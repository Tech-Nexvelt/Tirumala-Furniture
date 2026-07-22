import React from "react";
import { BRAND_INFO } from "@/lib/data";

export default function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    name: BRAND_INFO.name,
    description: BRAND_INFO.heroSubtitle,
    url: "https://www.tirumalafurniture.com",
    telephone: BRAND_INFO.phone,
    email: BRAND_INFO.email,
    priceRange: "₹₹₹",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 8, 4-2, Charwadan Lane No. 2, Near Court, Azam Pura",
      addressLocality: "Siddipet",
      addressRegion: "Telangana",
      postalCode: "502103",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BRAND_INFO.coordinates.lat,
      longitude: BRAND_INFO.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "21:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BRAND_INFO.googleRating,
      reviewCount: BRAND_INFO.googleReviewCount,
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND_INFO.name,
    url: "https://www.tirumalafurniture.com",
    logo: "https://www.tirumalafurniture.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BRAND_INFO.phone,
      contactType: "Customer Support & Concierge",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Telugu"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
