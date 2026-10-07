// English copy. Every string on the page lives here (Spanish mirror: es.ts).
// Lines marked PLACEHOLDER need Ana's confirmation or real content before launch.

import legal from "./legal-en";

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
    privacy: {
      title: "Privacy Policy | Get Hired Program",
      description: "What Get Hired Program collects when you visit or book, why, and the rights you have over it.",
    },
    terms: {
      title: "Terms and Conditions | Get Hired Program",
      description: "The terms for using gethiredprogram.com and working with Ana Prato, including our no-job-guarantee disclaimer.",
    },
    cookies: {
      title: "Cookie Policy | Get Hired Program",
      description: "This site sets no cookies of its own and runs no trackers. Here is what the booking calendar uses.",
    },
  },
  skipLink: "Skip to content",
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    book: "Book a free consultation",
    homeAria: "Get Hired Program home",
    primary: "Main",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  languageToggle: {
    label: "Language",
    en: "English",
    es: "Español",
  },
  // The goals band and the closing band follow the approved home page mockup
  // word for word. Hero and "How can I help?" carry Ana's own copy.
  hero: {
    eyebrow: "Career coaching with Ana Prato",
    headline: ["Your career starts with the right plan", "and Get Hired helps you build it."],
    promise:
      "One-on-one career coaching for students and young professionals ready to launch their careers.",
    cta: "Book a free consultation",
    note: ["Online", "English & Spanish"],
    // PLACEHOLDER: rewrite the alt text and delete the caption once Ana's
    // real portrait is in.
    imageAlt: "A smiling woman at a desk with a laptop, a notebook and a coffee mug",
    imageCaption: "Placeholder portrait · Ana’s photo goes here",
  },
  help: {
    heading: "How can I help?",
    link: "Explore service",
    items: [
      { title: "Resume and LinkedIn Optimization", text: "Crafted to get past ATS and stand out." },
      { title: "Job Search Strategy", text: "Company selection, personal branding, research and more." },
      { title: "Networking", text: "Build real connections that open doors." },
      { title: "Mock Interviews", text: "Real-time feedback to get you ready." },
    ],
  },
  goals: {
    heading: "Your goals. Personal support.",
    text: "Work one-to-one with Ana Prato, whether you’re starting your career or making a change.",
    link: "Meet Ana",
    // PLACEHOLDER: describes the stand-in photo.
    imageAlt: "A notebook and pen on a wooden desk",
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
    // Same four services, same titles, as "How can I help?" on the home page.
    items: [
      {
        icon: "resume" as const,
        title: "Resume and LinkedIn Optimization",
        text: "We rewrite your resume to get past ATS, then fix the LinkedIn headline, summary and keywords recruiters search for.",
      },
      {
        icon: "strategy" as const,
        title: "Job Search Strategy",
        text: "We pick your target companies, shape your personal brand and research each role before you apply.",
      },
      {
        icon: "networking" as const,
        title: "Networking",
        text: "You build real connections that open doors, with message templates and a weekly plan for reaching the people who hire.",
      },
      {
        icon: "interview" as const,
        title: "Mock Interviews",
        text: "You practice with someone who ran real interviews and get feedback in real time.",
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
    heading: "Hi, I'm Ana!",
    // Ana's own words. Her doc spells it "Hillebrand"; the company is Hillenbrand.
    paragraphs: [
      "I'm a Talent Acquisition expert with more than 15 years of recruiting experience at companies including Amazon, Cintas and Hillenbrand. I'm also an Amazon Bar Raiser, one of a select group of interviewers trained to stay objective and make sure every new hire raises the bar for talent across the company.",
    ],
    insider: {
      heading: "An insider's view of hiring",
      intro:
        "I've led campus recruiting efforts, so I know firsthand what employers look for in students and new graduates. My experience on the operational side of Talent Acquisition means I understand every step of the hiring process:",
      items: [
        "How Applicant Tracking Systems filter and rank resumes",
        "How recruiters decide who moves forward",
        "How hiring managers interview",
        "How teams debrief to choose the final candidate",
        "How job offers are put together",
      ],
      closing: "I'd love to help you take your next step. Book your free consultation today!",
    },
    facts: [
      "15+ years in talent acquisition",
      "Bilingual: English and Spanish",
      "A short client list, on purpose",
      "Based in Ohio, coaching clients worldwide",
    ],
    cta: "Book a free consultation",
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
    items: ["Confidence today.", "Interviews tomorrow.", "A career you’ll love."],
  },
  testimonials: {
    eyebrow: "Real students. Real results.",
    heading: "What clients say",
    // Ana's clients, in their own words. Typos fixed, nothing reworded.
    translatedNote: "",
    featured: {
      quote:
        "I spent months making little to no progress and had little understanding of how to approach interviews. After joining the program, I got offers from every interview I had.",
      name: "Mathias H.",
      role: "Aviation Maintenance Technician at FEMA",
    },
    items: [
      {
        quote:
          "Before working with Ana, I wasn't very confident when it came to interviewing, networking, or reaching out to potential employers. Through our work together, I became much more comfortable presenting my experiences, reaching out to people on LinkedIn, and having networking conversations because I felt prepared going into them. Overall, I feel much more confident navigating the job search and putting myself out there professionally.",
        name: "Brian C.",
        role: "Recent graduate, Environmental Science",
      },
      {
        quote:
          "I am very grateful for Ana's help! I was lost and did not know how to navigate the new ways of looking and applying for jobs. Ana helped me fix my resume and LinkedIn page. The resume was so good the manager that interviewed me mentioned that he did not have any questions because my resume was very good and precise. Ana also helped me prepare for my interview so that I could control it and feel confident about what I have to offer. I highly recommend Ana, she is a pro!",
        name: "Andres A.",
        role: "Sales Associate at Grubbs Acura",
      },
      {
        quote:
          "Before I started working with Ana I was just sending applications into the void and my interview skills were meh at best (depending on the situation). I didn't even consider a LinkedIn account. Ana even pointed out aspects of the process I was already confident in (like my resume) that were actually working against me. Now, I'm feeling a lot more confident in my interview skills and far more prepared for applying to my desired positions.",
        name: "Nico B.",
        role: "Fourth year Strategic Communications student",
      },
      {
        quote:
          "Ana has been a huge help throughout my recruiting process. She's given me a lot of direction on how to approach different opportunities and has helped me feel much more prepared and confident going into interviews. What I appreciate most is how available she is. Whenever I have a question or need advice, she's always willing to help and she's always there for me. Gracias por todo siempre!",
        name: "Luis F.",
        role: "Junior, FSU",
      },
    ],
  },
  cta: {
    heading: "Let’s talk about your next move.",
    button: "Book a free consultation",
  },
  booking: {
    // Shown until NEXT_PUBLIC_CAL_LINK is set and the calendar replaces it.
    fallback:
      "To book your free consultation, email Ana with a few times that work for you:",
    calendarTitle: "Booking calendar",
    consent: "By booking or emailing, you agree to our {terms} and confirm you have read our {privacy}. The booking calendar is run by Cal.com.",
  },
  footer: {
    legalNav: "Legal",
    rights: "All rights reserved.",
    disclaimer: "Career coaching, not a job placement service. Results vary and no job offer is guaranteed.",
  },
  legal,
  schema: {
    jobTitle: "Career Coach",
    serviceDescription:
      "A one-to-one, eight-session career coaching program for students, recent graduates and professionals changing careers, taught in English and Spanish, with a deliberately short client list and clients in the United States and abroad.",
  },
};

export type Dictionary = typeof en;
export default en;
