// Spanish copy. Mirrors en.ts key for key; TypeScript flags any missing string.
// Lines marked PLACEHOLDER need Ana's confirmation or real content before launch.

import type { Dictionary } from "./en";

const es: Dictionary = {
  meta: {
    title: "Ana Prato, Coach de Carrera | Get Hired Program",
    description:
      "Coaching de carrera bilingüe con una reclutadora con más de 15 años de experiencia. Un programa de ocho sesiones para estudiantes, recién graduados y profesionales que quieren cambiar de carrera. Agenda una consulta gratuita.",
    ogAlt: "Get Hired Program, coaching de carrera con Ana Prato",
  },
  skipLink: "Saltar al contenido",
  nav: {
    about: "Sobre mí",
    program: "Programa",
    testimonials: "Testimonios",
    book: "Agendar",
    home: "Inicio de Get Hired Program",
  },
  languageToggle: {
    label: "English",
    ariaLabel: "View the site in English",
  },
  hero: {
    eyebrow: "Get Hired Program",
    role: "Coach de carrera",
    // PLACEHOLDER: confirmar años de experiencia
    promise:
      "Llevo más de 15 años del lado de quien contrata, y te muestro cómo deciden los reclutadores para que llegues a tu próxima entrevista con confianza.",
    cta: "Agenda una consulta gratuita",
    secondaryCta: "Ver el programa",
    languages: "Coaching en español e inglés",
    // PLACEHOLDER: describir la foto real
    imageAlt: "Ana Prato, coach de carrera, sonriendo en una oficina luminosa en casa",
  },
  about: {
    heading: "Hola, soy Ana.",
    // PLACEHOLDER: confirmar empresas y trayectoria con Ana
    paragraphs: [
      "Durante más de 15 años he trabajado en adquisición de talento y operaciones de recursos humanos, en empresas como Amazon y Hillenbrand. He leído miles de currículums, he estado en reuniones de contratación y he visto a buenos candidatos perder ofertas por detalles que podían resolver en una tarde.",
      "Creé Get Hired Program para darte esa mirada desde adentro. Trabajamos tu currículum, tu LinkedIn, tus entrevistas y tu historia, en español o en inglés, hasta que tengas todo listo para ir por el trabajo que quieres.",
    ],
    facts: [
      "Más de 15 años en adquisición de talento",
      "Bilingüe: español e inglés",
      "Desde Ohio, coaching en línea",
    ],
    // PLACEHOLDER: describir la foto real
    imageAlt: "Ana Prato en su escritorio, revisando el currículum de un cliente en su laptop",
  },
  audiences: {
    heading: "Con quién trabajo",
    intro: "Elige el camino que se parece a ti.",
    students: {
      label: "Estudiantes y recién graduados",
      headline: "Consigue tu primer trabajo con una reclutadora de tu lado",
      benefits: [
        "Convierte tus clases, pasantías y trabajos de medio tiempo en un currículum que consigue entrevistas.",
        "Crea un perfil de LinkedIn que los reclutadores encuentren y quieran contactar.",
        "Practica tus respuestas de entrevista hasta que suenen a ti en tu mejor día.",
      ],
      cta: "Planear mi primera búsqueda",
    },
    changers: {
      label: "Profesionales con experiencia que quieren cambiar de carrera",
      headline: "Cambia de carrera sin empezar de cero",
      benefits: [
        "Identifica las habilidades que te llevas y muestra cómo encajan en el nuevo campo.",
        "Cuenta tu cambio de carrera en una historia que un gerente entiende en 30 segundos.",
        "Apunta a puestos donde tus años de experiencia juegan a tu favor.",
      ],
      cta: "Planear mi cambio de carrera",
    },
  },
  program: {
    heading: "El programa de ocho sesiones",
    // PLACEHOLDER: confirmar formato y frecuencia
    intro:
      "Una sesión por semana durante ocho semanas. Terminas cada sesión con algo que puedes usar ese mismo día.",
    stepLabel: "Sesión",
    steps: [
      {
        title: "Dónde estás y a dónde vas",
        text: "Revisamos tu experiencia, tus metas y lo que ha frenado tu búsqueda.",
      },
      {
        title: "Tus fortalezas y tu historia",
        text: "Sales con una respuesta clara de dos minutos para «háblame de ti».",
      },
      {
        title: "Puestos y empresas objetivo",
        text: "Elegimos los puestos que te quedan y armamos una lista corta de empresas.",
      },
      {
        title: "Un currículum que pasa el filtro",
        text: "Reescribimos juntos tu currículum para que pase los sistemas de selección y una persona lo lea con gusto.",
      },
      {
        title: "Un LinkedIn que te encuentren",
        text: "Ajustamos tu titular, tu resumen y tus palabras clave para que los reclutadores te escriban.",
      },
      {
        title: "Networking y contacto",
        text: "Recibes plantillas de mensajes y un plan semanal para llegar a quienes contratan.",
      },
      {
        title: "Práctica de entrevistas",
        text: "Hacemos entrevistas simuladas como las que yo dirigía, con comentarios claros después de cada respuesta.",
      },
      {
        title: "Ofertas y tus primeros 90 días",
        text: "Comparamos ofertas, ensayamos la negociación y planeamos cómo empiezas en el nuevo trabajo.",
      },
    ],
  },
  testimonials: {
    heading: "Lo que dicen mis clientes",
    // PLACEHOLDER: quitar esta nota cuando haya testimonios reales
    placeholderNote:
      "Testimonios de ejemplo para el diseño. Reemplázalos con historias reales antes de publicar.",
    items: [
      {
        quote:
          "Había enviado 60 solicitudes sin ninguna respuesta. Dos semanas después de rehacer mi currículum, tenía tres entrevistas.",
        name: "Nombre de ejemplo",
        role: "Recién graduada, marketing",
      },
      {
        quote:
          "Ana me ayudó a explicar por qué una maestra encaja en capacitación corporativa. Empiezo mi nuevo puesto el próximo mes.",
        name: "Nombre de ejemplo",
        role: "Cambio de carrera, de educación a capacitación corporativa",
      },
      {
        quote:
          "Sus entrevistas de práctica eran más difíciles que las reales. En la ronda final llegué con calma.",
        name: "Nombre de ejemplo",
        role: "Estudiante de ingeniería",
      },
    ],
  },
  booking: {
    heading: "Agenda tu consulta gratuita",
    // PLACEHOLDER: confirmar duración de la llamada
    intro:
      "Treinta minutos, sin costo. Cuéntame dónde estás y vemos si el programa es para ti.",
    fallback:
      "El calendario aparece aquí cuando configures NEXT_PUBLIC_CAL_LINK. Mientras tanto, escribe a",
    calendarTitle: "Calendario de reservas",
  },
  footer: {
    tagline: "Coaching de carrera en español e inglés.",
    contact: "Contacto",
    follow: "Sígueme",
    rights: "Todos los derechos reservados.",
  },
  schema: {
    jobTitle: "Coach de Carrera",
    serviceDescription:
      "Un programa de coaching de carrera de ocho sesiones para estudiantes, recién graduados y profesionales que cambian de carrera, en español e inglés.",
  },
};

export default es;
