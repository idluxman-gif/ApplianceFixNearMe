import Link from "next/link";
import PageNav from "@/components/PageNav";

export const metadata = {
  title: "Terms of Service | ApplianceFixNearMe.com",
  description: "Terms of Service for ApplianceFixNearMe.com including disclaimers on shop listing accuracy, acceptable use, and limitation of liability.",
};

export default function TermsPage() {
  return (
    <div style={{minHeight:"100vh",background:"#F9FAFB",fontFamily:"'DM Sans',system-ui,sans-serif"}}>
      <PageNav />
      <div style={{maxWidth:680,margin:"0 auto",padding:"32px 20px 48px"}}>
        <nav style={{marginBottom:20,fontSize:12,color:"#94A3B8"}}>
          <Link href="/" style={{color:"#94A3B8",textDecoration:"none"}}>Home</Link>{" / "}
          <span style={{color:"#64748B"}}>Terms of Service</span>
        </nav>
        <h1 style={{margin:"0 0 6px",fontSize:28,fontWeight:900,color:"#0F172A"}}>Terms of Service</h1>
        <p style={{fontSize:13,color:"#94A3B8",margin:"0 0 24px"}}><strong>Last Updated:</strong> March 4, 2026</p>

        <div style={{fontSize:15,color:"#374151",lineHeight:1.8}}>
          <p>[Placeholder — Terms of Service for ApplianceFixNearMe.com. This will cover acceptable use, store listing disclaimers, no endorsement clause, intellectual property, third-party links, limitation of liability, disclaimer of warranties, and contact information.]</p>

          <p>For questions about these Terms of Service, contact us at <a href="mailto:info@appliancefixnearme.com" style={{color:"#EA580C"}}>info@appliancefixnearme.com</a>.</p>
        </div>
      </div>
    </div>
  );
}
