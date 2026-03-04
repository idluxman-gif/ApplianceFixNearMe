import Link from "next/link";
import PageNav from "@/components/PageNav";

export const metadata = {
  title: "Contact Us | ApplianceFixNearMe.com",
  description: "Get in touch with ApplianceFixNearMe.com. Report issues, suggest new repair shops, or request listing updates.",
};

export default function ContactPage() {
  return (
    <div style={{minHeight:"100vh",background:"#F9FAFB",fontFamily:"'DM Sans',system-ui,sans-serif"}}>
      <PageNav />
      <div style={{maxWidth:680,margin:"0 auto",padding:"32px 20px 48px"}}>
        <nav style={{marginBottom:20,fontSize:12,color:"#94A3B8"}}>
          <Link href="/" style={{color:"#94A3B8",textDecoration:"none"}}>Home</Link>{" / "}
          <span style={{color:"#64748B"}}>Contact</span>
        </nav>
        <h1 style={{margin:"0 0 20px",fontSize:28,fontWeight:900,color:"#0F172A"}}>Contact Us</h1>

        <div style={{fontSize:15,color:"#374151",lineHeight:1.8}}>
          <p>We&rsquo;d love to hear from you. Whether you&rsquo;re a homeowner with a question, a shop owner who wants to be listed, or someone who spotted an error &mdash; your message helps us make ApplianceFixNearMe.com better for everyone.</p>

          <div style={{background:"#fff",border:"1px solid #E2E8F0",borderRadius:12,padding:24,margin:"20px 0"}}>
            <h2 style={{fontSize:18,fontWeight:800,color:"#0F172A",margin:"0 0 8px"}}>Get in Touch</h2>
            <p style={{margin:"0 0 4px"}}><strong>Email:</strong> <a href="mailto:info@appliancefixnearme.com" style={{color:"#EA580C"}}>info@appliancefixnearme.com</a></p>
            <p style={{margin:0,fontSize:13,color:"#94A3B8"}}>We typically respond within 1&ndash;2 business days.</p>
          </div>

          <h2 style={{fontSize:22,fontWeight:800,color:"#0F172A",margin:"32px 0 12px"}}>For Homeowners</h2>
          <p>[Placeholder — Instructions for homeowners to report outdated info or suggest corrections.]</p>

          <h2 style={{fontSize:22,fontWeight:800,color:"#0F172A",margin:"32px 0 12px"}}>For Repair Shop Owners</h2>
          <p>[Placeholder — Instructions for repair shop owners to add or remove listings.]</p>

          <h2 style={{fontSize:22,fontWeight:800,color:"#0F172A",margin:"32px 0 12px"}}>Report a Problem</h2>
          <p>If something on the site isn&rsquo;t working properly, please let us know at <a href="mailto:info@appliancefixnearme.com" style={{color:"#EA580C"}}>info@appliancefixnearme.com</a>.</p>
        </div>
      </div>
    </div>
  );
}
