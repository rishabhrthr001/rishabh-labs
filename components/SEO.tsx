import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, type = 'website' }) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Helper to set or create meta tags
    const setMeta = (name: string, content: string, prop: boolean = false) => {
      // Remove existing tag if it exists to avoid duplicates
      const selector = prop ? `meta[property='${name}']` : `meta[name='${name}']`;
      let element = document.querySelector(selector);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(prop ? 'property' : 'name', name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard Meta
    setMeta('description', description);

    // Open Graph / Facebook
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', type, true);
    setMeta('og:site_name', 'Rishabh Labs', true);
    if (image) setMeta('og:image', image, true);

    // Twitter
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    if (image) setMeta('twitter:image', image);

    // Cleanup not strictly necessary for SPA as next view overwrites, 
    // but good practice would be to revert to default on unmount.
  }, [title, description, image, type]);

  return null;
};

export default SEO;