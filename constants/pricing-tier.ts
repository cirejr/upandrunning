export interface Tier {
  name: string;
  id: "starter" | "pro" | "advanced" | "templates" | "full_web_app";
  description: string;
  features: string[];
  featured: boolean;
  priceId: Record<string, string>;
  externalLink?: string;
  isEntreprise?: boolean;
}

export const PricingTier: Tier[] = [
  {
    name: "Free",
    id: "starter",
    description: "SaaS Starterkit",
    features: [
      "Core SaaS features (authentication, database integration, etc.)",
      "Basic documentation",
      "GitHub access",
      "Free components library",
      "Basic UI blocks (Tailwind CSS, Next.js)",
      "MIT License for personal or commercial use",
      "Limited email support",
    ],
    featured: false,
    priceId: {
      month: "pri_01jh8ept6c8qgz34hy4gf53g8f",
      year: "pri_01jh8ept6c8qgz34hy4gf53g8f",
    },
  },
  {
    name: "Templates",
    id: "templates",
    description: "Get a template to kickstart your project",
    features: [
      "All Free tier features",
      "Priority support for template-related issues",
      "Extended documentation and guides for template usage",
      "Design-ready layouts with Tailwind CSS and Next.js",
      "Basic SEO setup for template pages",
      "Quick-start project setups for faster development",
    ],
    featured: false,
    externalLink: "/templates",
    priceId: {
      month: "pri_01jhp5qpc4jd7qd2wpxsjz002g",
      year: "pri_01jhp5s1k07q87pqjas2kxdnd7",
    },
  },
  {
    name: "Pages/Dashboard",
    id: "pro",
    description:
      "Focus on getting to business rather than UI design and front-end",
    features: [
      "One time payment",
      "Private communication channel with 24-hour support response time",
      "Custom dashboard and landing page design",
      "One request / page at a time with unlimited revisions",
      "CMS integration (e.g., Contentful, Strapi)",
      "Search Engine Optimization (SEO) setup for each page",
      "Custom integration consultation (e.g., APIs, third-party services)",
      "7-10 days turnaround time per request",
    ],
    featured: true,
    priceId: {
      month: "pri_01jhjs6njm2cvk5k4jn9krtt7w",
      year: "pri_01jhp5fgzs6j692y1h62b37ab2",
    },
  },
  {
    name: "Full Web App",
    id: "full_web_app",
    description: "Custom web app development for businesses",
    features: [
      "Custom full-stack web app development",
      "Tailored to your specific business needs",
      "Integration with third-party APIs and services",
      "AI app integration (e.g., OpenAI, GPT-4)",
      "Unlimited revisions during the development phase",
      "Design + development consultations",
      "Delivery timeline based on project scope",
      "Ongoing support available with extended contract",
    ],
    featured: false,
    externalLink: "/contacts",
    isEntreprise: true,
    priceId: {
      month: "pri_01jhp5kx9bzqvxyvkqfagzxzvc",
      year: "pri_01jhp5kx9bzqvxyvkqfagzxzvc",
    },
  },
];
