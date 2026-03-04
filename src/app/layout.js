import Script from 'next/script';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  metadataBase: new URL('https://www.appliancefixnearme.com'),
  alternates: { canonical: '/' },
  title: "Find Trusted Appliance Repair Shops Near You | ApplianceFixNearMe.com",
  description: "Find trusted appliance repair shops near you. Browse verified repair services for refrigerators, washers, dryers, dishwashers, and more across all 50 states.",
  keywords: "appliance repair near me, appliance fix near me, refrigerator repair, washer repair, dryer repair, dishwasher repair, appliance service",
  openGraph: {
    title: "Appliance Repair Shops Near You | ApplianceFixNearMe.com",
    description: "The largest directory of appliance repair shops in the US. Find trusted repair services near you.",
    type: "website",
    url: "https://www.appliancefixnearme.com",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* GA4 — replace GA_MEASUREMENT_ID with real ID when ready */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        {/* AdSense — replace ca-pub-XXXXXXXXXXXXXXXX with real publisher ID when ready */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body style={{ margin: 0 }}>
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
