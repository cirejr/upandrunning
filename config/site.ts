import {
  Atom,
  BookOpen,
  Code2,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  Key,
  Settings,
  FileText,
  BarChart2,
  Folder,
  FolderOpen,
  PlusCircle,
  Users,
  User,
  Lock,
} from "lucide-react";

/* Replace the title and href of the links below with your own site navbar links*/
export const links = [
  /* if multiple pages, replace href with page path i.e "/features" instead of "#features" */
  { title: "Features", href: "#features" },
  { title: "Benefits", href: "#benefits" },
  { title: "Pricing", href: "#pricing" },
];

export const teams = [
  {
    name: "Acme Inc",
    logo: Atom,
    plan: "Enterprise",
  },
];

export const user = {
  id: "123e4567-e89b-12d3-a456-42",
  aud: "authenticated",
  role: "authenticated",
  email: "cire@example.com",
  email_confirmed_at: "2023-01-01T00:00:00.000Z",
  phone: "",
  confirmed_at: "2023-01-01T00:00:00.000Z",
  last_sign_in_at: "2023-01-01T00:00:00.000Z",
  app_metadata: {
    provider: "email",
    providers: ["email"],
  },
  user_metadata: {
    full_name: "Cire",
    avatar_url: "https://avatars.githubusercontent.com/u/101927?v=4",
  },
  identities: [],
  created_at: "2023-01-01T00:00:00.000Z",
  updated_at: "2023-01-01T00:00:00.000Z",
};
export const navMain = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: SquareTerminal,
  },
  {
    title: "Account",
    url: "/dashboard/account",
    icon: Settings2,
    items: [
      {
        title: "Manage Subscription",
        url: "#",
        icon: Settings,
        description: "Update your plan or payment details.",
      },
      {
        title: "Billing History",
        url: "#",
        icon: FileText,
        description: "Access your invoices and payment records.",
      },
      {
        title: "Usage Limits",
        url: "#",
        icon: BarChart2,
        description: "Monitor your API usage and plan limits.",
      },
    ],
  },
  {
    title: "Projects",
    url: "#",
    icon: Folder,
    items: [
      {
        title: "All Projects",
        url: "#",
        icon: FolderOpen,
        description: "Manage all your active and archived projects.",
      },
      {
        title: "New Project",
        url: "#",
        icon: PlusCircle,
        description: "Start a new project quickly.",
      },
    ],
  },
  {
    title: "Team",
    url: "#",
    icon: Users,
    items: [
      {
        title: "Manage Team",
        url: "#",
        icon: User,
        description: "Invite and manage team members.",
      },
      {
        title: "Roles & Permissions",
        url: "#",
        icon: Lock,
        description: "Define team roles and access levels.",
      },
    ],
  },
  {
    title: "API",
    url: "#",
    icon: Code2,
    items: [
      {
        title: "API Keys",
        url: "#",
        icon: Key,
        description: "Manage your API keys securely.",
      },
      {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
        description: "Explore API endpoints and examples.",
      },
    ],
  },
];

export const navSecondary = [
  {
    title: "Support",
    url: "#",
    icon: LifeBuoy,
  },
  {
    title: "Feedback",
    url: "#",
    icon: Send,
  },
];

export const projects = [
  {
    name: "Design Engineering",
    url: "#",
    icon: Frame,
  },
  {
    name: "Sales & Marketing",
    url: "#",
    icon: PieChart,
  },
  {
    name: "Travel",
    url: "#",
    icon: Map,
  },
];
