// Spanish copy. Mirrors en.ts key by key; the shared Dictionary type makes the
// build fail if one language is missing a string.

import legal from "./legal-es";

const es = {
  meta: {
    ogAlt: "Get Hired Program, coaching de carrera con Ana Prato",
    home: {
      title: "Ana Prato, Coach de Carrera | Get Hired Program",
      description:
        "Coaching de carrera bilingüe y uno a uno, con una reclutadora con más de 15 años del lado de la contratación. Una práctica pequeña a propósito, para estudiantes, recién graduados y quienes cambian de carrera, dentro y fuera de Estados Unidos. Agenda tu llamada inicial gratis.",
    },
    about: {
      title: "Sobre Ana Prato | Get Hired Program",
      description:
        "Quince años en adquisición de talento, del lado de la mesa donde se decide a quién contratar. Por qué Ana mantiene su lista de clientes corta.",
    },
    services: {
      title: "Servicios: el programa de ocho sesiones | Get Hired Program",
      description:
        "Un programa de ocho sesiones que cubre tu currículum, LinkedIn, estrategia de búsqueda de empleo, networking y entrevistas simuladas. Uno a uno, a tu ritmo, en español o inglés.",
    },
    parents: {
      title: "Para padres: ayuda a tu hijo a conseguir empleo | Get Hired Program",
      description:
        "Tu hijo trabaja uno a uno con una reclutadora con más de 15 años del lado de la contratación, en español o en inglés. Tú vuelves a ser su apoyo, no su gerente de proyecto.",
    },
    contact: {
      title: "Agenda tu llamada inicial gratis | Get Hired Program",
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
    parents: "Para padres",
    services: "Servicios",
    contact: "Contacto",
    book: "Agenda tu llamada inicial",
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
      "Coaching uno a uno para ayudar a estudiantes y jóvenes profesionales a prepararse, practicar y conseguir empleo.",
    cta: "Agenda tu llamada inicial gratis",
    note: ["En línea", "Español e inglés"],
    imageAlt: "Ana Prato sonriendo en su escritorio con una laptop, una libreta abierta y una taza de café",
  },
  help: {
    heading: "¿Cómo puedo ayudarte?",
    link: "Ver el programa completo",
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
      heading: "Más de 15 años del lado de quienes contratan.",
      lead: "Sé cómo los reclutadores y los gerentes de contratación deciden quién recibe la oferta. Con esa mirada desde adentro, preparo a estudiantes y jóvenes profesionales.",
    },
    services: {
      eyebrow: "Servicios",
      heading: "Todo lo que necesitas para destacar y ser contratado.",
      lead: "Un programa de ocho sesiones que cubre tu currículum, LinkedIn, búsqueda de empleo, networking y entrevistas.",
    },
    contact: {
      eyebrow: "Contacto",
      heading: "¿Listo para dar el siguiente paso?",
      lead: "Treinta minutos, sin costo, estés donde estés. Cuéntame en qué punto de tu búsqueda estás y vemos si el programa es para ti.",
    },
  },
  services: {
    eyebrow: "Servicios",
    heading: "Lo que trabajaremos juntos",
    allCta: "Ver todos los servicios",
    intro: "Las cuatro áreas que cubre el programa, en un solo plan.",
    // Same four services, same titles, as "How can I help?" on the home page.
    items: [
      {
        icon: "resume" as const,
        title: "Optimización de CV y LinkedIn",
        text: "Reescribimos tu currículum para que supere los ATS y ajustamos el titular, el resumen y las palabras clave de LinkedIn que los reclutadores buscan.",
      },
      {
        icon: "strategy" as const,
        title: "Estrategia de búsqueda de empleo",
        text: "Elegimos tus empresas objetivo, definimos tu marca personal e investigamos cada puesto antes de que te postules.",
      },
      {
        icon: "networking" as const,
        title: "Networking",
        text: "Creas conexiones reales que abren puertas, con plantillas de mensajes y un plan semanal para llegar a quienes contratan.",
      },
      {
        icon: "interview" as const,
        title: "Entrevistas simuladas",
        text: "Practicas con alguien que dirigió entrevistas reales y recibes retroalimentación en tiempo real.",
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
      closing: "Me encantaría ayudarte a dar tu próximo paso. ¡Agenda hoy tu llamada inicial gratis!",
    },
    facts: [
      "Más de 15 años en adquisición de talento",
      "Bilingüe: español e inglés",
      "Lista de clientes corta, a propósito",
      "En Ohio, con clientes en todo el mundo",
    ],
    cta: "Agenda tu llamada inicial gratis",
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
    pace: "Tu horario, tu ritmo.",
    intro:
      "Toma una sesión por semana, varias sesiones en una semana o incluso el programa completo en un solo día. Tú decides lo que mejor te funciona. Para obtener los mejores resultados, el programa debe completarse en un plazo de dos meses.",
    tagline: "Cada sesión termina con trabajo real hecho, no solo con consejos.",
    stepLabel: "Sesión",
    leaveLabel: "Te llevas:",
    steps: [
      {
        title: "Tu punto de partida",
        text: "Hablamos de tu carrera universitaria, tu experiencia, tus metas y lo que ha frenado tu búsqueda. Llenas un Formulario de Intereses Profesionales para saber exactamente dónde enfocarnos.",
        leave: "un plan personal de búsqueda de empleo y metas claras.",
      },
      {
        title: "Tus fortalezas y tu historia",
        text: "Descubrimos lo que te hace destacar, incluidos proyectos de clase, trabajos de medio tiempo, clubes y voluntariado. Todo cuenta.",
        leave: "un pitch de 30 segundos para ferias de empleo y una respuesta segura a «Háblame de ti».",
      },
      {
        title: "Puestos y empresas objetivo",
        text: "Conectamos tus fortalezas con los puestos que encajan contigo e investigamos las empresas que valen tu tiempo. Aprenderás a usar los sitios de empleo de las empresas y Handshake de forma inteligente.",
        leave: "una lista de empresas objetivo y alertas de empleo trabajando para ti.",
      },
      {
        title: "Un currículum que sí se lee",
        text: "Reescribimos tu currículum juntos para que pase los sistemas de seguimiento de candidatos (ATS) y convenza a una persona real. También aprenderás a usar bien las herramientas de IA en tu búsqueda, sin sonar como un robot.",
        leave: "un currículum pulido y una plantilla de carta de presentación que adaptas en minutos.",
      },
      {
        title: "Un perfil que los reclutadores encuentran",
        text: "Construimos tus perfiles de LinkedIn y Handshake paso a paso: titular, resumen, foto, habilidades y las palabras clave que buscan los reclutadores.",
        leave: "perfiles completos y profesionales que trabajan para ti las 24 horas.",
      },
      {
        title: "Networking y ferias de empleo",
        text: "La mayoría de los empleos se consiguen gracias al networking. Practicamos cómo iniciar conversaciones, pedir entrevistas informativas y dar seguimiento.",
        leave: "mensajes de LinkedIn listos para enviar, un plan para ferias de empleo y una rutina de contacto.",
      },
      {
        title: "Preparación para entrevistas",
        text: "Vemos cómo funcionan de verdad las entrevistas y qué escuchan los reclutadores. Aprenderás el método STAR, armarás tus mejores historias y practicarás las preguntas difíciles, en persona y por video.",
        leave: "tus mejores historias para entrevistas, una lista de verificación para entrevistas virtuales y plantillas de correos de agradecimiento.",
      },
      {
        title: "Entrevistas simuladas finales y repaso del programa",
        text: "Es hora de unirlo todo. Hacemos entrevistas simuladas completas como las hacen los reclutadores de verdad, con comentarios honestos para que llegues a la entrevista real con confianza. Luego repasamos las lecciones más importantes del programa, revisamos tu progreso y respondemos las preguntas que aún tengas.",
        leave: "práctica real de entrevistas, un plan claro para tus próximos pasos y la confianza para seguir por tu cuenta.",
      },
    ],
  },
  afterProgram: {
    heading: "Esto no es un adiós.",
    text: "Cuando el programa termina, nuestra relación no. Seguimos en contacto. Ya sea que tengas una pregunta, necesites un consejo antes de una entrevista, quieras una segunda opinión sobre una oferta o simplemente necesites orientación en el camino, aquí estaré para ti, sin costo adicional.",
    closing: "Una buena preparación no termina con el programa. Mi apoyo tampoco.",
  },
  promise: {
    heading: "La preparación de hoy abre las puertas que quieres mañana.",
    sub: "Pasos pequeños y concretos a tu ritmo, y una coach de tu lado que te mantiene en el camino.",
    cta: "Agenda tu llamada inicial gratis",
    // Describe la ilustración de marca. Reescribir cuando haya una foto real.
    imageAlt:
      "Un cuaderno abierto con la lista mejor currículum, mejores oportunidades y tú puedes, junto a un bolígrafo y una taza de Get Hired",
  },
  values: {
    items: ["Prepárate.", "Practica.", "Consigue empleo."],
  },
  testimonials: {
    eyebrow: "Estudiantes reales. Resultados reales.",
    heading: "Lo que dicen mis clientes",
    // Clientes de Ana. Los testimonios originales están en inglés.
    prev: "Testimonio anterior",
    next: "Siguiente testimonio",
    goTo: "Ver testimonio de",
    pause: "Pausar testimonios",
    play: "Reproducir testimonios",
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
          "Ana fue clave para darle un nuevo impulso a mi búsqueda de empleo. Me enseñó consejos y trucos muy valiosos sobre cómo usar LinkedIn, las mejores formas de enfrentar una entrevista y cómo darme a conocer al hacer networking. Ella y sus contactos han sido personas realmente maravillosas, siempre dispuestas a guiarme en el mercado laboral actual. Después de trabajar con Ana, me siento lista e incluso un poco emocionada por tener entrevistas y ver dónde termino.",
        name: "Alejandra B.",
        role: "Recién graduada",
      },
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
  // La página Para padres, traducción fiel del texto de Ana. Se llega desde el
  // menú de Sobre mí y desde la nota para padres del inicio.
  parents: {
    hero: {
      eyebrow: "Para padres",
      heading: "Ayuda a tu hijo a conseguir empleo, sin tensiones.",
      lead: "Has invertido en su educación. Ayudémoslo a sacarle el máximo provecho.",
    },
    intro:
      "Has acompañado a tu hijo durante sus estudios y ahora llega uno de los pasos más importantes: conseguir esa pasantía o su primer empleo de tiempo completo. Es natural querer intervenir y ayudar.",
    introQuote: {
      before: "Muchos padres me dicen lo mismo: ",
      quote: "“Trato de darle consejos, pero no los quiere escuchar de mí”.",
      after:
        " No es un reflejo de ti. A esta edad, los consejos suelen llegar mejor cuando vienen de un experto externo. Mi papel es ser esa persona, para que tú puedas volver a ser mamá o papá.",
    },
    changed: {
      heading: "Por qué la búsqueda de empleo es distinta hoy",
      items: [
        { lead: "Un software filtra las postulaciones", rest: " antes de que una persona las vea." },
        { lead: "LinkedIn y el networking", rest: " generan hoy una gran parte de las contrataciones, sobre todo en puestos de nivel inicial." },
        { lead: "Las entrevistas suelen ser virtuales o grabadas", rest: ", con sus propias reglas." },
        { lead: "Las pasantías suelen ser el camino", rest: " hacia una oferta de tiempo completo." },
      ],
      closing:
        "Lo que funcionaba hace apenas 10 años no siempre funciona ahora. Llevo más de 15 años del lado de la contratación, así que sé lo que buscan hoy los reclutadores.",
    },
    gets: {
      heading: "Lo que recibe tu hijo",
      items: [
        "Sesiones de coaching uno a uno (de 45 minutos, por video)",
        "Un CV y un perfil de LinkedIn rehechos para llamar la atención",
        "Un plan de búsqueda enfocado (se acabó postularse a todo)",
        "Coaching de networking y plantillas de mensajes",
        "Entrevistas de práctica con comentarios honestos",
        "Guías y listas de verificación exclusivas",
        "Coaching en español o en inglés",
        "Contacto continuo después de terminar el programa",
      ],
    },
    small: {
      heading: "Por qué mantengo mi programa pequeño",
      text: "Trabajo con pocos estudiantes a la vez. Cada uno recibe toda mi atención y sigo en contacto con ellos mucho después de terminar el programa.",
    },
    faq: {
      heading: "Preguntas de los padres",
      items: [
        {
          q: "¿Me vas a informar sobre el progreso de mi hijo?",
          a: [
            "Por lo general, no, y es a propósito. Parte de conseguir empleo es aprender a hacerse cargo de la propia carrera. Trato a tu hijo como el joven profesional en el que se está convirtiendo. Él maneja sus sesiones, sus tareas y su comunicación conmigo, tal como lo hará con un futuro jefe.",
            "Dicho esto, no desaparezco. Me comunicaré contigo directamente si veo que hace falta, por ejemplo:",
          ],
          list: [
            "Si tu hijo deja de presentarse, de cumplir o de responder",
            "Si noto algo que lo está afectando y creo que deberías saberlo",
          ],
          after:
            "Cuando eso pase, hablaré primero con tu hijo siempre que sea posible, para que no haya sorpresas. Tendrás la tranquilidad de saber que estoy pendiente, y tu hijo conserva el espacio para crecer y hablar con libertad.",
        },
        {
          q: "¿Garantizas un empleo?",
          a: [
            "Ningún coach ético puede garantizar una oferta de empleo. Lo que sí garantizo es que tu hijo tendrá un CV más sólido, una estrategia clara y más confianza en las entrevistas. He visto cuánto cambian esas cosas el resultado.",
          ],
          list: [],
          after: "",
        },
        {
          q: "Mi hijo no sabe bien qué quiere hacer. ¿Le sirve el programa?",
          a: ["Sí. Empezamos por definir el rumbo y los puestos a los que apunta, y después armamos la búsqueda alrededor de eso."],
          list: [],
          after: "",
        },
      ],
    },
    cta: "Agenda tu llamada inicial gratis",
  },
  cta: {
    heading: "Hablemos de tu próximo paso.",
    button: "Agenda tu llamada inicial gratis",
  },
  booking: {
    // Shown until NEXT_PUBLIC_CAL_LINK is set and the calendar replaces it.
    fallback:
      "Para agendar tu llamada inicial gratis, escríbele a Ana con algunos horarios que te funcionen:",
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
