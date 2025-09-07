export const pricingTiers = [
  {
    id: 1,
    title: "Metabolic Reset",
    description: "Comprehensive weight loss program without medication.",
    price: "$199 USD",
    priceInfo: "Per month, includes all services",
    buttonLabel: "Check Eligibility",

    features: [
      "Metabolic assessment and testing",
      "Personalized nutrition plan",
      "Lifestyle coaching support",
      "Smart scale and tracking",
      "Monthly doctor consultations",
    ],
  },
  {
    id: 2,
    title: "GLP-1 Program",
    description: "Complete medical weight loss with GLP-1 injections.",
    price: "$399 USD",
    priceInfo: "Per month, all-inclusive",
    buttonLabel: "Start program",

    features: [
      "GLP-1 medication included",
      "Weekly endocrinologist support",
      "Blood tests and monitoring",
      "Side effect management",
      "Lifestyle coaching and app access",
    ],
    popular: true,
    imageUrl: "/assets/images/template/money.svg",
    imageAlt: "money",
    darkImageUrl: "/assets/images/template/money-dark.svg",
    darkImageAlt: "money-dark",
  },
];
export const tiers = [
  {
    id: 1,
    plan: "Metabolic Reset",
    price: "$199",
    priceSuffix: "/ mo",
    description: "3-month minimum program.",
    features: [
      "Comprehensive metabolic testing",
      "Personalized nutrition guidance",
      "Smart device monitoring",
      "Monthly medical consultations",
      "24/7 chat support",
    ],
    icon: "unicon-sub-volume",
    buttonText: "Get started",

    highlight: false,
  },
  {
    id: 2,
    plan: "GLP-1 Program",
    price: "$399",
    priceSuffix: "/ mo",
    description: "6-month recommended program.",
    features: [
      "Access to all <b>Metabolic Reset</b> features",
      "GLP-1 medication included",
      "Weekly endocrinologist check-ins",
      "Blood tests and lab monitoring",
      "Side effect management",
    ],
    icon: "unicon-course",
    buttonText: "Check Eligibility",

    highlight: true,
  },
  {
    id: 3,
    plan: "Premium Care",
    price: "$599",
    priceSuffix: "/ mo",
    description: "12-month comprehensive program.",
    features: [
      "Access to all <b>GLP-1 Program</b> features",
      "Dedicated care coordinator",
      "At-home blood testing",
      "Priority medical support",
      "Long-term maintenance planning",
    ],
    icon: "unicon-building",
    buttonText: "Contact us",

    highlight: false,
  },
];

export const pricingPlans = [
  {
    title: "Starter",
    price: "$49",
    description: "For creating impressive tools that generate results.",
    features: [
      "Up to 10 individual users",
      "Basic reporting and analytics",
      "Project Management",
      "20GB individual data each user",
      "Basic chat and email support",
    ],
    linkText: "Get started",

    additionalClasses: "",
  },
  {
    title: "Pro",
    price: "$79",
    description: "For seamless integrations and sending tools in bulk.",
    features: [
      "Access to all Starter features",
      "200+ integrations",
      "Unlimited team workspaces",
      "Approval workflows",
      "Salesforce integration*",
    ],
    linkText: "Start a free trial",

    additionalClasses:
      "bg-gradient-45 from-secondary to-transparent dark:from-gray-700 sm:rounded-top-end-0 lg:rounded-top-start-0 lg:rounded-top-end-1-5",
    badge: "Popular",
  },
];

export const tiers2 = [
  {
    name: "Free",
    price: "$0",
    description: "Build a <b>hobby site</b> with every basic features.",
    details: "Free Forever!",
    buttonClass: "btn-secondary",
    features: [
      "Use on 1 website",
      "Personal License",
      "20 Basic Elements",
      "Basic Dynamic Data",
      "Basic Design Library",
      "Basic support",
    ],
  },
  {
    name: "Pro",
    price: "$79",
    description: "Build <b>one website</b> with every pro feature.",
    details: "Billed annually.",
    buttonClass: "btn-primary",
    features: [
      "Use on 1 website",
      "Personal License",
      "100 Pro Elements",
      "Full Dynamic Data",
      "Full Design Library",
      "Priority support",
    ],
    offer: "Save $25",
  },
  {
    name: "Agency",
    price: "$199",
    description: "Build <b>unlimited websites</b> with every pro feature",
    details: "Billed annually.",
    buttonClass: "btn-secondary",
    features: [
      "Use on unlimited websites",
      "Commercial License",
      "100 Pro Elements",
      "Full Dynamic Data",
      "Full Design Library",
      "Priority support",
    ],
  },
];

export const tiers3 = [
  {
    title: "Essentials",
    description: "For creating impressive tools that generate results.",
    price: "$19 USD",
    yearlyPrice: "$12 USD",
    priceDetails: "Seat per month, 2 seats max",
    linkText: "Start a free trial",
    linkSubtext: "No credit card required",
    features: [
      "Real-time tracking and notifications",
      "Real-time analytics",
      "Drag and drop templates",
      "Project Management",
      "24/7 email and chat support",
    ],
    isPopular: false,
  },
  {
    title: "Business",
    description: "For seamless integrations and sending tools in bulk.",
    price: "$49 USD",
    yearlyPrice: "$32 USD",
    priceDetails: "Seat cost per month",
    linkText: "Start a free trial",
    linkSubtext: "No credit card required",
    features: [
      "CRM and Zapier integrations",
      "Content reporting",
      "Unlimited team workspaces",
      "Approval workflows",
      "Salesforce integration*",
    ],
    isPopular: true,
  },
  {
    title: "Enterprise",
    description: "For large companies with complex Tool workflows.",
    price: "Let’s talk",
    yearlyPrice: "Let’s talk",
    priceDetails: "Per‑seat or per‑tool pricing",
    linkText: "Contact sales",
    linkSubtext: "Respond within 24 hrs max",
    features: [
      "Unlimited files uploads",
      "Real-time tracking and notifications",
      "User performance",
      "SSO support and custom user roles",
      "Bulk send & Forms*",
    ],
    isPopular: false,
  },
];

export const pricingPlans3 = [
  {
    title: "Starter",
    description: "For individuals, freelancers",
    price: 49,
    features: [
      "Fast and Reliable",
      "Discover Data Everywhere",
      "Enrich Data with Context",
      "Risk Management",
      "Privacy Compliance",
      "Third-Party Management",
    ],
    included: [true, true, false, false, false, false],
    link: "/sign-up",
    buttonClass: "btn-ghost-tertiary",
  },
  {
    title: "Pro",
    description: "For startups, agencies",
    price: 89,
    features: [
      "Fast and Reliable",
      "Discover Data Everywhere",
      "Enrich Data with Context",
      "Risk Management",
      "Privacy Compliance",
      "Third-Party Management",
    ],
    included: [true, true, true, true, false, false],
    link: "/sign-up",
    buttonClass: "btn-primary",
  },
  {
    title: "Business",
    description: "For large business, companies",
    price: 249,
    features: [
      "Fast and Reliable",
      "Discover Data Everywhere",
      "Enrich Data with Context",
      "Risk Management",
      "Privacy Compliance",
      "Third-Party Management",
    ],
    included: [true, true, true, true, true, true],
    link: "/page-contact-2",
    buttonClass: "btn-ghost-tertiary",
  },
];

export const pricingPlans4 = [
  {
    title: "FREE",
    description: "Free now and forever",
    descriptionYearly: "Free now and forever",
    price: 0,
    buttonText: "Get started",
    buttonClass:
      "btn btn-md btn-ghost-tertiary border border-dark dark:border-white dark:border-opacity-15 rounded-pill",
    features: [
      "Fast and Reliable",
      "Discover Data Everywhere",
      "Enrich Data with Context",
      "Risk Management",
    ],
  },
  {
    title: "Go PRO",
    description: "One month only",
    descriptionYearly: "One year only",
    price: 24,
    buttonText: "Try for free",
    buttonClass:
      "btn btn-md btn-primary border border-dark dark:border-white dark:border-opacity-15 rounded-pill",
    features: [
      "Fast and Reliable",
      "Discover Data Everywhere",
      "Enrich Data with Context",
      "Risk Management",
      "Privacy Compliance",
      "Third-Party Management",
    ],
  },
];

export const pricingPlans5 = [
  {
    title: "Starter",
    description: "For individuals, freelancers",
    price: 24,
    duration: "/ month",
    billed: "Billed once yearly",
    features: ["Fast and Reliable", "Discover Data Everywhere"],
    cta: {
      text: "Try for free",
      link: "/sign-up",
    },
    bgColor: "bg-gray-300 bg-opacity-15 text-white",
  },
  {
    title: "Pro",
    description: "For startups, agencies",
    price: 48,
    duration: "/ month",
    billed: "Billed once yearly",
    features: [
      "Fast and Reliable",
      "Discover Data Everywhere",
      "Enrich Data with Context",
      "Risk Management",
    ],
    cta: {
      text: "Try for free",
      link: "/sign-up",
    },
    bgColor: "bg-secondary text-dark shadow-xs",
  },
  {
    title: "Business",
    description: "For large business, companies",
    price: 64,
    duration: "/ month",
    billed: "Billed once yearly",
    features: [
      "Fast and Reliable",
      "Discover Data Everywhere",
      "Enrich Data with Context",
      "Risk Management",
      "Privacy Compliance",
      "Third-Party Management",
    ],
    cta: {
      text: "Get in touch",
      link: "/page-contact-2",
    },
    bgColor: "bg-gray-300 bg-opacity-15 text-white",
  },
];

// HealthFlexi Medical Weight Loss Plans with Indian Rupee Pricing
export const plans = [
  {
    id: 1,
    name: "Basic Plan",
    price: "₹15,999",
    period: "month",
    description: "Essential weight loss support with basic monitoring",
    isPopular: false,
    features: [
      "Monthly medical consultation",
      "Basic health monitoring",
      "Nutrition guidance",
      "Progress tracking",
      "Email support"
    ],
    cta: {
      text: "Get Started",
      href: "/mounjaro-assessment"
    }
  },
  {
    id: 2,
    name: "Standard Plan",
    price: "₹24,999",
    period: "month",
    description: "Comprehensive weight loss program with GLP-1 medication",
    isPopular: true,
    features: [
      "Weekly medical consultations",
      "GLP-1 medication included",
      "Blood tests and monitoring",
      "Side effect management",
      "Lifestyle coaching",
      "Priority support"
    ],
    cta: {
      text: "Check Eligibility",
      href: "/mounjaro-assessment"
    }
  },
  {
    id: 3,
    name: "Premium Plan",
    price: "₹34,999",
    period: "month",
    description: "Complete medical weight loss with premium Mounjaro treatment",
    isPopular: false,
    features: [
      "Daily medical support",
      "Premium Mounjaro medication",
      "Comprehensive lab testing",
      "Dedicated care coordinator",
      "At-home health monitoring",
      "24/7 priority support",
      "Long-term maintenance planning"
    ],
    cta: {
      text: "Contact Us",
      href: "/page-contact"
    }
  }
];
