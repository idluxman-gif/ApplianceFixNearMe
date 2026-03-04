import Link from "next/link";
import PageNav from "@/components/PageNav";

export const metadata = {
  title: "About | ApplianceFixNearMe.com",
  description: "Learn how ApplianceFixNearMe.com helps homeowners find trusted appliance repair shops across all 50 states. Free directory, no sign-up required.",
};

export default function AboutPage() {
  return (
    <div style={{minHeight:"100vh",background:"#F9FAFB",fontFamily:"'DM Sans',system-ui,sans-serif"}}>
      <PageNav />
      <div style={{maxWidth:680,margin:"0 auto",padding:"32px 20px 48px"}}>
        <nav style={{marginBottom:20,fontSize:12,color:"#94A3B8"}}>
          <Link href="/" style={{color:"#94A3B8",textDecoration:"none"}}>Home</Link>{" / "}
          <span style={{color:"#64748B"}}>About</span>
        </nav>
        <h1 style={{margin:"0 0 8px",fontSize:28,fontWeight:900,color:"#0F172A"}}>About ApplianceFixNearMe.com</h1>
        <h2 style={{margin:"0 0 20px",fontSize:16,fontWeight:600,color:"#64748B",lineHeight:1.5}}>Find Trusted Appliance Repair Shops Near You</h2>

        <div style={{fontSize:15,color:"#374151",lineHeight:1.8}}>
          <p>[Placeholder — About page content will describe the mission of ApplianceFixNearMe.com, how we help homeowners find trusted local appliance repair shops, and our commitment to verified, accurate listings.]</p>

          <h2 style={{fontSize:22,fontWeight:800,color:"#0F172A",margin:"32px 0 12px"}}>What We Do</h2>
          <p>[Placeholder — Will describe the free, searchable directory of verified appliance repair shops across all 50 US states and DC.]</p>

          <h2 style={{fontSize:22,fontWeight:800,color:"#0F172A",margin:"32px 0 12px"}}>How We Verify Our Listings</h2>
          <p>[Placeholder — Will explain the verification process for each shop listing.]</p>

          <h2 style={{fontSize:22,fontWeight:800,color:"#0F172A",margin:"32px 0 12px"}}>Contact Us</h2>
          <p>Have a question? Want to suggest a shop we missed? Found outdated information?</p>
          <p><strong>Email:</strong> info@appliancefixnearme.com</p>
        </div>
      </div>
    </div>
  );
}
