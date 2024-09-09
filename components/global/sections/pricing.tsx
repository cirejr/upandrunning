import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      title: "Free",
      price: "$0",
      description: "Basic Boilerplate",
      features: [
        "Core SaaS features (authentication, database integration, etc.)",
        "Basic documentation",
        "Community support",
        "GitHub access",
        "Free components library",
        "Basic UI blocks (Tailwind CSS, Next.js)",
        "MIT License for personal or commercial use",
        "Access to community-shared templates",
        "Limited email support",
      ],
      cta: "Get started",
    },
    {
      title: "Pro",
      price: "$19",
      description: "per month",
      features: [
        "All Free tier features",
        "Access to growing library of custom templates",
        "Monthly updates with new templates",
        "Priority support",
        "Extended documentation and guides",
      ],
      cta: "Subscribe now",
    },
    {
      title: "Enterprise",
      price: "$99",
      description: "per month",
      features: [
        "All Pro tier features",
        "Customization consultation",
        "Priority feature requests",
        "Dedicated support channel",
        "Custom integrations",
        "One request / page at a time",
        "Unlimited revisions",
        "CMS integration (e.g., Contentful, Strapi)",
        "Search Engine Optimization (SEO) setup",
        "7-10 days turnaround time",
        "Pause or cancel anytime",
        "24-hour support response time",
        "Private communication channel",
      ],
      cta: "Contact sales",
      highlighted: true,
    },
    {
      title: "Lifetime Access",
      price: "$499",
      description: "One-time payment",
      features: [
        "Access to all current and future templates",
        "Lifetime updates",
        "Premium support",
        "Early access to new features",
        "Exclusive developer community access",
        "Multi-page landing website development",
        "Web apps and SaaS development",
        "AI apps integration support",
        "Unlimited revisions",
        "Negotiable delivery time",
        "Design + development consultations",
        "Private communication channel",
        "24-hour support response time",
      ],
      cta: "Buy now",
      ctaAlt: "Learn more",
    },
  ];

  return (
    <section className='w-full py-12'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='grid items-center gap-6'>
          <div className='flex flex-col justify-center space-y-4 text-center'>
            <div className='space-y-2'>
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
                      plan.highlighted ? "" : "hover:bg-primary"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                  {plan.ctaAlt && (
                    <Button className='mt-2 rounded-lg bg-transparent px-4 py-2 font-semibold text-gray-400 transition-colors hover:text-white'>
                      or {plan.ctaAlt}
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
