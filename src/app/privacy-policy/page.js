import Link from "next/link";
import PageNav from "@/components/PageNav";

export const metadata = {
  title: "Privacy Policy | ApplianceFixNearMe.com",
  description: "Read the ApplianceFixNearMe.com privacy policy covering data collection, cookies, Google AdSense, Analytics, and your rights.",
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{minHeight:"100vh",background:"#F9FAFB",fontFamily:"'DM Sans',system-ui,sans-serif"}}>
      <PageNav />
      <div style={{maxWidth:680,margin:"0 auto",padding:"32px 20px 48px"}}>
        <nav style={{marginBottom:20,fontSize:12,color:"#94A3B8"}}>
          <Link href="/" style={{color:"#94A3B8",textDecoration:"none"}}>Home</Link>{" / "}
          <span style={{color:"#64748B"}}>Privacy Policy</span>
        </nav>
        <h1 style={{margin:"0 0 6px",fontSize:28,fontWeight:900,color:"#0F172A"}}>Privacy Policy</h1>
        <p style={{fontSize:13,color:"#94A3B8",margin:"0 0 24px"}}><strong>Last Updated:</strong> March 4, 2026</p>

        <div style={{fontSize:15,color:"#374151",lineHeight:1.8}}>
          <p>[Placeholder — Privacy policy content for ApplianceFixNearMe.com. This will cover data collection, cookies, third-party services (Google Analytics, AdSense), data retention, user rights under CCPA and GDPR, and contact information.]</p>

          <p>For questions about this Privacy Policy, contact us at <a href="mailto:info@appliancefixnearme.com" style={{color:"#EA580C"}}>info@appliancefixnearme.com</a>.</p>
        </div>
      </div>
    </div>
  );
}
