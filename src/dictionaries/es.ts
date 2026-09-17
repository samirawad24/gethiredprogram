// Spanish copy. Mirrors en.ts key by key; the shared Dictionary type makes the
// build fail if one language is missing a string.

const es = {
  meta: {
    title: "Ana Prato, Coach de Carrera | Get Hired Program",
    description:
      "Coaching de carrera bilingüe con una reclutadora con más de 15 años del lado de la contratación. Un programa de ocho sesiones para estudiantes, recién graduados y quienes cambian de carrera. Agenda una consulta gratuita.",
    ogAlt: "Get Hired Program, coaching de carrera con Ana Prato",
  },
  skipLink: "Ir al contenido",
  nav: {
    about: "Sobre mí",
    services: "Servicios",
    program: "Programa",
    testimonials: "Historias",
    book: "Agendar sesión",
    home: "Inicio de Get Hired Program",
  },
  languageToggle: {
    label: "English",
    ariaLabel: "View the site in English",
  },
  hero: {
    eyebrow: "Coaching de carrera en español e inglés",
    // Titular de dos líneas, segunda línea en dorado, como en los diseños.
    headlineLead: "Ya hiciste el trabajo.",
    headlineAccent: "Ahora consigamos el empleo.",
    // PLACEHOLDER: confirmar años de experiencia
    promise:
      "Llevo 15 años del lado de la contratación y te muestro cómo deciden los reclutadores, para que llegues listo a tu próxima entrevista.",
    cta: "Agenda tu consulta gratuita",
    secondaryCta: "Ver el programa",
    note: "Ana Prato · Coach de carrera · Más de 15 años del lado de la contratación",
    // Describe la ilustración de marca. Reescribir cuando haya una foto real.
    imageAlt:
      "Un escritorio iluminado con una laptop, una taza de Get Hired y libros que dicen mejor currículum, mejores oportunidades, más confianza en ti",
  },
  stats: {
    // PLACEHOLDER: quitar esta nota cuando todos los números sean reales.
    placeholderNote:
      "Se muestran los números confirmados. Completa los que siguen con un guion antes de publicar.",
    items: [
      { value: "15+", label: "Años en adquisición de talento" },
      { value: "8", label: "Sesiones del programa" },
      { value: "2", label: "Idiomas: español e inglés" },
      // PLACEHOLDER: pedir a Ana el número real de personas asesoradas.
      { value: "—", label: "Estudiantes asesorados" },
    ],
  },
  services: {
    eyebrow: "Servicios",
    heading: "Cómo te puedo ayudar",
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
      "En Ohio, con coaching en línea",
    ],
    cta: "Trabajemos juntos",
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
    eyebrow: "Trabajemos juntos",
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
