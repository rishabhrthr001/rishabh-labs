import React from "react";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: String;
  techStack: string[];
  link: string;
}

export interface Service {
  id: string; // Changed to string for easier routing
  title: string;
  shortDescription: string;
  fullDescription?: string;
  features?: string[];
  process?: string[];
  startingPrice?: string;
  icon: React.ElementType;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type PageView =
  | { type: "home" }
  | { type: "about" }
  | { type: "service"; serviceId: string }
  | { type: "legal"; pageId: "privacy" | "terms" | "cookie" };
