export default function StructuredData() {
    const data = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "MediCare",
      description:
        "A digital healthcare concept designed to make finding care, exploring treatments and connecting with healthcare professionals easier.",
      url: "https://medicare-demo.com",
      publisher: {
        "@type": "Organization",
        name: "MediCare",
        url: "https://medicare-demo.com",
      },
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    );
  }