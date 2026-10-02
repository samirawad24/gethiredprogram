// Páginas legales en español. Refleja legal-en.ts sección por sección.
// Los tokens entre llaves se convierten en enlaces o datos al mostrarse:
// {email}, {legalName}, {location}, {privacy}, {terms}, {cookies}.

import type { LegalCopy } from "./legal-en";

const legalEs: LegalCopy = {
  updatedLabel: "Última actualización",
  updated: "1 de octubre de 2026",
  privacy: {
    eyebrow: "Privacidad",
    heading: "Política de Privacidad",
    lead: "Qué datos recopilamos cuando visitas este sitio o agendas una sesión, para qué los usamos y qué puedes pedirnos que hagamos con ellos.",
    sections: [
      {
        heading: "Quiénes somos",
        body: [
          "Este sitio y el coaching que describe están a cargo de {legalName}, con sede en {location}. En esta política, “nosotros” se refiere a Ana Prato y Get Hired Program. Cualquier pregunta sobre tus datos, escríbenos a {email}.",
        ],
      },
      {
        heading: "Qué datos recopilamos",
        body: ["Solo recopilamos lo necesario para agendar y llevar a cabo tu coaching:"],
        list: [
          "Al agendar una consulta: tu nombre, correo electrónico, el horario que elijas, tu zona horaria y lo que escribas en el formulario de reserva. Cal.com recopila estos datos por nosotros.",
          "Al escribirnos: tu correo electrónico y lo que incluyas en tu mensaje.",
          "Durante el coaching: lo que decidas compartir, como tu currículum, tu experiencia laboral, tu perfil de LinkedIn y tus metas profesionales.",
          "Al visitar el sitio: nuestro proveedor de alojamiento, GitHub Pages, registra datos técnicos como tu dirección IP, el tipo de navegador y las páginas solicitadas, para entregar el sitio y mantenerlo seguro. No usamos estos datos con fines de marketing.",
        ],
      },
      {
        heading: "Lo que no hacemos",
        body: [
          "No usamos analítica, píxeles publicitarios ni cookies de rastreo en este sitio. No vendemos tus datos personales, no los compartimos para publicidad dirigida y no los usamos para tomar decisiones automatizadas sobre ti.",
        ],
      },
      {
        heading: "Cómo usamos tus datos",
        body: ["Los usamos para:"],
        list: [
          "agendar, preparar y llevar a cabo tus sesiones",
          "responder a tus mensajes",
          "conservar los registros que exige la ley, como los fiscales",
          "mantener este sitio en funcionamiento y seguro",
        ],
      },
      {
        heading: "Bases legales (visitantes de la UE, el EEE y el Reino Unido)",
        body: [
          "Cuando aplica el RGPD o el RGPD del Reino Unido, nos basamos en: la ejecución de nuestro acuerdo contigo (agendar y dar el coaching), nuestro interés legítimo (responderte, operar y proteger el sitio), obligaciones legales (registros del negocio) y tu consentimiento cuando te lo pedimos. Puedes retirar tu consentimiento en cualquier momento.",
        ],
      },
      {
        heading: "Con quién los compartimos",
        body: [
          "Solo compartimos datos con proveedores que los tratan en nuestro nombre para prestar nuestros servicios: Cal.com para las reservas, nuestro proveedor de correo y calendario, la herramienta de videollamadas que usamos en las sesiones y GitHub para el alojamiento. También podemos revelar datos cuando la ley lo exija.",
          "Si sigues nuestros enlaces a LinkedIn o Instagram, se aplican las políticas de privacidad de esos sitios.",
        ],
      },
      {
        heading: "Cuánto tiempo los conservamos",
        body: [
          "Conservamos tus datos solo mientras los necesitemos para los fines anteriores, o más tiempo si la ley lo exige (por ejemplo, los registros fiscales). Puedes pedirnos que los borremos antes.",
        ],
      },
      {
        heading: "Tus derechos",
        body: [
          "Puedes pedirnos ver los datos que tenemos sobre ti, corregirlos, borrarlos, recibir una copia, o dejar de usarlos o limitar su uso. Según dónde vivas (por ejemplo, la UE, el Reino Unido, California, México o Colombia), la ley te otorga algunos o todos estos derechos. Atendemos estas solicitudes de todas las personas.",
          "Escribe a {email} y te responderemos en un plazo de 30 días. No te trataremos de forma distinta por pedirlo. Si estás en la UE, el EEE o el Reino Unido, también puedes presentar una reclamación ante tu autoridad local de protección de datos.",
        ],
      },
      {
        heading: "Transferencias internacionales",
        body: [
          "Estamos en Estados Unidos y nuestros proveedores almacenan los datos allí. Si estás fuera de EE. UU., tus datos se transfieren a ese país. Cuando la ley lo exige, nuestros proveedores aplican garantías como las Cláusulas Contractuales Tipo de la Comisión Europea.",
        ],
      },
      {
        heading: "Seguridad",
        body: [
          "Aplicamos medidas razonables para proteger tus datos, como controles de acceso y conexiones cifradas. Ningún método de almacenamiento o transmisión es completamente seguro, por lo que no podemos garantizar una seguridad absoluta.",
        ],
      },
      {
        heading: "Menores de edad",
        body: [
          "Este sitio no está dirigido a menores de 13 años, ni a menores de 16 en la UE, el EEE y el Reino Unido, y no recopilamos sus datos a sabiendas. Si tienes menos de 18 años, tu madre, padre o tutor debe contactarnos antes de que agendes.",
        ],
      },
      {
        heading: "Señales de no rastreo",
        body: [
          "No rastreamos a los visitantes entre sitios web, así que las señales Do Not Track y Global Privacy Control del navegador no cambian el funcionamiento de este sitio.",
        ],
      },
      {
        heading: "Cambios en esta política",
        body: [
          "Si cambiamos esta política, actualizaremos la fecha al inicio de esta página. Consulta nuestra {cookies} para saber más sobre las cookies.",
        ],
      },
    ],
  },
  terms: {
    eyebrow: "Términos",
    heading: "Términos y Condiciones",
    lead: "Las reglas para usar este sitio y trabajar con nosotros. Léelas antes de agendar.",
    sections: [
      {
        heading: "Sobre estos términos",
        body: [
          "Estos términos se aplican a gethiredprogram.com y a los servicios de coaching que ofrece {legalName} (“nosotros”). Al usar el sitio o agendar una sesión, los aceptas. Nuestra {privacy} explica cómo tratamos tus datos.",
        ],
      },
      {
        heading: "Qué ofrecemos",
        body: [
          "Coaching de carrera uno a uno, en línea, en español o inglés: revisión de currículum y LinkedIn, preparación de entrevistas y estrategia de carrera, como servicios individuales o como el programa de ocho sesiones.",
        ],
      },
      {
        heading: "Sin garantía de empleo",
        body: [
          "El coaching te ayuda a presentarte y prepararte, pero las decisiones de contratación las toman los empleadores, no nosotros. No garantizamos entrevistas, ofertas de trabajo, un salario determinado ni ningún otro resultado. Los resultados que se mencionan en este sitio pertenecen a cada persona; no son típicos ni prometidos, y los tuyos dependen de tu esfuerzo, tu campo y el mercado laboral.",
        ],
      },
      {
        heading: "Lo que el coaching no es",
        body: [
          "No somos una agencia de empleo, reclutadora ni servicio de colocación, y no colocamos candidatos con empleadores. No damos asesoría legal, migratoria, de visas, fiscal, financiera ni de salud mental. Para eso, consulta a un profesional con licencia.",
        ],
      },
      {
        heading: "Tu parte",
        body: [
          "Danos información veraz y llega a tiempo a tus sesiones. Tú decides qué envías a los empleadores y eres responsable de que tu currículum, tu perfil y tus postulaciones sean verídicos.",
        ],
      },
      {
        heading: "Reservas, tarifas y cancelaciones",
        body: [
          // PLACEHOLDER: enlazar la política de reembolsos cuando Ana defina sus términos.
          "La primera consulta es gratuita. Las tarifas, las condiciones de pago y las condiciones de cancelación y reembolso del coaching pagado se acuerdan contigo por escrito antes de que empiece tu programa. Si esas condiciones escritas difieren de estas, prevalecen las escritas.",
        ],
      },
      {
        heading: "Confidencialidad",
        body: [
          "Lo que compartes en las sesiones es confidencial y solo se usa para tu coaching, salvo que la ley nos obligue a revelarlo.",
        ],
      },
      {
        heading: "Testimonios",
        body: [
          "Si decides darnos un testimonio, nos autorizas a publicarlo en este sitio y en nuestras redes sociales, con tu nombre o tus iniciales, como prefieras. Solo publicamos opiniones reales de clientes reales, y puedes pedirnos que retiremos la tuya en cualquier momento.",
        ],
      },
      {
        heading: "Nuestro contenido",
        body: [
          "Los textos, el logotipo, el diseño y los materiales del programa de este sitio y de nuestras sesiones pertenecen a Ana Prato y Get Hired Program. Puedes usar los materiales que te damos para tu propia búsqueda de empleo, pero no los copies, revendas ni publiques. Tu currículum y tu propio trabajo siguen siendo tuyos.",
        ],
      },
      {
        heading: "Uso de este sitio",
        body: [
          "Procuramos que este sitio sea exacto y esté disponible, pero se ofrece “tal cual”. Los enlaces a otros sitios, como LinkedIn, Instagram y Cal.com, son para tu comodidad; no somos responsables de su contenido ni de sus prácticas.",
        ],
      },
      {
        heading: "Limitación de responsabilidad",
        body: [
          "En la máxima medida que permita la ley, no respondemos por pérdidas indirectas o consecuentes, incluidas oportunidades de empleo o ingresos perdidos, y nuestra responsabilidad total por cualquier reclamación se limita al monto que nos pagaste por el coaching en cuestión. Nada en estos términos limita una responsabilidad o un derecho del consumidor que la ley no permita limitar.",
        ],
      },
      {
        heading: "Ley aplicable",
        body: [
          "Estos términos se rigen por las leyes del Estado de Ohio, Estados Unidos. Si vives fuera de EE. UU., conservas las protecciones al consumidor que la ley de tu país no nos permite eliminar.",
        ],
      },
      {
        heading: "Cambios y contacto",
        body: [
          "Podemos actualizar estos términos; la fecha al inicio indica la versión vigente. ¿Preguntas? Escribe a {email}.",
        ],
      },
    ],
  },
  cookies: {
    eyebrow: "Cookies",
    heading: "Política de Cookies",
    lead: "En resumen: este sitio no instala cookies propias ni usa analítica o rastreadores publicitarios, así que no hay nada que aceptar ni rechazar.",
    sections: [
      {
        heading: "Qué son las cookies",
        body: [
          "Las cookies son pequeños archivos que un sitio web guarda en tu navegador. Algunas son necesarias para que el sitio funcione; otras rastrean lo que haces con fines de analítica o publicidad. No usamos ninguna del segundo tipo.",
        ],
      },
      {
        heading: "El calendario de reservas",
        body: [
          "Cuando el calendario de reservas de nuestra página de Contacto está activo, se carga desde Cal.com. Cal.com puede instalar cookies o usar almacenamiento similar del navegador estrictamente necesarios para que el calendario funcione, por ejemplo para recordar tu zona horaria y proteger la reserva. Cal.com los explica en su propia política de privacidad en cal.com/privacy.",
        ],
      },
      {
        heading: "Fuentes y otro contenido",
        body: [
          "Nuestras fuentes tipográficas se sirven desde este mismo sitio, así que cargar una página no contacta a Google ni a ningún otro servicio de fuentes. Nuestros enlaces a LinkedIn e Instagram no instalan nada hasta que haces clic; a partir de ahí, se aplican las políticas de esos sitios.",
        ],
      },
      {
        heading: "Cómo controlar las cookies",
        body: [
          "Puedes bloquear o borrar las cookies en la configuración de tu navegador. Si bloqueas las cookies de Cal.com, es posible que el calendario no funcione; siempre puedes escribir a {email} para agendar.",
        ],
      },
      {
        heading: "Cambios",
        body: [
          "Si algún día añadimos analítica u otras cookies opcionales, primero actualizaremos esta política y te pediremos tu consentimiento cuando la ley lo exija. Nuestra {privacy} cubre el resto de cómo tratamos tus datos.",
        ],
      },
    ],
  },
};

export default legalEs;
