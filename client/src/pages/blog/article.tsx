import { motion } from "framer-motion";
import { useParams } from "wouter";
import { useEffect } from "react";
import { Clock, ChevronRight, ArrowLeft, Download, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getPostBySlug, blogPosts } from "@/data/blog-posts";
import LandingLayout from "../landing-layout";

const APP_DOMAIN = "https://app.gruard.com";
const SITE_URL = "https://gruard.com";

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

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    if (post) {
      const title = `${post.title} | Blog Grúa RD`;
      const url = `${SITE_URL}/blog/${post.slug}`;

      document.title = title;
      setMetaTag("description", post.description);
      setMetaTag("keywords", post.keywords);
      setCanonical(url);
      setMetaTag("og:title", title, true);
      setMetaTag("og:description", post.description, true);
      setMetaTag("og:url", url, true);
      setMetaTag("og:type", "article", true);
      setMetaTag("article:published_time", post.date, true);
      setMetaTag("article:author", post.author, true);
      setMetaTag("twitter:card", "summary_large_image");
      setMetaTag("twitter:title", title);
      setMetaTag("twitter:description", post.description);

      setJsonLd({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "url": url,
        "datePublished": post.date,
        "author": {
          "@type": "Person",
          "name": post.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Grúa RD",
          "url": SITE_URL
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": url
        },
        "keywords": post.keywords
      });
    }
    window.scrollTo(0, 0);

    return () => {
      const jsonLd = document.querySelector('script[data-blog-jsonld]');
      if (jsonLd) jsonLd.remove();
    };
  }, [post]);

  if (!post) {
    return (
      <LandingLayout>
        <div className="pt-24 pb-16 min-h-[60vh] bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4" data-testid="text-not-found">Artículo no encontrado</h1>
            <p className="text-muted-foreground mb-6">El artículo que buscas no existe o fue removido.</p>
            <a href="/blog">
              <Button variant="outline" data-testid="button-back-to-blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al Blog
              </Button>
            </a>
          </div>
        </div>
      </LandingLayout>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <LandingLayout>
      <article className="pt-24 pb-16 bg-background" data-testid="page-blog-article">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" data-testid="nav-breadcrumb">
              <a href="/blog" className="hover:text-orange transition-colors" data-testid="link-breadcrumb-blog">Blog</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground font-medium truncate">{post.title}</span>
            </nav>

            <header className="mb-10">
              <Badge className="bg-orange/10 text-orange border-orange/20 mb-4" data-testid="badge-article-category">
                {post.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight" data-testid="text-article-title">
                {post.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {post.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-t border-b border-border py-4">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime} min de lectura
                </span>
                <span>
                  {new Date(post.date).toLocaleDateString("es-DO", { year: "numeric", month: "long", day: "numeric" })}
                </span>
              </div>
            </header>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              {post.content.map((section, idx) => (
                <section key={idx} className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-muted-foreground leading-relaxed mb-4">
                      {p}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="space-y-2 mb-4">
                      {section.list.map((item, lIdx) => (
                        <li key={lIdx} className="flex items-start gap-2 text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-orange flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <Card className="bg-primary text-white mt-12 overflow-hidden" data-testid="card-cta">
              <CardContent className="p-8 md:p-10">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    ¿Necesitas asistencia vial ahora?
                  </h3>
                  <p className="text-white/70 mb-6 max-w-lg mx-auto">
                    Descarga la app de Grúa RD y ten acceso a asistencia vial 24/7 en toda la República Dominicana. GPS en tiempo real, operadores verificados y precios transparentes.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a href={`${APP_DOMAIN}/onboarding`}>
                      <Button size="lg" className="bg-orange text-orange-foreground hover:bg-orange/90" data-testid="button-cta-register">
                        <Download className="w-5 h-5 mr-2" />
                        Descargar Grúa RD
                      </Button>
                    </a>
                    <a href="/blog">
                      <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" data-testid="button-cta-blog">
                        Ver más artículos
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-foreground mb-6" data-testid="text-related-title">
                  Artículos relacionados
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedPosts.map(related => (
                    <a
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="group"
                      data-testid={`link-related-${related.slug}`}
                    >
                      <Card className="h-full border border-border hover:border-orange/40 transition-all">
                        <CardContent className="p-4">
                          <Badge variant="secondary" className="text-xs mb-2">
                            {related.category}
                          </Badge>
                          <h4 className="font-bold text-foreground group-hover:text-orange transition-colors text-sm line-clamp-2 mb-2">
                            {related.title}
                          </h4>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {related.readTime} min
                          </span>
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </article>
    </LandingLayout>
  );
}
