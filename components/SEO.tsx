import React, { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}

const SITE_NAME = "CodeKea";
const BASE_URL = "https://codekea.com"; // change if needed
const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop";

const DEFAULT_KEYWORDS =
  "web3 development agency, blockchain developers india, ai automation services, full stack development agency, mobile app development company, smart contract audit, react developers, startup tech agency";

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image = DEFAULT_IMAGE,
  url = BASE_URL,
  type = "website",
  noIndex = false,
}) => {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;

    document.title = fullTitle;

    const setMeta = (
      key: string,
      content: string,
      isProperty: boolean = false,
    ) => {
      const selector = isProperty
        ? `meta[property="${key}"]`
        : `meta[name="${key}"]`;

      let tag = document.querySelector(selector) as HTMLMetaElement | null;

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(isProperty ? "property" : "name", key);
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", content);
    };

    const setLink = (rel: string, href: string) => {
      let link = document.querySelector(
        `link[rel="${rel}"]`,
      ) as HTMLLinkElement | null;

      if (!link) {
        link = document.createElement("link");
        link.rel = rel;
        document.head.appendChild(link);
      }

      link.href = href;
    };

    // ======================
    // BASIC
    // ======================
    setMeta("description", description);
    setMeta("keywords", DEFAULT_KEYWORDS);

    setMeta("robots", noIndex ? "noindex,nofollow" : "index,follow");

    // ======================
    // CANONICAL
    // ======================
    setLink("canonical", url);

    // ======================
    // OPEN GRAPH
    // ======================
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:type", type, true);
    setMeta("og:url", url, true);
    setMeta("og:image", image, true);
    setMeta("og:site_name", SITE_NAME, true);

    // ======================
    // TWITTER
    // ======================
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    // ======================
    // STRUCTURED DATA (JSON-LD)
    // ======================
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
      description,
      sameAs: [
        "https://twitter.com/",
        "https://www.linkedin.com/",
        "https://github.com/",
        "https://instagram.com/",
      ],
    };

    let script = document.querySelector(
      'script[data-schema="codekea"]',
    ) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.schema = "codekea";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  }, [title, description, image, url, type, noIndex]);

  return null;
};

export default SEO;
