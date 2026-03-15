import { motion } from "framer-motion";
import { Clock, ChevronRight, BookOpen, AlertTriangle, Truck, DollarSign, AlertCircle, ShieldCheck, ClipboardList, Shield, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blog-posts";
import LandingLayout from "../landing-layout";
import { useEffect } from "react";

const iconMap: Record<string, LucideIcon> = {
  AlertTriangle,
  Truck,
  DollarSign,
  BookOpen,
  AlertCircle,
  ShieldCheck,
  ClipboardList,
  Shield,
};

const SITE_URL = "https://gruard.com";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

function setMetaTag(property: string, content: string, isOg = false) {
  const attr = isOg ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(url: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}

function setJsonLd(data: object) {
  let el = document.querySelector('script[data-blog-jsonld]') as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.setAttribute("type", "application/ld+json");
    el.setAttribute("data-blog-jsonld", "true");
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export default function BlogIndex() {
  useEffect(() => {
    const title = "Blog - Grúa RD | Guías de Asistencia Vial en República Dominicana";
    const description = "Artículos y guías sobre servicios de grúa, asistencia vial, seguridad en carretera y mantenimiento vehicular en República Dominicana.";
    const url = `${SITE_URL}/blog`;

    document.title = title;
    setMetaTag("description", description);
    setCanonical(url);
    setMetaTag("og:title", title, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:url", url, true);
    setMetaTag("og:type", "website", true);
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);

    setJsonLd({
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Blog Grúa RD",
      "description": description,
      "url": url,
      "publisher": {
        "@type": "Organization",
        "name": "Grúa RD",
        "url": SITE_URL
      }
    });

    window.scrollTo(0, 0);

    return () => {
      const jsonLd = document.querySelector('script[data-blog-jsonld]');
      if (jsonLd) jsonLd.remove();
    };
  }, []);

  return (
    <LandingLayout>
      <div className="pt-24 pb-16 bg-background" data-testid="page-blog">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <Badge className="bg-orange/10 text-orange border-orange/20 mb-4" data-testid="badge-blog">
              <BookOpen className="w-3 h-3 mr-1" />
              Blog
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-blog-title">
              Guías y Consejos de Asistencia Vial
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Todo lo que necesitas saber sobre servicios de grúa, seguridad vial y mantenimiento vehicular en República Dominicana.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href={`/blog/${post.slug}`} className="block h-full group" data-testid={`link-blog-${post.slug}`}>
                  <Card className="h-full border border-border hover:border-orange/40 hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="bg-primary/5 p-6 flex items-center justify-center h-40">
                      <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center">
                        {(() => { const Icon = iconMap[post.icon] || BookOpen; return <Icon className="w-8 h-8 text-orange" />; })()}
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs font-medium" data-testid={`badge-category-${post.slug}`}>
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime} min
                        </span>
                      </div>
                      <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-orange transition-colors line-clamp-2" data-testid={`text-title-${post.slug}`}>
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {new Date(post.date).toLocaleDateString("es-DO", { year: "numeric", month: "long", day: "numeric" })}
                        </span>
                        <span className="text-orange text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Leer
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </LandingLayout>
  );
}
