const SITE_URL = "https://gruard.com";

export function setMetaTag(property: string, content: string, isOg = false) {
  const attr = isOg ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function setCanonical(path: string) {
  const url = `${SITE_URL}${path}`;
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}

export function setPageJsonLd(data: object) {
  let el = document.querySelector('script[data-page-jsonld]') as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.setAttribute("type", "application/ld+json");
    el.setAttribute("data-page-jsonld", "true");
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function removePageJsonLd() {
  const el = document.querySelector('script[data-page-jsonld]');
  if (el) el.remove();
}

export function setLegalPageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const fullTitle = `${title} | Grúa RD`;
  const url = `${SITE_URL}${path}`;
  document.title = fullTitle;
  setMetaTag("description", description);
  setCanonical(path);
  setMetaTag("og:title", fullTitle, true);
  setMetaTag("og:description", description, true);
  setMetaTag("og:url", url, true);
  setMetaTag("og:type", "website", true);
  setMetaTag("twitter:title", fullTitle);
  setMetaTag("twitter:description", description);
  setPageJsonLd({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": url,
    "publisher": {
      "@type": "Organization",
      "name": "Grúa RD",
      "url": SITE_URL,
    },
  });
}
