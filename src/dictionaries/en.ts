// English copy. Every string on the page lives here (Spanish mirror: es.ts).
// Lines marked PLACEHOLDER need Ana's confirmation or real content before launch.

const en = {
  meta: {
    ogAlt: "Get Hired Program, career coaching with Ana Prato",
    home: {
      title: "Ana Prato, Career Coach | Get Hired Program",
      description:
        "One-to-one bilingual career coaching from a recruiter with 15+ years on the hiring side. A deliberately small practice, for students, recent graduates and career changers in the US and abroad. Book a free consultation.",
    },
    about: {
      title: "About Ana Prato | Get Hired Program",
      description:
        "Fifteen years in talent acquisition, on the side of the table where hiring decisions get made. Why Ana keeps her client list short, and who she works with.",
    },
    services: {
      title: "Services and the eight-session program | Get Hired Program",
      description:
        "Resume review, LinkedIn optimization, interview preparation and career strategy, plus the eight-session program. One to one, in English or Spanish.",
    },
    contact: {
      title: "Book a free consultation | Get Hired Program",
      description:
        "Thirty minutes, no cost. Pick a time that works wherever you are, and we will see whether the program fits.",
    },
  },
  skipLink: "Skip to content",
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    book: "Book a session",
    homeAria: "Get Hired Program home",
    primary: "Main",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  languageToggle: {
    label: "Español",
    ariaLabel: "Ver el sitio en español",
  },
  hero: {
    eyebrow: "One-to-one career coaching, in English and Spanish",
    // Two-line headline, gold second line, as on the design boards.
    headlineLead: "You've done the work.",
    headlineAccent: "Now let's get you hired.",
    // PLACEHOLDER: confirm years of experience
    promise:
      "I've spent 15 years on the hiring side, and I'll show you how recruiters decide so you walk into your next interview ready.",
    cta: "Book a free consultation",
    secondaryCta: "See the program",
    note: "Ana Prato · Career coach · 15+ years on the hiring side · Clients in the US and abroad",
    // Describes the brand art. Rewrite when a real photo replaces it.
    imageAlt:
      "A sunlit desk with a laptop, a Get Hired mug, and a stack of books reading better resume, brighter opportunities, a more confident you",
  },
  // A head count would work against the pitch: the practice is small on
  // purpose. These four say what the coaching is instead of how much of it
  // there has been.
  stats: {
    items: [
      { value: "15+", label: "Years in talent acquisition" },
      { value: "1:1", label: "Every session, one to one" },
      { value: "2", label: "Languages: English and Spanish" },
      { value: "Global", label: "Clients in the US and abroad" },
    ],
  },
  // Page introductions for About, Services and Contact.
  pageHero: {
    about: {
      eyebrow: "About me",
      heading: "Fifteen years on the other side of the table.",
      lead: "I know how hiring decisions actually get made, because I used to make them. Here is how that changes what we work on.",
    },
    services: {
      eyebrow: "Services",
      heading: "Everything you need to stand out and get hired.",
      lead: "Four ways I help, and the eight-session program that puts them in order.",
    },
    contact: {
      eyebrow: "Contact",
      heading: "Ready to take the next step?",
      lead: "Thirty minutes, no cost, wherever you are. Tell me where you are in your search and we will see whether the program fits.",
    },
  },
  services: {
    eyebrow: "Services",
    heading: "How I can help",
    allCta: "See all services",
    intro: "Practical guidance, built on how hiring decisions actually get made.",
    items: [
      {
        icon: "resume" as const,
        title: "Resume review",
        text: "ATS-friendly and written for the roles you actually want.",
      },
      {
        icon: "linkedin" as const,
        title: "LinkedIn optimization",
        text: "A headline, summary and keywords recruiters search for.",
      },
      {
        icon: "interview" as const,
        title: "Interview preparation",
        text: "Mock interviews with straight feedback after every answer.",
      },
      {
        icon: "strategy" as const,
        title: "Career strategy",
        text: "Target roles, an outreach plan and a story that holds together.",
      },
    ],
  },
  approach: {
    eyebrow: "How I work",
    heading: "A small practice, on purpose.",
    intro:
      "I keep my client list short. It is the only way every resume, every mock interview and every plan gets real attention, built around one person instead of run off a template.",
    items: [
      {
        icon: "smallGroup" as const,
        title: "Only a few clients at a time",
        text: "I cap how many people I take on, so your sessions never feel like a production line.",
      },
      {
        icon: "tailored" as const,
        title: "Built around your goals",
        text: "Every session starts from where you are, the roles you want, and what is actually getting in the way.",
      },
      {
        icon: "globe" as const,
        title: "Wherever you are",
        text: "Coaching happens online, in English or Spanish, for clients inside and outside the United States.",
      },
    ],
  },
  about: {
    eyebrow: "About me",
    heading: "Hi, I'm Ana.",
    // PLACEHOLDER: confirm employers and background with Ana
    paragraphs: [
      "For more than 15 years I've worked in talent acquisition and HR operations, including roles at Amazon and Hillenbrand. I've read thousands of resumes, sat in hiring debriefs, and watched strong candidates lose offers over things they could have fixed in an afternoon.",
      "I started Get Hired Program to give you that inside view. We work on your resume, your LinkedIn, your interviews and your story, in English or Spanish, until you're ready to go after the job you want.",
    ],
    facts: [
      "15+ years in talent acquisition",
      "Bilingual: English and Spanish",
      "A short client list, on purpose",
      "Based in Ohio, coaching clients worldwide",
    ],
    cta: "Work with me",
    teaserCta: "More about me",
    // Describes the brand art. Rewrite when a real photo replaces it.
    imageAlt:
      "A bright workspace with a Get Hired mug and books reading skills, opportunity and confidence",
  },
  audiences: {
    eyebrow: "Who it's for",
    heading: "Who I work with",
    intro: "Pick the path that sounds like you.",
    students: {
      label: "Students and recent graduates",
      headline: "Land your first real job with a recruiter in your corner",
      benefits: [
        "Turn classes, internships and part-time jobs into a resume that earns interviews.",
        "Build a LinkedIn profile recruiters find and want to message.",
        "Practice interview answers until they sound like you on a good day.",
      ],
      cta: "Plan my first job search",
    },
    changers: {
      label: "Experienced professionals changing careers",
      headline: "Change careers without starting from zero",
      benefits: [
        "Name the skills that carry over and show how they fit the new field.",
        "Tell a career-change story a hiring manager understands in 30 seconds.",
        "Target roles where your years of experience count in your favor.",
      ],
      cta: "Plan my career change",
    },
  },
  program: {
    eyebrow: "The program",
    heading: "The eight-session program",
    // PLACEHOLDER: confirm session format and cadence
    intro:
      "One session a week for eight weeks. You finish each session with work you can use that same day.",
    stepLabel: "Session",
    steps: [
      {
        title: "Where you are, where you're going",
        text: "We map your experience, your goals and what has held your search back.",
      },
      {
        title: "Your strengths and your story",
        text: "You leave with a clear two-minute answer to \"tell me about yourself.\"",
      },
      {
        title: "Target roles and companies",
        text: "We pick the roles that fit and build a short list of companies to go after.",
      },
      {
        title: "A resume that passes the scan",
        text: "We rewrite your resume together so it clears applicant tracking systems and reads well to a person.",
      },
      {
        title: "A LinkedIn profile that gets found",
        text: "We fix your headline, summary and keywords so recruiters start showing up in your inbox.",
      },
      {
        title: "Networking and outreach",
        text: "You get message templates and a weekly plan for reaching the people who hire.",
      },
      {
        title: "Interview practice",
        text: "We run mock interviews the way I ran real ones, with straight feedback after each answer.",
      },
      {
        title: "Offers and your first 90 days",
        text: "We compare offers, rehearse the negotiation and plan how you start the new job.",
      },
    ],
  },
  promise: {
    heading: "Discipline today leads to the career you want tomorrow.",
    sub: "Small, specific work each week, and someone who keeps you honest about it.",
    cta: "Book a session",
    // Describes the brand art. Rewrite when a real photo replaces it.
    imageAlt:
      "An open notebook listing better resume, brighter opportunities and you got this, beside a pen and a Get Hired mug",
  },
  values: {
    items: ["Confidence today.", "Interviews tomorrow.", "A career you'll love."],
  },
  testimonials: {
    eyebrow: "Real students. Real results.",
    heading: "What clients say",
    // PLACEHOLDER: remove this note once real quotes are in
    placeholderNote: "Sample quotes for layout. Replace with real client stories before launch.",
    items: [
      {
        quote:
          "I had sent 60 applications with zero replies. Two weeks after we rebuilt my resume, I had three interviews.",
        name: "Placeholder Name",
        role: "Recent graduate, marketing",
      },
      {
        quote:
          "Ana helped me explain why a teacher belongs in corporate training. I start my new role next month.",
        name: "Placeholder Name",
        role: "Career changer, education to corporate training",
      },
      {
        quote:
          "Her mock interviews were harder than the real thing. By the final round I felt calm.",
        name: "Placeholder Name",
        role: "Engineering student",
      },
    ],
  },
  cta: {
    heading: "Your future is waiting.",
    sub: "Let's make sure you're ready for it.",
    button: "Book a session",
  },
  booking: {
    fallback:
      "The calendar appears here once NEXT_PUBLIC_CAL_LINK is set. Until then, email",
    calendarTitle: "Booking calendar",
  },
  footer: {
    tagline: "One-to-one career coaching in English and Spanish, wherever you are.",
    pages: "Pages",
    contact: "Contact",
    follow: "Follow",
    rights: "All rights reserved.",
  },
  schema: {
    jobTitle: "Career Coach",
    serviceDescription:
      "A one-to-one, eight-session career coaching program for students, recent graduates and professionals changing careers, taught in English and Spanish, with a deliberately short client list and clients in the United States and abroad.",
  },
  // PREVIEW TOOL: delete this block together with ThemeSwitcher.tsx once a
  // design direction is chosen.
  themePicker: {
    classic: "1 · Clean & classic",
    bold: "2 · Modern & bold",
    minimal: "3 · Elevated & minimal",
    editorial: "4 · Editorial luxury",
    product: "5 · Modern polish",
    statement: "6 · Bold statement",
    groupOriginal: "From the boards",
    groupPremium: "Premium directions",
    label: "Design preview",
    note: "Preview only. This panel is not part of the published site.",
    hide: "Hide the design preview",
  },
};

export type Dictionary = typeof en;
export default en;
