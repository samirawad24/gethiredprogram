// Spanish copy. Mirrors en.ts key by key; the shared Dictionary type makes the
// build fail if one language is missing a string.

const es = {
  meta: {
    ogAlt: "Get Hired Program, coaching de carrera con Ana Prato",
    home: {
      title: "Ana Prato, Coach de Carrera | Get Hired Program",
      description:
        "Coaching de carrera bilingüe y uno a uno, con una reclutadora con más de 15 años del lado de la contratación. Una práctica pequeña a propósito, para estudiantes, recién graduados y quienes cambian de carrera, dentro y fuera de Estados Unidos. Agenda una consulta gratuita.",
    },
    about: {
      title: "Sobre Ana Prato | Get Hired Program",
      description:
        "Quince años en adquisición de talento, del lado de la mesa donde se decide a quién contratar. Por qué Ana mantiene su lista de clientes corta, y con quién trabaja.",
    },
    services: {
      title: "Servicios y el programa de ocho sesiones | Get Hired Program",
      description:
        "Revisión de currículum, optimización de LinkedIn, preparación de entrevistas y estrategia de carrera, además del programa de ocho sesiones. Uno a uno, en español o inglés.",
    },
    contact: {
      title: "Agenda tu consulta gratuita | Get Hired Program",
      description:
        "Treinta minutos, sin costo. Elige la hora que te funcione, estés donde estés, y vemos si el programa es para ti.",
    },
  },
  skipLink: "Ir al contenido",
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    services: "Servicios",
    contact: "Contacto",
    book: "Agendar sesión",
    homeAria: "Inicio de Get Hired Program",
    primary: "Principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  languageToggle: {
    label: "English",
    ariaLabel: "View the site in English",
  },
  hero: {
    eyebrow: "Coaching de carrera uno a uno, en español e inglés",
    // Titular de dos líneas, segunda línea en dorado, como en los diseños.
    headlineLead: "Ya hiciste el trabajo.",
    headlineAccent: "Ahora consigamos el empleo.",
    // PLACEHOLDER: confirmar años de experiencia
    promise:
      "Llevo 15 años del lado de la contratación y te muestro cómo deciden los reclutadores, para que llegues listo a tu próxima entrevista.",
    cta: "Agenda tu consulta gratuita",
    secondaryCta: "Ver el programa",
    note: "Ana Prato · Coach de carrera · Más de 15 años del lado de la contratación · Clientes dentro y fuera de EE. UU.",
    // Describe la ilustración de marca. Reescribir cuando haya una foto real.
    imageAlt:
      "Un escritorio iluminado con una laptop, una taza de Get Hired y libros que dicen mejor currículum, mejores oportunidades, más confianza en ti",
  },
  // Un número de clientes iría en contra del mensaje: la práctica es pequeña
  // a propósito. Estos cuatro dicen cómo es el coaching, no cuánto ha habido.
  stats: {
    items: [
      { value: "15+", label: "Años en adquisición de talento" },
      { value: "1:1", label: "Cada sesión, uno a uno" },
      { value: "2", label: "Idiomas: español e inglés" },
      { value: "Global", label: "Clientes en EE. UU. y en el extranjero" },
    ],
  },
  // Introducciones de las páginas Sobre mí, Servicios y Contacto.
  pageHero: {
    about: {
      eyebrow: "Sobre mí",
      heading: "Quince años del otro lado de la mesa.",
      lead: "Sé cómo se toman de verdad las decisiones de contratación, porque yo las tomaba. Esto es lo que eso cambia en lo que trabajamos.",
    },
    services: {
      eyebrow: "Servicios",
      heading: "Todo lo que necesitas para destacar y ser contratado.",
      lead: "Cuatro formas en las que te ayudo, y el programa de ocho sesiones que las pone en orden.",
    },
    contact: {
      eyebrow: "Contacto",
      heading: "¿Listo para dar el siguiente paso?",
      lead: "Treinta minutos, sin costo, estés donde estés. Cuéntame en qué punto de tu búsqueda estás y vemos si el programa es para ti.",
    },
  },
  services: {
    eyebrow: "Servicios",
    heading: "Cómo te puedo ayudar",
    allCta: "Ver todos los servicios",
    intro: "Guía práctica, basada en cómo se toman de verdad las decisiones de contratación.",
    items: [
      {
        icon: "resume" as const,
        title: "Revisión de currículum",
        text: "Compatible con los filtros automáticos y escrito para los puestos que quieres.",
      },
      {
        icon: "linkedin" as const,
        title: "Optimización de LinkedIn",
        text: "Un titular, un resumen y palabras clave que los reclutadores buscan.",
      },
      {
        icon: "interview" as const,
        title: "Preparación de entrevistas",
        text: "Entrevistas simuladas con comentarios claros después de cada respuesta.",
      },
      {
        icon: "strategy" as const,
        title: "Estrategia de carrera",
        text: "Puestos objetivo, un plan de contacto y una historia que se sostiene.",
      },
    ],
  },
  approach: {
    eyebrow: "Cómo trabajo",
    heading: "Una práctica pequeña, a propósito.",
    intro:
      "Mantengo mi lista de clientes corta. Es la única forma de que cada currículum, cada entrevista de práctica y cada plan reciban atención de verdad, hechos para una persona y no salidos de una plantilla.",
    items: [
      {
        icon: "smallGroup" as const,
        title: "Pocos clientes a la vez",
        text: "Limito cuántas personas acepto, para que tus sesiones nunca se sientan hechas en serie.",
      },
      {
        icon: "tailored" as const,
        title: "Hecho para tus metas",
        text: "Cada sesión parte de dónde estás, los puestos que quieres y lo que de verdad te está frenando.",
      },
      {
        icon: "globe" as const,
        title: "Donde sea que estés",
        text: "El coaching es en línea, en español o inglés, para clientes dentro y fuera de Estados Unidos.",
      },
    ],
  },
  about: {
    eyebrow: "Sobre mí",
    heading: "Hola, soy Ana.",
    // PLACEHOLDER: confirmar empresas y trayectoria con Ana
    paragraphs: [
      "Llevo más de 15 años en adquisición de talento y operaciones de recursos humanos, incluyendo puestos en Amazon y Hillenbrand. He leído miles de currículums, he estado en las reuniones donde se decide a quién contratar y he visto a buenos candidatos perder ofertas por cosas que podían haber corregido en una tarde.",
      "Creé Get Hired Program para darte esa mirada desde adentro. Trabajamos tu currículum, tu LinkedIn, tus entrevistas y tu historia, en español o en inglés, hasta que estés listo para ir por el trabajo que quieres.",
    ],
    facts: [
      "Más de 15 años en adquisición de talento",
      "Bilingüe: español e inglés",
      "Lista de clientes corta, a propósito",
      "En Ohio, con clientes en todo el mundo",
    ],
    cta: "Trabajemos juntos",
    teaserCta: "Más sobre mí",
    // Describe la ilustración de marca. Reescribir cuando haya una foto real.
    imageAlt:
      "Un espacio de trabajo luminoso con una taza de Get Hired y libros que dicen habilidades, oportunidad y confianza",
  },
  audiences: {
    eyebrow: "Para quién es",
    heading: "Con quién trabajo",
    intro: "Elige el camino que se parece al tuyo.",
    students: {
      label: "Estudiantes y recién graduados",
      headline: "Consigue tu primer empleo con una reclutadora de tu lado",
      benefits: [
        "Convierte clases, prácticas y trabajos de medio tiempo en un currículum que consigue entrevistas.",
        "Arma un LinkedIn que los reclutadores encuentran y donde te quieren escribir.",
        "Practica tus respuestas hasta que suenen como tú en un buen día.",
      ],
      cta: "Planear mi primera búsqueda",
    },
    changers: {
      label: "Profesionales que cambian de carrera",
      headline: "Cambia de carrera sin empezar de cero",
      benefits: [
        "Identifica las habilidades que se transfieren y muestra cómo encajan en el nuevo campo.",
        "Cuenta tu cambio de carrera de forma que se entienda en 30 segundos.",
        "Apunta a puestos donde tus años de experiencia jueguen a tu favor.",
      ],
      cta: "Planear mi cambio de carrera",
    },
  },
  program: {
    eyebrow: "El programa",
    heading: "El programa de ocho sesiones",
    // PLACEHOLDER: confirmar formato y frecuencia de las sesiones
    intro:
      "Una sesión por semana durante ocho semanas. Terminas cada sesión con trabajo que puedes usar ese mismo día.",
    stepLabel: "Sesión",
    steps: [
      {
        title: "Dónde estás y a dónde vas",
        text: "Revisamos tu experiencia, tus metas y qué ha frenado tu búsqueda.",
      },
      {
        title: "Tus fortalezas y tu historia",
        text: "Sales con una respuesta clara de dos minutos a «háblame de ti».",
      },
      {
        title: "Puestos y empresas objetivo",
        text: "Elegimos los puestos que encajan y armamos una lista corta de empresas.",
      },
      {
        title: "Un currículum que pasa el filtro",
        text: "Reescribimos tu currículum para que pase los sistemas automáticos y se lea bien para una persona.",
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
  promise: {
    heading: "La disciplina de hoy construye la carrera que quieres mañana.",
    sub: "Trabajo concreto cada semana, y alguien que te mantiene en el camino.",
    cta: "Agendar sesión",
    // Describe la ilustración de marca. Reescribir cuando haya una foto real.
    imageAlt:
      "Un cuaderno abierto con la lista mejor currículum, mejores oportunidades y tú puedes, junto a un bolígrafo y una taza de Get Hired",
  },
  values: {
    items: ["Confianza hoy.", "Entrevistas mañana.", "Una carrera que te guste."],
  },
  testimonials: {
    eyebrow: "Estudiantes reales. Resultados reales.",
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
  cta: {
    heading: "Tu futuro te está esperando.",
    sub: "Vamos a que llegues listo.",
    button: "Agendar sesión",
  },
  booking: {
    fallback:
      "El calendario aparece aquí cuando configures NEXT_PUBLIC_CAL_LINK. Mientras tanto, escribe a",
    calendarTitle: "Calendario de reservas",
  },
  footer: {
    tagline: "Coaching de carrera uno a uno en español e inglés, donde sea que estés.",
    pages: "Páginas",
    contact: "Contacto",
    follow: "Sígueme",
    rights: "Todos los derechos reservados.",
  },
  schema: {
    jobTitle: "Coach de Carrera",
    serviceDescription:
      "Un programa de coaching de carrera uno a uno, de ocho sesiones, para estudiantes, recién graduados y profesionales que cambian de carrera, en español e inglés, con una lista de clientes corta a propósito y clientes dentro y fuera de Estados Unidos.",
  },
  // HERRAMIENTA DE VISTA PREVIA: borrar junto con ThemeSwitcher.tsx cuando se
  // elija una dirección de diseño.
  themePicker: {
    label: "Vista previa de diseño",
    classic: "1 · Limpio y clásico",
    bold: "2 · Moderno y llamativo",
    minimal: "3 · Elegante y minimalista",
    note: "Solo vista previa. Este panel no forma parte del sitio publicado.",
    hide: "Ocultar la vista previa de diseño",
  },
};

export default es;
