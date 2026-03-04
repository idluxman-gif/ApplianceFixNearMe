import Link from "next/link";
import PageNav from "@/components/PageNav";
import { blogArticles } from "./blogData";

export const metadata = {
  title: "Blog | Appliance Repair Tips & Guides | ApplianceFixNearMe.com",
  description: "Expert guides on appliance repair, maintenance tips, and how to find the best repair shops near you. Save money and extend the life of your appliances.",
  openGraph: {
    title: "Blog | Appliance Repair Tips & Guides",
    description: "Expert guides on appliance repair and maintenance.",
    type: "website",
    url: "https://www.appliancefixnearme.com/blog",
  },
};

export default function BlogPage() {
  const published = blogArticles.filter(a => a.published);
  return (
    <div style={{minHeight:"100vh",background:"#F9FAFB",fontFamily:"'DM Sans',system-ui,sans-serif"}}>
      <PageNav />
      <div style={{background:"linear-gradient(160deg,#0F172A,#1E293B 50%,#334155)",padding:"50px 20px 40px",textAlign:"center"}}>
        <h1 style={{margin:"0 0 8px",fontSize:"clamp(24px,5vw,36px)",fontWeight:900,color:"#fff"}}>Appliance Repair Guides</h1>
        <p style={{fontSize:14,color:"rgba(255,255,255,.5)",maxWidth:500,margin:"0 auto"}}>
          Expert tips on finding repair shops, maintaining your appliances, and knowing when to repair vs. replace.
        </p>
      </div>
      <div style={{maxWidth:720,margin:"0 auto",padding:"32px 20px"}}>
        {published.map((article) => (
          <Link key={article.slug} href={`/blog/${article.slug}`} style={{textDecoration:"none",display:"block",marginBottom:20}}>
            <article style={{background:"#fff",borderRadius:12,border:"1px solid #E2E8F0",padding:24,transition:"all .2s",cursor:"pointer"}}>
              <time style={{fontSize:11,color:"#94A3B8",fontWeight:600}}>{new Date(article.publishDate).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}</time>
              <h2 style={{margin:"6px 0 8px",fontSize:19,fontWeight:800,color:"#0F172A",lineHeight:1.3}}>{article.title}</h2>
              <p style={{margin:0,fontSize:13,color:"#64748B",lineHeight:1.6}}>{article.metaDescription}</p>
              <span style={{display:"inline-block",marginTop:10,fontSize:12,fontWeight:600,color:"#EA580C"}}>Read article &rarr;</span>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
