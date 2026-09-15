// English copy. Every string on the page lives here (Spanish mirror: es.ts).
// Lines marked PLACEHOLDER need Ana's confirmation or real content before launch.

const en = {
  meta: {
    title: "Ana Prato, Career Coach | Get Hired Program",
    description:
      "Bilingual career coaching from a recruiter with 15+ years on the hiring side. An eight-session program for students, recent graduates and career changers. Book a free consultation.",
    ogAlt: "Get Hired Program, career coaching with Ana Prato",
  },
  skipLink: "Skip to content",
  nav: {
    about: "About",
    program: "Program",
    testimonials: "Stories",
    book: "Book a call",
    home: "Get Hired Program home",
  },
  languageToggle: {
    label: "Español",
    ariaLabel: "Ver el sitio en español",
  },
  hero: {
    eyebrow: "Get Hired Program",
    role: "Career coach",
    // PLACEHOLDER: confirm years of experience
    promise:
      "I've spent 15 years on the hiring side, and I'll show you how recruiters decide so you walk into your next interview ready.",
    cta: "Book a free consultation",
    secondaryCta: "See the program",
    languages: "Coaching in English and Spanish",
    // PLACEHOLDER: rewrite to describe the real photo
    imageAlt: "Ana Prato, career coach, smiling in a bright home office",
  },
  about: {
    heading: "Hi, I'm Ana.",
    // PLACEHOLDER: confirm employers and background with Ana
    paragraphs: [
      "For more than 15 years I've worked in talent acquisition and HR operations, including roles at Amazon and Hillenbrand. I've read thousands of resumes, sat in hiring debriefs, and watched strong candidates lose offers over things they could have fixed in an afternoon.",
      "I started Get Hired Program to give you that inside view. We work on your resume, your LinkedIn, your interviews and your story, in English or Spanish, until you're ready to go after the job you want.",
    ],
    facts: [
      "15+ years in talent acquisition",
      "Bilingual: English and Spanish",
      "Based in Ohio, coaching online",
    ],
    // PLACEHOLDER: rewrite to describe the real photo
    imageAlt: "Ana Prato at her desk, reviewing a client's resume on a laptop",
  },
  audiences: {
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
  testimonials: {
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
  booking: {
    heading: "Book your free consultation",
    // PLACEHOLDER: confirm call length
    intro:
      "Thirty minutes, no cost. Tell me where you are and we'll see if the program fits.",
    fallback:
      "The calendar appears here once NEXT_PUBLIC_CAL_LINK is set. Until then, email",
    calendarTitle: "Booking calendar",
  },
  footer: {
    tagline: "Career coaching in English and Spanish.",
    contact: "Contact",
    follow: "Follow",
    rights: "All rights reserved.",
  },
  schema: {
    jobTitle: "Career Coach",
    serviceDescription:
      "An eight-session career coaching program for students, recent graduates and professionals changing careers, taught in English and Spanish.",
  },
};

export type Dictionary = typeof en;
export default en;
