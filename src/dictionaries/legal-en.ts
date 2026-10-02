// English policy pages. Spanish mirror: legal-es.ts.
// Tokens in curly braces become links or settings when the page renders:
// {email}, {legalName}, {location}, {privacy}, {terms}, {cookies}.
// Have a lawyer review these before relying on them.

export type LegalSection = { heading: string; body: string[]; list?: string[] };
type LegalPage = { eyebrow: string; heading: string; lead: string; sections: LegalSection[] };
export type LegalCopy = {
  updatedLabel: string;
  updated: string;
  privacy: LegalPage;
  terms: LegalPage;
  cookies: LegalPage;
};

const legalEn: LegalCopy = {
  updatedLabel: "Last updated",
  // Change this whenever a policy changes.
  updated: "October 1, 2026",
  privacy: {
    eyebrow: "Privacy",
    heading: "Privacy Policy",
    lead: "What we collect when you visit this site or book a session, why we collect it, and what you can ask us to do with it.",
    sections: [
      {
        heading: "Who we are",
        body: [
          "This site and the coaching it describes are run by {legalName}, based in {location}. In this policy, “we” and “us” mean Ana Prato and Get Hired Program. Questions about your information go to {email}.",
        ],
      },
      {
        heading: "What we collect",
        body: ["We only collect what we need to book and run your coaching:"],
        list: [
          "When you book a consultation: your name, email address, the time you choose, your time zone and anything you write in the booking form. Cal.com collects this for us.",
          "When you email us: your email address and whatever you include in your message.",
          "During coaching: what you choose to share with us, such as your resume, work history, LinkedIn profile and career goals.",
          "When you visit the site: our host, GitHub Pages, records technical data such as your IP address, browser type and the pages requested, so it can deliver the site and keep it secure. We do not use this data for marketing.",
        ],
      },
      {
        heading: "What we do not do",
        body: [
          "We do not use analytics, advertising pixels or tracking cookies on this site. We do not sell your personal information, share it for targeted advertising, or use it to make automated decisions about you.",
        ],
      },
      {
        heading: "How we use your information",
        body: ["We use it to:"],
        list: [
          "schedule, prepare for and run your sessions",
          "reply to your messages",
          "keep the business records the law requires, such as tax records",
          "keep this site working and secure",
        ],
      },
      {
        heading: "Legal bases (EU, EEA and UK visitors)",
        body: [
          "Where the GDPR or UK GDPR applies, we rely on: performing our agreement with you (booking and delivering coaching), our legitimate interests (replying to you, running and securing the site), legal obligations (business records), and your consent where we ask for it. You can withdraw consent at any time.",
        ],
      },
      {
        heading: "Who we share it with",
        body: [
          "We share information only with service providers that handle it on our behalf to deliver our services: Cal.com for scheduling, our email and calendar provider, the video meeting tool we use for sessions, and GitHub for hosting. We may also disclose information when the law requires it.",
          "If you follow our links to LinkedIn or Instagram, those sites’ own privacy policies apply.",
        ],
      },
      {
        heading: "How long we keep it",
        body: [
          "We keep your information only as long as we need it for the purposes above, or longer when the law requires it (for example, tax records). You can ask us to delete it sooner.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You can ask us to see the information we hold about you, correct it, delete it, give you a copy, or stop or limit how we use it. Depending on where you live (for example the EU, the UK, California, Mexico or Colombia), the law gives you some or all of these rights. We honor these requests from everyone.",
          "Email {email} and we will reply within 30 days. We will not treat you differently for asking. If you are in the EU, EEA or UK, you can also complain to your local data protection authority.",
        ],
      },
      {
        heading: "International transfers",
        body: [
          "We are based in the United States and our service providers store data there. If you are outside the US, your information is transferred to the US. Where the law requires it, our providers use safeguards such as the European Commission’s Standard Contractual Clauses.",
        ],
      },
      {
        heading: "Security",
        body: [
          "We use reasonable measures to protect your information, such as access controls and encrypted connections. No method of storage or transmission is completely secure, so we cannot guarantee absolute security.",
        ],
      },
      {
        heading: "Children",
        body: [
          "This site is not directed at children under 13, or under 16 in the EU, EEA and UK, and we do not knowingly collect their information. If you are under 18, a parent or guardian should contact us before you book.",
        ],
      },
      {
        heading: "Do Not Track",
        body: [
          "We do not track visitors across websites, so browser Do Not Track and Global Privacy Control signals do not change how this site behaves.",
        ],
      },
      {
        heading: "Changes to this policy",
        body: [
          "If we change this policy, we will update the date at the top of this page. Read our {cookies} for more on cookies.",
        ],
      },
    ],
  },
  terms: {
    eyebrow: "Terms",
    heading: "Terms and Conditions",
    lead: "The ground rules for using this site and working with us. Please read them before you book.",
    sections: [
      {
        heading: "About these terms",
        body: [
          "These terms apply to gethiredprogram.com and to the coaching services offered by {legalName} (“we” or “us”). By using the site or booking a session, you agree to them. Our {privacy} explains how we handle your information.",
        ],
      },
      {
        heading: "What we offer",
        body: [
          "One-to-one career coaching delivered online, in English or Spanish: resume and LinkedIn review, interview preparation and career strategy, either as single services or as the eight-session program.",
        ],
      },
      {
        heading: "No guarantee of a job",
        body: [
          "Coaching helps you present yourself and prepare, but employers make hiring decisions, not us. We do not guarantee interviews, job offers, a particular salary or any other result. Outcomes described on this site belong to the individuals involved; they are not typical or promised, and your results depend on your effort, your field and the job market.",
        ],
      },
      {
        heading: "What coaching is not",
        body: [
          "We are not an employment agency, recruiter or job placement service, and we do not place candidates with employers. We do not give legal, immigration, visa, tax, financial or mental health advice. For those, please speak with a licensed professional.",
        ],
      },
      {
        heading: "Your part",
        body: [
          "Please give us accurate information and come to sessions on time. You decide what to send to employers, and you are responsible for making sure your resume, profile and applications are truthful.",
        ],
      },
      {
        heading: "Booking, fees and cancellations",
        body: [
          // PLACEHOLDER: link the refund policy here once Ana sets her terms.
          "The first consultation is free. Fees, payment terms, and cancellation and refund terms for paid coaching are agreed with you in writing before your program starts. If those written terms differ from these, the written terms apply.",
        ],
      },
      {
        heading: "Confidentiality",
        body: [
          "What you share in sessions stays confidential and is used only to coach you, unless the law requires us to disclose it.",
        ],
      },
      {
        heading: "Testimonials",
        body: [
          "If you choose to give us a testimonial, you allow us to publish it on this site and our social media, under your name or initials as you prefer. We only publish real feedback from real clients, and you can ask us to remove yours at any time.",
        ],
      },
      {
        heading: "Our content",
        body: [
          "The text, logo, design and program materials on this site and in our sessions belong to Ana Prato and Get Hired Program. You may use the materials we give you for your own job search, but please do not copy, resell or publish them. Your resume and your own work stay yours.",
        ],
      },
      {
        heading: "Using this site",
        body: [
          "We try to keep this site accurate and available, but it is provided “as is”. Links to other sites, such as LinkedIn, Instagram and Cal.com, are for your convenience; we are not responsible for their content or practices.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          "To the fullest extent the law allows, we are not liable for indirect or consequential losses, including lost job opportunities or lost income, and our total liability for any claim is limited to the amount you paid us for the coaching in question. Nothing in these terms limits any liability or consumer right that cannot be limited by law.",
        ],
      },
      {
        heading: "Governing law",
        body: [
          "These terms are governed by the laws of the State of Ohio, United States. If you live outside the US, you keep any consumer protections that the law where you live does not allow us to remove.",
        ],
      },
      {
        heading: "Changes and contact",
        body: [
          "We may update these terms; the date at the top shows the latest version. Questions? Email {email}.",
        ],
      },
    ],
  },
  cookies: {
    eyebrow: "Cookies",
    heading: "Cookie Policy",
    lead: "The short version: this site sets no cookies of its own and runs no analytics or ad trackers, so there is nothing to accept or reject.",
    sections: [
      {
        heading: "What cookies are",
        body: [
          "Cookies are small files a website stores in your browser. Some are needed for a site to work; others track what you do for analytics or advertising. We use none of the second kind.",
        ],
      },
      {
        heading: "The booking calendar",
        body: [
          "When the booking calendar on our Contact page is active, it loads from Cal.com. Cal.com may set cookies or use similar browser storage that are strictly necessary for the calendar to work, for example to remember your time zone and keep the booking secure. Cal.com explains these in its own privacy policy at cal.com/privacy.",
        ],
      },
      {
        heading: "Fonts and other content",
        body: [
          "Our fonts are served from this site itself, so loading a page does not contact Google or any other font service. Our links to LinkedIn and Instagram set nothing until you click them; after that, those sites’ own policies apply.",
        ],
      },
      {
        heading: "Controlling cookies",
        body: [
          "You can block or delete cookies in your browser settings. If you block Cal.com’s cookies, the calendar may not work; you can always email {email} to book instead.",
        ],
      },
      {
        heading: "Changes",
        body: [
          "If we ever add analytics or other optional cookies, we will update this policy first and ask for your consent where the law requires it. Our {privacy} covers the rest of how we handle your information.",
        ],
      },
    ],
  },
};

export default legalEn;
