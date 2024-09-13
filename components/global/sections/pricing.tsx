import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      title: "Free",
      price: "$0",
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
      cta: "Get started",
    },
    {
      title: "Templates",
      price: "From $49",
      description: "Get a template to kickstart your project",
      features: [
        "All Free tier features",
        "Priority support for template-related issues",
        "Extended documentation and guides for template usage",
        "Design-ready layouts with Tailwind CSS and Next.js",
        "Basic SEO setup for template pages",
        "Quick-start project setups for faster development",
      ],
      cta: "Browse templates",
    },
    {
      title: "Pages/Dashboard",
      price: "$499",
      description:
        "For those who want to focus on getting to business rather than UI design and front-end",
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
      cta: "Get it now",
      highlighted: true,
    },
    {
      title: "Full Web App",
      price: "From $1000",
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
      cta: "Contact us",
    },
  ];

  return (
    <section className='w-full py-12'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='grid items-center gap-12'>
          <div className='flex flex-col justify-center text-center'>
            <div className='space-y-8'>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                Flexible Pricing for{" "}
                <span className='text-primary'>Every Team</span>
              </h1>
              <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>
                Start for free with essential features. Upgrade for advanced
                components, custom templates, priority support, and tailored
                solutions for your growing business.
              </p>
            </div>
          </div>
          <div className='grid gap-px md:grid-cols-4'>
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`flex flex-col  ${
                  index === 0
                    ? "rounded-tl-lg rounded-bl-lg border-r"
                    : index === plans.length - 1
                    ? "rounded-tr-lg rounded-br-lg"
                    : ""
                } ${
                  plan.highlighted
                    ? "bg-zinc-300 dark:bg-gradient-to-br from-zinc-700 to-stone-950 -m-px rounded-lg shadow-lg z-20"
                    : ""
                }`}
              >
                <div className='h-[180px] p-6'>
                  <h3 className='mb-2 text-xl font-bold text-primary'>
                    {plan.title}
                  </h3>
                  <div className='mb-2 text-3xl font-bold'>{plan.price}</div>
                  <p className='text-sm text-muted-foreground'>
                    {plan.description}
                  </p>
                </div>
                <Separator className='' />
                <div className='flex flex-grow flex-col p-6'>
                  <ul className='flex-grow space-y-2'>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className='flex items-center'>
                        <Check
                          className={`mr-2 h-5 w-5 flex-shrink-0 text-green-500 ${
                            plan.highlighted ? "text-white" : ""
                          }`}
                        />
                        <span className='text-sm'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.highlighted ? "secondary" : "outline"}
                    className={`mt-6 rounded-lg border-primary px-4 py-2 font-semibold transition-colors ${
                      plan.highlighted
                        ? ""
                        : "hover:bg-primary hover:text-background"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
