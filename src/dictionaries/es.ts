// Spanish copy. Mirrors en.ts key by key; the shared Dictionary type makes the
// build fail if one language is missing a string.

import legal from "./legal-es";

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
    privacy: {
      title: "Política de Privacidad | Get Hired Program",
      description: "Qué datos recopila Get Hired Program cuando visitas o agendas, para qué y qué derechos tienes sobre ellos.",
    },
    terms: {
      title: "Términos y Condiciones | Get Hired Program",
      description: "Los términos para usar gethiredprogram.com y trabajar con Ana Prato, incluido nuestro aviso de que no garantizamos empleo.",
    },
    cookies: {
      title: "Política de Cookies | Get Hired Program",
      description: "Este sitio no instala cookies propias ni usa rastreadores. Esto es lo que usa el calendario de reservas.",
    },
  },
  skipLink: "Ir al contenido",
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    services: "Servicios",
    contact: "Contacto",
    book: "Agenda una consulta gratis",
    homeAria: "Inicio de Get Hired Program",
    primary: "Principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  languageToggle: {
    label: "Idioma",
    en: "English",
    es: "Español",
  },
  // El hero, "¿Cómo puedo ayudarte?", la franja de metas y el cierre siguen
  // el diseño aprobado de la página de inicio.
  hero: {
    eyebrow: "Coaching de carrera con Ana Prato",
    headline: ["Tu carrera empieza con el plan correcto", "y Get Hired te ayuda a construirlo."],
    promise:
      "Coaching de carrera uno a uno para estudiantes y jóvenes profesionales listos para lanzar su carrera.",
    cta: "Agenda una consulta gratis",
    note: ["En línea", "Español e inglés"],
    // PLACEHOLDER: reescribir el texto alternativo y borrar la leyenda cuando
    // esté el retrato real de Ana.
    imageAlt: "Una mujer sonriente en un escritorio con una laptop, una libreta y una taza de café",
    imageCaption: "Retrato provisional · Aquí va la foto de Ana",
  },
  help: {
    heading: "¿Cómo puedo ayudarte?",
    link: "Ver servicio",
    items: [
      { title: "Optimización de CV y LinkedIn", text: "Hechos para superar los ATS y destacar." },
      { title: "Estrategia de búsqueda de empleo", text: "Selección de empresas, marca personal, investigación y más." },
      { title: "Networking", text: "Crea conexiones reales que abren puertas." },
      { title: "Entrevistas simuladas", text: "Retroalimentación en tiempo real para prepararte." },
    ],
  },
  goals: {
    heading: "Tus metas. Apoyo personal.",
    text: "Trabaja uno a uno con Ana Prato, ya sea que estés empezando tu carrera o haciendo un cambio.",
    link: "Conoce a Ana",
    // PLACEHOLDER: describe la foto provisional.
    imageAlt: "Una libreta y un bolígrafo sobre un escritorio de madera",
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
    heading: "¡Hola, soy Ana!",
    // Traducción del texto de Ana.
    paragraphs: [
      "Soy experta en adquisición de talento, con más de 15 años de experiencia en reclutamiento en empresas como Amazon, Cintas y Hillenbrand. También soy Bar Raiser de Amazon: formo parte de un grupo selecto de entrevistadores capacitados para mantener la objetividad y asegurar que cada nueva contratación eleve el nivel de talento de toda la empresa.",
    ],
    insider: {
      heading: "La contratación vista desde adentro",
      intro:
        "He liderado iniciativas de reclutamiento universitario, así que sé de primera mano qué buscan los empleadores en estudiantes y recién graduados. Mi experiencia en el lado operativo de la adquisición de talento me permite entender cada paso del proceso de contratación:",
      items: [
        "Cómo los sistemas de seguimiento de candidatos (ATS) filtran y clasifican los currículums",
        "Cómo los reclutadores deciden quién avanza",
        "Cómo entrevistan los gerentes de contratación",
        "Cómo los equipos deliberan para elegir al candidato final",
        "Cómo se arman las ofertas de trabajo",
      ],
      closing: "Me encantaría ayudarte a dar tu próximo paso. ¡Agenda tu consulta gratis hoy!",
    },
    facts: [
      "Más de 15 años en adquisición de talento",
      "Bilingüe: español e inglés",
      "Lista de clientes corta, a propósito",
      "En Ohio, con clientes en todo el mundo",
    ],
    cta: "Agenda una consulta gratis",
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
    // Clientes de Ana. Los testimonios originales están en inglés.
    translatedNote: "Testimonios traducidos del inglés.",
    featured: {
      quote:
        "Pasé meses avanzando poco o nada y entendía muy poco sobre cómo abordar las entrevistas. Después de entrar al programa, recibí ofertas en todas las entrevistas que tuve.",
      name: "Mathias H.",
      role: "Técnico de mantenimiento de aviación en FEMA",
    },
    items: [
      {
        quote:
          "Antes de trabajar con Ana, no tenía mucha confianza a la hora de hacer entrevistas, hacer networking o contactar a posibles empleadores. Gracias a nuestro trabajo juntos, me siento mucho más cómodo presentando mis experiencias, contactando a personas en LinkedIn y teniendo conversaciones de networking, porque llegaba preparado. En general, tengo mucha más confianza para manejar la búsqueda de empleo y darme a conocer profesionalmente.",
        name: "Brian C.",
        role: "Recién graduado, Ciencias Ambientales",
      },
      {
        quote:
          "¡Estoy muy agradecido por la ayuda de Ana! Estaba perdido y no sabía cómo manejar las nuevas formas de buscar y solicitar empleo. Ana me ayudó a arreglar mi currículum y mi página de LinkedIn. El currículum quedó tan bien que el gerente que me entrevistó comentó que no tenía preguntas, porque mi currículum era muy bueno y preciso. Ana también me ayudó a prepararme para la entrevista, para poder llevar el control y sentir confianza en lo que tengo para ofrecer. Recomiendo mucho a Ana, ¡es una profesional!",
        name: "Andres A.",
        role: "Asesor de ventas en Grubbs Acura",
      },
      {
        quote:
          "Antes de empezar a trabajar con Ana, enviaba solicitudes al vacío y mis habilidades para las entrevistas eran regulares en el mejor de los casos (según la situación). Ni siquiera había considerado tener una cuenta de LinkedIn. Ana incluso me señaló aspectos del proceso en los que ya tenía confianza (como mi currículum) y que en realidad me estaban perjudicando. Ahora tengo mucha más confianza en mis habilidades para las entrevistas y mucha más preparación para postularme a los puestos que quiero.",
        name: "Nico B.",
        role: "Estudiante de cuarto año de Comunicación Estratégica",
      },
      {
        quote:
          "Ana ha sido una gran ayuda durante todo mi proceso de reclutamiento. Me ha orientado mucho sobre cómo abordar distintas oportunidades y me ha ayudado a llegar a las entrevistas con mucha más preparación y confianza. Lo que más valoro es lo disponible que está. Cuando tengo una pregunta o necesito un consejo, siempre está dispuesta a ayudar y siempre está ahí para mí. ¡Gracias por todo siempre!",
        name: "Luis F.",
        role: "Estudiante de tercer año, FSU",
      },
    ],
  },
  cta: {
    heading: "Hablemos de tu próximo paso.",
    button: "Agenda una consulta gratis",
  },
  booking: {
    // Shown until NEXT_PUBLIC_CAL_LINK is set and the calendar replaces it.
    fallback:
      "Para agendar tu consulta gratuita, escríbele a Ana con algunos horarios que te funcionen:",
    calendarTitle: "Calendario de reservas",
    consent: "Al agendar o escribirnos, aceptas nuestros {terms} y confirmas que leíste nuestra {privacy}. El calendario de reservas funciona con Cal.com.",
  },
  footer: {
    legalNav: "Legal",
    rights: "Todos los derechos reservados.",
    disclaimer: "Coaching de carrera, no un servicio de colocación. Los resultados varían y no garantizamos ninguna oferta de empleo.",
  },
  legal,
  schema: {
    jobTitle: "Coach de Carrera",
    serviceDescription:
      "Un programa de coaching de carrera uno a uno, de ocho sesiones, para estudiantes, recién graduados y profesionales que cambian de carrera, en español e inglés, con una lista de clientes corta a propósito y clientes dentro y fuera de Estados Unidos.",
  },
};

export default es;
