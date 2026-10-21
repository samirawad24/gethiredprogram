// English copy. Every string on the page lives here (Spanish mirror: es.ts).
// Lines marked PLACEHOLDER need Ana's confirmation or real content before launch.

import legal from "./legal-en";

const en = {
  meta: {
    ogAlt: "Get Hired Program, career coaching with Ana Prato",
    home: {
      title: "Ana Prato, Career Coach | Get Hired Program",
      description:
        "One-to-one bilingual career coaching from a recruiter with 15+ years on the hiring side. A deliberately small practice, for students, recent graduates and career changers in the US and abroad. Book a free career kickoff call.",
    },
    about: {
      title: "About Ana Prato | Get Hired Program",
      description:
        "Fifteen years in talent acquisition, on the side of the table where hiring decisions get made. Why Ana keeps her client list short.",
    },
    services: {
      title: "Services: the eight-session program | Get Hired Program",
      description:
        "One eight-session program that covers your resume, LinkedIn, job search strategy, networking and mock interviews. One to one, at your own pace, in English or Spanish.",
    },
    parents: {
      title: "For parents: help your student get hired | Get Hired Program",
      description:
        "Your student gets a recruiter with 15+ years on the hiring side as their coach, one to one, in English or Spanish. You get to be the support system, not the project manager.",
    },
    contact: {
      title: "Book a free career kickoff call | Get Hired Program",
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
    parents: "For Parents",
    services: "Services",
    contact: "Contact",
    book: "Book a free kickoff call",
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
      "One-on-one coaching to help students and young professionals prepare, practice and get hired.",
    cta: "Book your free career kickoff call",
    note: ["Online", "English & Spanish"],
    imageAlt: "Ana Prato smiling at her desk with a laptop, an open notebook and a coffee mug",
  },
  help: {
    heading: "How can I help?",
    link: "See the full program",
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
      heading: "More than 15 years on the hiring side of the table.",
      lead: "I know how recruiters and hiring managers decide who gets the offer. I coach students and young professionals with that inside view.",
    },
    services: {
      eyebrow: "Services",
      heading: "Everything you need to stand out and get hired.",
      lead: "One eight-session program that covers your resume, LinkedIn, job search, networking and interviews.",
    },
    contact: {
      eyebrow: "Contact",
      heading: "Ready to take the next step?",
      lead: "Thirty minutes, no cost, wherever you are. Tell me where you are in your search and we will see whether the program fits.",
    },
  },
  services: {
    eyebrow: "Services",
    heading: "What we’ll work on together",
    allCta: "See all services",
    intro: "The four areas the program covers, all in one plan.",
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
      closing: "I'd love to help you take your next step. Book your free career kickoff call today!",
    },
    facts: [
      "15+ years in talent acquisition",
      "Bilingual: English and Spanish",
      "A short client list, on purpose",
      "Based in Ohio, coaching clients worldwide",
    ],
    cta: "Book your free career kickoff call",
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
    pace: "Your schedule, your pace.",
    intro:
      "Take one session a week, a few sessions in one week, or even the whole program in a single day. You decide what works best for you. To get the best results, the program should be completed within two months.",
    tagline: "Every session ends with real work done, not just advice.",
    stepLabel: "Session",
    leaveLabel: "You leave with:",
    // Ana's own words (2026-10-20 doc).
    steps: [
      {
        title: "Your Starting Point",
        text: "We talk about your major, your experience, your goals and what has held your search back. You fill out a Career Interest Form so we know exactly where to focus.",
        leave: "a personal job search game plan and clear goals.",
      },
      {
        title: "Your Strengths and Your Story",
        text: "We uncover what makes you stand out, including class projects, part-time jobs, clubs and volunteering. Everything counts.",
        leave: "a 30-second pitch for career fairs and a confident answer to “Tell me about yourself.”",
      },
      {
        title: "Target Roles and Companies",
        text: "We match your strengths to roles that fit and research the companies worth your time. You’ll learn to use company career sites and Handshake the smart way.",
        leave: "a target list of companies and job alerts working for you.",
      },
      {
        title: "A Resume That Gets Read",
        text: "We rewrite your resume together so it passes applicant tracking systems and impresses a real person. You’ll also learn how to use AI tools the right way in your search, without sounding like a robot.",
        leave: "a polished resume and a cover letter template you can tailor in minutes.",
      },
      {
        title: "A Profile Recruiters Can Find",
        text: "We build your LinkedIn and Handshake profiles step by step: headline, summary, photo, skills and the keywords recruiters search for.",
        leave: "complete, professional profiles that work for you 24/7.",
      },
      {
        title: "Networking and Career Fairs",
        text: "Networking is how most jobs get filled. We practice how to start conversations, ask for informational interviews and follow up.",
        leave: "ready-to-send LinkedIn messages, a career fair game plan and an outreach routine.",
      },
      {
        title: "Interview Preparation",
        text: "We break down how interviews really work and what recruiters listen for. You’ll learn the STAR method, build your best stories and practice answering the tough questions, in person and on video.",
        leave: "your top interview stories ready to go, a virtual interview checklist and thank-you email templates.",
      },
      {
        title: "Final Mock Interviews and Program Recap",
        text: "Time to put it all together. We run full mock interviews the way real recruiters do, with honest feedback so you walk into the real thing with confidence. Then we recap the most important lessons from the program, review your progress and answer any questions you still have.",
        leave: "real interview practice under your belt, a clear plan for your next steps and the confidence to keep going on your own.",
      },
    ],
  },
  afterProgram: {
    heading: "This isn’t goodbye.",
    text: "When the program ends, our relationship doesn’t. You and I stay in touch. Whether you have a question, need advice before an interview, want a second pair of eyes on an offer or just need some guidance along the way, I’ll be here for you, at no additional cost.",
    closing: "Great preparation doesn’t end with the program. Neither does my support.",
  },
  promise: {
    heading: "Preparation today opens the doors you want tomorrow.",
    sub: "Small, specific steps at your own pace, and a coach in your corner who keeps you on track.",
    cta: "Book your free career kickoff call",
    // Describes the brand art. Rewrite when a real photo replaces it.
    imageAlt:
      "An open notebook listing better resume, brighter opportunities and you got this, beside a pen and a Get Hired mug",
  },
  values: {
    items: ["Prepare.", "Practice.", "Get hired."],
  },
  testimonials: {
    eyebrow: "Real students. Real results.",
    heading: "What clients say",
    // Ana's clients, in their own words. Typos fixed, nothing reworded.
    prev: "Previous testimonial",
    next: "Next testimonial",
    goTo: "Show testimonial from",
    pause: "Pause testimonials",
    play: "Play testimonials",
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
          "Ana was instrumental in revitalizing my job search. She taught me instrumental tips and tricks in how to use LinkedIn, the best ways to interview, and how to put myself out there while networking. She and her connections have been truly wonderful people that are always willing to guide me through the current job market. After working with Ana, I feel ready and even a little excited to interview and see where I land.",
        name: "Alejandra B.",
        role: "Recent graduate",
      },
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
  // The For Parents page, Ana's copy word for word. Reached from the About
  // dropdown and the parents note on Home.
  parents: {
    hero: {
      eyebrow: "For parents",
      heading: "Help your student get hired, without the tension.",
      lead: "You’ve invested in their education. Let’s help them make the most of it.",
    },
    intro:
      "You’ve supported your student through school, and now comes one of the biggest steps: landing that internship or first full-time job. It’s natural to want to jump in and help.",
    // The quote is set in italics, with the rest of the paragraph around it.
    introQuote: {
      before: "Many parents tell me the same thing: ",
      quote: "“I try to give advice, but my kid doesn’t want to hear it from me.”",
      after:
        " That isn’t a reflection on you. At this age, guidance often lands better coming from an outside expert. My role is to be that person, so you can go back to being mom or dad.",
    },
    changed: {
      heading: "Why the job search feels different today",
      items: [
        { lead: "Applications are screened by software", rest: " before a human ever sees them." },
        { lead: "LinkedIn and networking", rest: " now drive a large share of hires, especially for entry-level roles." },
        { lead: "Interviews are often virtual or recorded", rest: ", with their own rules." },
        { lead: "Internships are often the path", rest: " to full-time offers." },
      ],
      closing:
        "What worked even 10 years ago doesn’t always work now. I’ve been on the hiring side for more than 15 years, so I know what recruiters look for today.",
    },
    gets: {
      heading: "What your student gets",
      items: [
        "One-on-one coaching sessions (45 minutes each, by video)",
        "A resume and LinkedIn profile rebuilt to get noticed",
        "A focused job search plan (no more applying to everything)",
        "Networking coaching and message templates",
        "Mock interviews with honest feedback",
        "Exclusive guides and checklists",
        "Coaching in English or Spanish",
        "Ongoing connection after the program ends",
      ],
    },
    small: {
      heading: "Why I keep my program small",
      text: "I work with only a few students at a time. Every student gets my full attention, and I stay connected with them well after the program ends.",
    },
    faq: {
      heading: "Questions parents ask",
      items: [
        {
          q: "Will you update me on my student’s progress?",
          a: [
            "In general, no, and that’s on purpose. Part of getting hired is learning to own your career. I treat your student as the young professional they’re becoming. They manage their sessions, their action items and their communication with me, just as they will with a future manager.",
            "That said, I’m not out of the picture. I’ll reach out to you directly if I see it’s needed, for example:",
          ],
          list: [
            "If your student stops showing up, following through or responding",
            "If I notice something affecting them that I believe you should know about",
          ],
          after:
            "When that happens, I’ll talk with your student first whenever possible, so there are no surprises. You’ll have peace of mind that I’m paying attention, and your student keeps the space to grow and speak openly.",
        },
        {
          q: "Do you guarantee a job?",
          a: [
            "No ethical coach can guarantee a job offer. What I guarantee is your student will have a stronger resume, a clear strategy and more confidence in interviews. I’ve seen how much those things change the outcome.",
          ],
          list: [] as string[],
          after: "",
        },
        {
          q: "My student isn’t sure what they want to do. Is this still a good fit?",
          a: ["Yes. We start by getting clear on direction and target roles before building the search around them."],
          list: [] as string[],
          after: "",
        },
      ],
    },
    cta: "Book your free career kickoff call",
  },
  cta: {
    heading: "Let’s talk about your next move.",
    button: "Book your free career kickoff call",
  },
  booking: {
    // Shown until NEXT_PUBLIC_CAL_LINK is set and the calendar replaces it.
    fallback:
      "To book your free career kickoff call, email Ana with a few times that work for you:",
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
