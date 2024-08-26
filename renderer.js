// Contenido completo del curso
const courseContent = {
  "módulo 1": {
    title: "Introducción al manejo de la aplicación",
    content:
      "Este módulo está diseñado para guiarte a través de las funcionalidades básicas de la plataforma y ayudarte a comenzar tu viaje en la creación web y marketing digital. Vamos a explorar cómo navegar en la aplicación y qué esperar de cada sección.",
    topics: [
      "Navegación por la Aplicación",
      "Panel Izquierdo",
      "Panel Derecho",
      "Opción de Ver/Ocultar el Panel Izquierdo",
      "Cómo Empezar",
    ],
  },
  "módulo 2": {
    title: "Introducción al desarrollo web",
    content:
      "Una página web es como una hoja de papel digital donde puedes incluir todo tipo de información, como texto, vídeos y enlaces. Los componentes básicos incluyen HTML para estructura, CSS para estilo y JavaScript para interactividad.",
    topics: [
      "¿Qué es una página web?",
      "Componentes básicos de una página web",
      "Tipos de páginas web",
    ],
  },
  "módulo 3": {
    title: "Introducción al marketing digital",
    content:
      "El marketing digital es un conjunto de estrategias para promocionar productos o servicios en Internet, utilizando canales como redes sociales, email y motores de búsqueda.",
    topics: [
      "¿Qué es el marketing digital?",
      "Importancia del marketing digital",
      "Canales del marketing digital",
    ],
  },
  "módulo 4": {
    title: "Tendencias actuales en marketing digital",
    content:
      "Este módulo cubre las últimas tendencias en marketing digital, incluyendo marketing de contenidos personalizados y anuncios personalizados.",
    topics: [
      "Marketing de Contenidos Personalizados",
      "Anuncios Personalizados",
      "Consejos de Diseño",
    ],
  },
  "módulo 5": {
    title: "Fundamentos de WordPress",
    content:
      "WordPress es una plataforma de gestión de contenidos que permite crear y administrar sitios web fácilmente, sin necesidad de conocimientos técnicos avanzados.",
    topics: [
      "Qué es WordPress",
      "Características principales",
      "Ventajas de WordPress",
    ],
  },
  "módulo 6": {
    title: "Configuración de WordPress local",
    content:
      "Este módulo enseña cómo configurar WordPress en tu computadora local para practicar y experimentar sin necesidad de estar en línea.",
    topics: [
      "¿Qué es WP Local?",
      "Instalación de WP Local",
      "Cómo crear un nuevo sitio local",
    ],
  },
  "módulo 7": {
    title: "Características básicas de una página en WordPress",
    content:
      "Aprende sobre los elementos fundamentales de una página en WordPress, incluyendo publicaciones, páginas, plugins y usuarios.",
    topics: [
      "¿Qué es una publicación (Post)?",
      "¿Qué es una Página?",
      "¿Qué es un Plugin?",
      "¿Qué es un Usuario en WordPress?",
    ],
  },
  "módulo 8": {
    title: "Panel de administración de WordPress",
    content:
      "Explora el panel de administración de WordPress, el centro de control donde puedes gestionar todos los aspectos de tu sitio web.",
    topics: [
      "Barra de Herramientas",
      "Menú de Administración",
      "Escritorio",
      "Entradas",
      "Páginas",
      "Medios",
      "Comentarios",
      "Apariencia",
      "Plugins",
      "Usuarios",
      "Herramientas",
      "Ajustes",
    ],
  },
  "módulo 9": {
    title: "Creación de Contenidos Web",
    content:
      "Aprende a crear contenido atractivo y relevante para tu sitio web, incluyendo técnicas de redacción y optimización para SEO.",
    topics: [
      "Importancia del Contenido en la Web",
      "Redacción de Textos Atractivos",
      "Optimización de Contenido para SEO",
    ],
  },
  "módulo 10": {
    title: "Diseño y Estructura de una Página Web con WordPress",
    content:
      "Este módulo cubre cómo diseñar y estructurar tu página web en WordPress, incluyendo la selección de temas y el uso de widgets y menús.",
    topics: [
      "Elección de Temas",
      "Uso de Widgets y Menús",
      "Páginas y Entradas",
    ],
  },
  "módulo 11": {
    title: "WordPress con Dominio y Hospedaje",
    content:
      "Aprende cómo configurar WordPress con un dominio propio y un plan de hospedaje para que tu sitio esté disponible en Internet.",
    topics: [
      "Dominio",
      "Hospedaje",
      "Instalación de WordPress en un servidor",
      "Migración del Entorno Local al Web",
    ],
  },
  "módulo 12": {
    title: "Optimización y Seguridad en WordPress",
    content:
      "Este módulo cubre técnicas para optimizar el rendimiento de tu sitio WordPress y mantenerlo seguro contra amenazas.",
    topics: [
      "Optimización del Rendimiento",
      "Seguridad en WordPress",
      "Copias de Seguridad",
    ],
  },
  "módulo 13": {
    title: "Optimización SEO para Principiantes",
    content:
      "Aprende los fundamentos de la Optimización para Motores de Búsqueda (SEO) para mejorar la visibilidad de tu sitio en los resultados de búsqueda.",
    topics: [
      "¿Qué es el SEO?",
      "Palabras clave",
      "Contenido de calidad",
      "Enlaces internos y externos",
      "Velocidad de carga del sitio",
      "SEO en móviles",
    ],
  },
  "módulo 14": {
    title: "Diseño Responsivo y Accesibilidad Web",
    content:
      "Explora cómo crear sitios web que se vean bien en todos los dispositivos y sean accesibles para todos los usuarios.",
    topics: [
      "Diseño Responsivo",
      "Accesibilidad Web",
      "Mejores prácticas de diseño inclusivo",
    ],
  },
  "módulo 15": {
    title: "Creación y Gestión de Blogs en WordPress",
    content:
      "Aprende a crear y gestionar un blog efectivo utilizando WordPress, incluyendo estrategias de contenido y engagement.",
    topics: [
      "Creación de un Blog",
      "Gestión de un Blog",
      "Estrategias de contenido para blogs",
    ],
  },
  "módulo 16": {
    title: "Marketing de Contenidos",
    content:
      "Descubre cómo crear y distribuir contenido valioso para atraer y retener a tu audiencia objetivo.",
    topics: [
      "¿Qué es el Marketing de Contenidos?",
      "Importancia del Marketing de Contenidos",
      "Estrategias efectivas de marketing de contenidos",
    ],
  },
  "módulo 17": {
    title: "Analítica Web para Principiantes",
    content:
      "Aprende a utilizar herramientas de analítica web para medir y mejorar el rendimiento de tu sitio.",
    topics: [
      "¿Qué es la Analítica Web?",
      "Cómo Usar la Analítica Web",
      "Métricas importantes a seguir",
    ],
  },
  "módulo 18": {
    title: "Estrategias Básicas de Email Marketing",
    content:
      "Explora cómo utilizar el email marketing para conectar con tu audiencia y promover tu negocio.",
    topics: [
      "¿Qué es el Email Marketing?",
      "Cómo Hacer Email Marketing",
      "Mejores prácticas de email marketing",
    ],
  },
  "módulo 19": {
    title: "Introducción al Comercio Electrónico con WordPress",
    content:
      "Aprende los fundamentos para crear una tienda en línea utilizando WordPress y WooCommerce.",
    topics: [
      "¿Qué es el Comercio Electrónico?",
      "Crear una Tienda en WordPress",
      "Configuración básica de WooCommerce",
    ],
  },
  "módulo 20": {
    title: "Mantenimiento y Seguridad del Sitio Web",
    content:
      "Descubre cómo mantener tu sitio WordPress actualizado, seguro y funcionando sin problemas.",
    topics: [
      "Importancia del Mantenimiento",
      "Seguridad del Sitio Web",
      "Actualizaciones y copias de seguridad",
    ],
  },
  "módulo 21": {
    title: "Promoción y Publicidad Digital",
    content:
      "Aprende estrategias para promocionar tu sitio web y atraer más visitantes utilizando publicidad digital.",
    topics: [
      "Promoción y Publicidad en Internet",
      "Estrategias para Promocionar",
      "Plataformas de publicidad digital",
    ],
  },
  "módulo 22": {
    title: "Monetización de tu Sitio Web",
    content:
      "Explora diferentes formas de generar ingresos con tu sitio web, desde publicidad hasta venta de productos y servicios.",
    topics: [
      "¿Qué es la Monetización?",
      "Cómo Monetizar",
      "Estrategias de monetización para diferentes tipos de sitios",
    ],
  },
};

// Inicialización de la aplicación
document
  .getElementById("minimize-btn")
  .addEventListener("click", () => window.electronAPI.minimize());
document
  .getElementById("maximize-btn")
  .addEventListener("click", () => window.electronAPI.maximize());
document
  .getElementById("close-btn")
  .addEventListener("click", () => window.electronAPI.close());

document.addEventListener("DOMContentLoaded", async (event) => {
  document.getElementById("home-link").addEventListener("click", (e) => {
    e.preventDefault();
    loadPage("home");
  });
  document.getElementById("modules-link").addEventListener("click", (e) => {
    e.preventDefault();
    loadPage("modules");
  });

  const hideSidebarBtn = document.getElementById("hide-sidebar-btn");
  const showSidebarBtn = document.getElementById("show-sidebar-btn");
  const sidebar = document.querySelector(".sidebar");
  const content2 = document.getElementById("content-2");

  if (hideSidebarBtn)
    hideSidebarBtn.addEventListener("click", () =>
      window.electronAPI.toggleSidebar()
    );
  if (showSidebarBtn)
    showSidebarBtn.addEventListener("click", () =>
      window.electronAPI.toggleSidebar()
    );

  window.electronAPI.onToggleSidebar(() => {
    const isHidden = sidebar.style.display === "none";
    sidebar.style.display = isHidden ? "block" : "none";
    showSidebarBtn.style.display = isHidden ? "none" : "block";
    content2.style.width = isHidden ? "100%" : "calc(100% - 200px)";
  });

  const lastVisitedPage = localStorage.getItem("currentPage") || "home";
  loadPage(lastVisitedPage);

  initializeAvatar();
});

async function loadPage(page) {
  localStorage.setItem("currentPage", page);

  const header = document.getElementById("navigation");
  const activeMenu = header.getElementsByClassName("menu-item");

  for (let i = 0; i < activeMenu.length; i++) {
    activeMenu[i].classList.remove("active-page");
  }

  const currentMenuItem = document.getElementById(`${page}-link`);
  if (currentMenuItem) {
    currentMenuItem.parentElement.classList.add("active-page");
  }

  const content = document.getElementById("content");
  let url = "";

  switch (page) {
    case "home":
      url = "../src/home.html";
      break;
    case "modules":
      url = "../src/modules/modules.html";
      break;
    default:
      url = "../src/home.html";
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const htmlContent = await response.text();
    content.innerHTML = htmlContent;

    const content2 = document.getElementById("content-2");
    if (page === "modules") {
      if (!document.querySelector('script[src="../src/modules/modules.js"]')) {
        const script = document.createElement("script");
        script.src = "../src/modules/modules.js";
        script.nonce = "RandomNonceHere";
        script.onload = () => {
          if (typeof initializeModules === "function") {
            initializeModules();
            loadCurrentModule();
          }
        };
        document.body.appendChild(script);
      } else {
        if (typeof initializeModules === "function") {
          initializeModules();
          loadCurrentModule();
        }
      }
    } else {
      loadCurrentModule();
    }
  } catch (error) {
    console.error("Error loading page:", error);
    content.innerHTML = "<p>Failed to load content.</p>";
  }
}

function loadCurrentModule() {
  const content2 = document.getElementById("content-2");
  const currentModule = localStorage.getItem("currentModule") || "module-1";
  if (typeof loadModule === "function") {
    loadModule(currentModule);
  } else {
    fetch(`../src/modules/modules/${currentModule}.html`)
      .then((response) => response.text())
      .then((html) => {
        content2.innerHTML = html;
      })
      .catch((error) => {
        console.error("Error loading module:", error);
        content2.innerHTML = "<p>Failed to load module content.</p>";
      });
  }
}

async function initializeAvatar() {
  const avatarContainer = document.getElementById("avatar-container");
  const avatarChat = document.getElementById("avatar-chat");
  const avatarImage = document.getElementById("avatar-image");
  const sendButton = document.getElementById("send-button");
  const userInput = document.getElementById("user-input");

  if (avatarImage && avatarChat && sendButton && userInput) {
    // Usar el estilo Notionists de Dicebear
    const seed = "Rocky"; // Puedes cambiar esto por el nombre del usuario o un identificador único
    avatarImage.src = `https://api.dicebear.com/6.x/notionists/svg?seed=${seed}`;

    avatarImage.addEventListener("click", () => {
      avatarChat.style.display =
        avatarChat.style.display === "none" ? "block" : "none";
    });

    sendButton.addEventListener("click", () => {
      const question = userInput.value.trim();
      if (question) {
        processUserInput(question);
        userInput.value = "";
      }
    });

    userInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendButton.click();
      }
    });
  } else {
    console.error("Elementos del avatar no encontrados");
  }
}

function addMessage(message, className) {
  const chatMessages = document.getElementById("chat-messages");
  const messageElement = document.createElement("div");
  messageElement.className = `message ${className}`;
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function animateAvatar() {
  const avatarImage = document.getElementById("avatar-image");
  avatarImage.style.animation = "pulse 0.5s";
  setTimeout(() => {
    avatarImage.style.animation = "";
  }, 500);
}

function processUserInput(input) {
  console.log("Procesando entrada del usuario:", input);
  addMessage(input, "user-message");

  const response = getAvatarResponse(input);
  setTimeout(() => {
    animateAvatar();
    addMessage(response, "avatar-message");
  }, 1000);

  // Asegurarse de que el chat esté visible después de enviar un mensaje
  const avatarChat = document.getElementById("avatar-chat");
  if (avatarChat) {
    avatarChat.style.display = "block";
  }
}

// Base de conocimientos extensa
const knowledgeBase = {
  wordpress: {
    wordpress: "WordPress es un sistema de gestión de contenidos (CMS) que permite crear y mantener fácilmente sitios web. Es utilizado por aproximadamente el 40% de todos los sitios web en Internet.",
    temas: "Los temas en WordPress controlan el aspecto visual de tu sitio. Puedes elegir entre miles de temas gratuitos y premium, o crear uno propio para personalizar completamente tu sitio.",
    plugins: "Los plugins añaden funcionalidades adicionales a tu sitio WordPress. Hay plugins para SEO, seguridad, formularios, comercio electrónico y prácticamente cualquier función que puedas necesitar.",
    seguridad: "La seguridad en WordPress es crucial. Algunas prácticas recomendadas incluyen usar contraseñas fuertes, mantener WordPress y todos los plugins actualizados, utilizar plugins de seguridad confiables y realizar copias de seguridad regulares.",
    optimizacion: "Para optimizar WordPress, puedes usar plugins de caché, optimizar imágenes, minimizar el uso de plugins, elegir un buen hosting y utilizar una red de distribución de contenido (CDN).",
    wp: "Es el acrónimo de WordPress.",
    local: "WP Local es una plataforma que te permite configurar un entorno de desarrollo de WordPress en tu propia computadora, sin necesidad de estar en línea. Esto significa que puedes crear y probar sitios web de WordPress en un entorno controlado y privado antes de lanzarlos en internet.",
    widgets: "Los widgets en WordPress son pequeños bloques que puedes añadir a áreas específicas de tu sitio, como la barra lateral o el pie de página, para mostrar información adicional como menús, calendarios o redes sociales.",
    menus: "Los menús en WordPress permiten organizar las páginas y enlaces de tu sitio de forma clara. Puedes crear menús personalizados y ubicarlos en diferentes partes de tu tema.",
    actualizaciones: "WordPress regularmente lanza actualizaciones para mejorar la seguridad, corregir errores y añadir nuevas funcionalidades. Mantener WordPress actualizado es fundamental para el buen funcionamiento de tu sitio.",
    usuarios: "WordPress permite gestionar múltiples usuarios con diferentes roles y permisos. Desde administradores con control total hasta suscriptores que solo pueden ver contenido restringido.",
    personalizacion: "El personalizador de WordPress permite modificar la apariencia de tu sitio en tiempo real, ajustando colores, tipografías, logos y otros elementos visuales de forma sencilla.",
    comentarios: "WordPress incluye un sistema de comentarios que permite a los usuarios interactuar con tu contenido. Puedes moderar los comentarios para mantener un ambiente positivo y constructivo en tu sitio.",
    editor_gutenberg: "El editor de bloques de WordPress, conocido como Gutenberg, permite crear contenido utilizando bloques modulares para insertar textos, imágenes, videos y más de forma intuitiva.",
    multisitio: "WordPress Multisitio es una funcionalidad que te permite crear y gestionar múltiples sitios web desde una única instalación de WordPress. Es útil para grandes redes de sitios o proyectos con múltiples subsitios.",
    woocommerce: "WooCommerce es un plugin de WordPress que convierte tu sitio en una tienda en línea completamente funcional. Es ideal para crear sitios de comercio electrónico con opciones de pago, envíos y gestión de inventario.",
    shortcodes: "Los shortcodes son pequeños fragmentos de código que puedes usar en WordPress para añadir funciones o contenido embebido sin necesidad de escribir código extenso.",
    paginas: "Las páginas en WordPress son un tipo de contenido estático, utilizado para secciones como 'Acerca de' o 'Contacto'. A diferencia de las entradas, las páginas no se agrupan cronológicamente.",
    entradas: "Las entradas en WordPress son publicaciones de blog que se muestran en orden cronológico inverso. Son ideales para contenido que se actualiza regularmente como artículos o noticias.",
    backups: "Realizar copias de seguridad regulares de tu sitio WordPress es esencial para proteger tu contenido en caso de errores, ataques o problemas técnicos. Hay plugins que automatizan este proceso.",
    seo: "WordPress tiene varias herramientas y plugins como Yoast SEO para optimizar tu sitio web para motores de búsqueda, ayudando a mejorar la visibilidad y atraer más tráfico orgánico."
  },
  seo: {
    seo: "SEO (Search Engine Optimization) son técnicas para mejorar la visibilidad de un sitio web en los motores de búsqueda, aumentando así el tráfico orgánico.",
    onpage: "El SEO on-page incluye optimizar el contenido, las etiquetas HTML, la estructura del sitio y la velocidad de carga. Es todo lo que puedes hacer dentro de tu propio sitio web para mejorar su posicionamiento.",
    offpage: "El SEO off-page se refiere a acciones fuera de tu sitio que afectan tu ranking, como la construcción de enlaces de calidad, la presencia en redes sociales y las menciones de marca.",
    keywords: "La investigación de palabras clave es fundamental para el SEO. Implica encontrar los términos que tu audiencia usa para buscar contenido relacionado con tu sitio y utilizarlos estratégicamente en tu contenido.",
    contenido: "El contenido de calidad es esencial para el SEO. Debe ser original, relevante, y proporcionar valor a los usuarios. Google premia el contenido que responde mejor a las intenciones de búsqueda de los usuarios.",
    optimizacion_tecnica: "La optimización técnica del SEO abarca aspectos como la estructura de enlaces internos, la indexación, la optimización de imágenes, la velocidad del sitio y la seguridad (HTTPS). Estos factores ayudan a los motores de búsqueda a rastrear e indexar tu sitio correctamente.",
    backlinks: "Los backlinks son enlaces de otros sitios que apuntan al tuyo. La calidad y cantidad de estos enlaces influyen significativamente en la autoridad y el ranking de tu página en los motores de búsqueda.",
    seo_local: "El SEO local se enfoca en optimizar tu presencia online para atraer tráfico relevante de búsquedas locales, incluyendo la optimización de Google My Business, reseñas y el uso de palabras clave locales.",
    mobile_first: "El SEO mobile-first implica optimizar tu sitio web para dispositivos móviles, dado que Google prioriza la experiencia móvil al indexar sitios. Un diseño responsive y tiempos de carga rápidos son claves.",
    medicion: "Para medir el éxito del SEO, se utilizan herramientas como Google Analytics y Google Search Console para analizar el tráfico orgánico, las posiciones de palabras clave, el CTR (Click Through Rate) y otros datos clave.",
    ctr: "El CTR (Click Through Rate) mide la proporción de clics que recibe tu sitio en comparación con las impresiones. Un buen SEO mejora el CTR optimizando títulos, meta descripciones y la relevancia del contenido.",
    tiempo_permanencia: "El tiempo de permanencia es una métrica que mide cuánto tiempo permanecen los usuarios en tu sitio. Un mayor tiempo de permanencia sugiere que el contenido es relevante y atractivo.",
    tasa_rebote: "La tasa de rebote mide el porcentaje de usuarios que abandonan tu sitio sin interactuar con él. Una tasa alta puede indicar problemas en la experiencia del usuario o contenido irrelevante.",
    velocidad_carga: "La velocidad de carga del sitio es crucial para el SEO. Google penaliza los sitios lentos, y los usuarios tienden a abandonar las páginas que tardan mucho en cargar.",
    schema_markup: "Schema Markup es un código que agregas a tu sitio para ayudar a los motores de búsqueda a entender mejor tu contenido, lo que puede mejorar la forma en que aparece en los resultados de búsqueda.",
    urls_amigables: "Las URLs amigables son aquellas que son claras, descriptivas y fáciles de entender tanto para los usuarios como para los motores de búsqueda. Esto mejora la experiencia del usuario y el SEO.",
    meta_descripciones: "Las meta descripciones son breves resúmenes que aparecen bajo el título en los resultados de búsqueda. Aunque no afectan directamente el ranking, influyen en el CTR.",
    hreflang: "El atributo hreflang es usado para indicar el idioma y la región de una página a los motores de búsqueda, ayudando a que el contenido sea mostrado a los usuarios correctos en el idioma adecuado.",
    canibalizacion_palabras_clave: "La canibalización de palabras clave ocurre cuando varias páginas de tu sitio compiten por las mismas palabras clave, lo que puede reducir la efectividad del SEO. Es importante evitar esto consolidando o diferenciando el contenido.",
    seo_imagenes: "El SEO para imágenes incluye optimizar el nombre del archivo, el texto alternativo (alt), y el tamaño de las imágenes para mejorar el tiempo de carga y ayudar a los motores de búsqueda a entender el contenido visual.",
    indexacion: "La indexación es el proceso mediante el cual los motores de búsqueda almacenan y organizan el contenido de tu sitio para mostrarlo en los resultados de búsqueda. Un sitio bien estructurado y sin errores facilita la indexación.",
    robots_txt: "El archivo robots.txt se usa para indicarle a los motores de búsqueda qué páginas o secciones de tu sitio web no deben rastrear. Esto ayuda a controlar qué contenido es accesible y cuál no.",
    sitemap: "Un sitemap es un archivo XML que lista todas las páginas importantes de tu sitio, facilitando que los motores de búsqueda las descubran e indexen adecuadamente.",
    actualizaciones_google: "Google actualiza constantemente sus algoritmos para mejorar la relevancia y calidad de los resultados de búsqueda. Mantenerse al día con estas actualizaciones es esencial para mantener un buen ranking."
  },
  marketing: {
    marketing: "El marketing digital abarca todas las estrategias de marketing realizadas en medios y canales de internet. Incluye SEO, marketing de contenidos, email marketing, marketing en redes sociales y publicidad online.",
    contenidos: "El marketing de contenidos se centra en crear y distribuir contenido valioso y relevante para atraer y retener a una audiencia claramente definida, con el objetivo de impulsar la acción del cliente.",
    email: "El email marketing implica enviar mensajes comerciales a través de correo electrónico a una lista de contactos. Es una forma efectiva de mantener el contacto con tus clientes y promover tus productos o servicios.",
    redessociales: "El marketing en redes sociales utiliza plataformas como Facebook, Instagram, Twitter y LinkedIn para conectar con la audiencia, construir marca y promocionar productos o servicios.",
    publicidad: "La publicidad digital implica utilizar anuncios pagados en plataformas como Google Ads, Facebook Ads y otras redes para dirigir tráfico hacia tu sitio web o producto.",
    inbound: "El marketing inbound se basa en atraer clientes mediante la creación de contenido relevante que resuelva sus problemas, en lugar de interrumpir con anuncios. El objetivo es convertir a los visitantes en clientes a través de embudos de ventas.",
    outbound: "El marketing outbound incluye estrategias como la publicidad tradicional y los correos electrónicos no solicitados. A diferencia del inbound, se enfoca en empujar el mensaje hacia el cliente.",
    conversion: "La tasa de conversión mide el porcentaje de usuarios que realizan una acción deseada, como una compra o un registro. El objetivo del marketing digital es optimizar esta tasa mediante estrategias efectivas.",
    branding: "El branding digital se refiere a construir una identidad de marca sólida en el entorno online, utilizando mensajes coherentes y visuales atractivos para establecer una conexión con la audiencia.",
    analitica: "El análisis en marketing digital implica usar herramientas como Google Analytics para monitorizar el tráfico web, el comportamiento de los usuarios y la efectividad de las campañas, con el fin de optimizarlas.",
    cta: "Un CTA (Call to Action) es una invitación clara para que los usuarios realicen una acción específica, como hacer clic en un enlace, registrarse o realizar una compra. Es crucial para guiar a los clientes en su viaje.",
    segmentacion: "La segmentación de mercado implica dividir a la audiencia en grupos más pequeños basados en características como la demografía, el comportamiento o los intereses para personalizar mejor las campañas.",
    embudo: "El embudo de ventas es un modelo que describe el recorrido del cliente, desde el primer contacto con la marca hasta la conversión. El marketing digital busca optimizar cada etapa del embudo para maximizar las conversiones.",
    retargeting: "El retargeting es una estrategia que muestra anuncios a usuarios que ya han interactuado con tu sitio o productos, recordándoles que completen una compra o vuelvan a visitar tu página.",
    influencers: "El marketing con influencers utiliza personas influyentes en redes sociales para promocionar productos o servicios a sus seguidores. Es una forma efectiva de llegar a nuevas audiencias.",
    automatizacion: "La automatización del marketing permite programar y optimizar campañas de marketing digital utilizando software, lo que ahorra tiempo y mejora la eficiencia. Incluye herramientas para el email marketing, la segmentación y más.",
    ppc: "El PPC (Pago por Clic) es un modelo de publicidad digital donde los anunciantes pagan cada vez que un usuario hace clic en su anuncio. Es común en plataformas como Google Ads y Facebook Ads.",
    seo: "El SEO (Search Engine Optimization) es fundamental en el marketing digital para mejorar la visibilidad de un sitio web en los motores de búsqueda y atraer tráfico orgánico de calidad.",
    roi: "El ROI (Retorno de la Inversión) es una métrica clave que mide la rentabilidad de las campañas de marketing. Se calcula dividiendo los beneficios obtenidos por los costos de la inversión.",
    ux: "La experiencia del usuario (UX) es esencial en el marketing digital, ya que un sitio fácil de usar y atractivo aumenta la satisfacción del usuario y la probabilidad de conversión."
  },
  ecommerce: {
    ecommerce: "Hay varias plataformas de comercio electrónico populares como WooCommerce (para WordPress), Shopify y Magento. Cada una tiene sus propias ventajas y es adecuada para diferentes tipos de negocios.",
    optimizacion: "La optimización de comercio electrónico incluye mejorar la experiencia del usuario, optimizar para dispositivos móviles, usar buenas descripciones e imágenes de productos, y simplificar el proceso de compra.",
    pagos: "Es importante ofrecer múltiples opciones de pago seguras para mejorar las tasas de conversión en una tienda online. Esto puede incluir tarjetas de crédito, PayPal y otros métodos populares en tu mercado.",
    envios: "Una buena estrategia de envío es crucial para el éxito en comercio electrónico. Esto incluye ofrecer varias opciones de envío, ser transparente con los costos y tiempos de entrega, y considerar ofertas como envío gratuito.",
    inventario: "La gestión eficiente del inventario es esencial para mantener los productos disponibles sin sobrecargar el stock. Un buen sistema de inventario ayuda a evitar errores y mejorar la satisfacción del cliente.",
    marketing: "El marketing en comercio electrónico incluye estrategias como SEO, campañas de pago por clic (PPC), email marketing y publicidad en redes sociales para atraer tráfico a la tienda en línea.",
    carrito: "El carrito de compras debe ser intuitivo y fácil de usar. Ofrecer opciones como guardar artículos para después o mostrar recomendaciones de productos puede mejorar la experiencia del cliente.",
    conversion: "Optimizar la tasa de conversión implica hacer que más visitantes realicen una compra. Estrategias como mejorar la velocidad de carga, ofrecer incentivos y simplificar el proceso de pago son claves.",
    analitica: "El análisis en eCommerce te permite monitorizar el comportamiento de los clientes, las ventas y otras métricas importantes para mejorar la toma de decisiones y las estrategias de marketing.",
    personalizacion: "Ofrecer una experiencia personalizada, como recomendaciones de productos basadas en el historial de compras del cliente, puede aumentar la lealtad y las ventas en una tienda en línea.",
    comentarios: "Los comentarios de los clientes sobre los productos son importantes para generar confianza y aumentar las conversiones. Permitir a los usuarios dejar reseñas ayuda a mejorar la credibilidad de la tienda.",
    usabilidad: "Un sitio de eCommerce debe ser fácil de navegar, con una interfaz clara y accesible desde cualquier dispositivo, para asegurar que los clientes puedan encontrar y comprar productos sin complicaciones.",
    soporte: "Brindar soporte al cliente eficiente, ya sea mediante chat en vivo, correo electrónico o teléfono, es esencial para resolver dudas, manejar quejas y asegurar la satisfacción del cliente.",
    fidelizacion: "Programas de lealtad, descuentos para clientes frecuentes y un excelente servicio postventa son estrategias para aumentar la retención de clientes en una tienda de eCommerce.",
    seguridad: "Garantizar la seguridad de los datos de los clientes es fundamental. Esto incluye el uso de certificados SSL, la encriptación de datos y el cumplimiento de normativas como el RGPD para proteger la información personal.",
    mobilefirst: "Con el aumento de compras desde dispositivos móviles, es vital que las tiendas online estén optimizadas para móviles, con un diseño adaptable y tiempos de carga rápidos.",
    crossselling: "El cross-selling es una estrategia para recomendar productos complementarios durante el proceso de compra, aumentando así el valor promedio de los pedidos.",
    upselling: "El upselling implica sugerir versiones mejoradas o productos más caros para aumentar el valor de la compra. Es una táctica efectiva cuando se hace en el momento adecuado.",
    devoluciones: "Una política clara y justa de devoluciones es importante para generar confianza. Proporcionar un proceso sencillo para devolver productos ayuda a mejorar la experiencia del cliente."
  },
  local: {
    local: "WP Local es una herramienta de desarrollo que permite crear y gestionar sitios web de WordPress en tu propia computadora. Ideal para pruebas y desarrollo, WP Local proporciona un entorno seguro y controlado sin necesidad de estar conectado a Internet.",
    instalacion: "Para instalar WP Local, descarga el software desde el sitio web oficial y sigue el asistente de instalación. El proceso es sencillo y guiado. Una vez instalado, podrás iniciar la aplicación y crear nuevos sitios de WordPress con unos pocos clics.",
    configuracion: "Configura WP Local creando un nuevo sitio. Esto incluye asignar un nombre de dominio local (como 'misitio.local'), seleccionar la versión de PHP y MySQL, y establecer credenciales para la base de datos. WP Local ofrece opciones para personalizar estos ajustes según tus necesidades.",
    entornos: "WP Local permite crear diferentes entornos de desarrollo, como sitios de prueba y staging. Esto facilita la gestión de varias versiones de tu sitio, permitiéndote probar cambios antes de aplicarlos a la versión en vivo.",
    seguridad: "Aunque trabajes en un entorno local, es importante aplicar buenas prácticas de seguridad. Usa contraseñas seguras para tu base de datos y cuenta de WordPress, realiza copias de seguridad periódicas, y asegúrate de actualizar WordPress, temas y plugins regularmente.",
    actualizaciones: "WP Local facilita la actualización de WordPress, temas y plugins desde el panel de administración de tu sitio local. Asegúrate de realizar estas actualizaciones para mantener la compatibilidad y seguridad del sitio.",
    migracion: "Cuando estés listo para lanzar tu sitio en línea, WP Local te permite exportar tu base de datos y archivos de WordPress. Utiliza herramientas de migración integradas o plugins adicionales para trasladar tu sitio desde el entorno local a un servidor en línea.",
    soporte: "WP Local ofrece soporte a través de su sitio web oficial y documentación en línea. Puedes acceder a guías paso a paso, tutoriales y foros de comunidad para resolver dudas y problemas técnicos.",
    compatibilidad: "WP Local es compatible con Windows, macOS y Linux. Asegúrate de cumplir con los requisitos del sistema especificados para garantizar un funcionamiento óptimo. La plataforma proporciona versiones específicas para cada sistema operativo.",
    recursos: "WP Local incluye recursos útiles como plantillas y temas prediseñados que puedes utilizar para acelerar el desarrollo de tu sitio. Además, proporciona herramientas para gestionar múltiples instalaciones de WordPress desde una única interfaz.",
    rendimiento: "Para asegurar un buen rendimiento, WP Local optimiza el entorno de desarrollo para que sea rápido y eficiente. Esto incluye configuraciones para el servidor web y la base de datos que ayudan a minimizar los tiempos de carga y mejorar la experiencia de desarrollo.",
    personalizacion: "WP Local permite personalizar el entorno de desarrollo según tus necesidades. Puedes ajustar la configuración de PHP, modificar el archivo de hosts para cambiar el nombre del dominio local, y configurar ajustes específicos para diferentes proyectos.",
    copias_de_seguridad: "WP Local permite realizar copias de seguridad completas de tus sitios de WordPress. Puedes programar copias de seguridad automáticas o realizar copias manuales para proteger tus datos y garantizar que no se pierdan durante el desarrollo.",
    rendimiento_de_servidor: "WP Local simula un servidor web en tu computadora, proporcionando un entorno de desarrollo que imita el comportamiento de un servidor en línea. Esto es útil para probar cómo se comportará tu sitio en un entorno de producción real.",
    integración_con_tools: "WP Local se integra con herramientas de desarrollo y gestión de sitios, como Git y servicios de hosting. Esto facilita la colaboración en equipo y la sincronización de cambios entre el entorno local y el entorno en línea."
  },
  wplocal: {
    wplocal: "WP Local es una herramienta de desarrollo que permite crear y gestionar sitios web de WordPress en tu propia computadora. Ideal para pruebas y desarrollo, WP Local proporciona un entorno seguro y controlado sin necesidad de estar conectado a Internet.",
    instalacion: "Para instalar WP Local, descarga el software desde el sitio web oficial y sigue el asistente de instalación. El proceso es sencillo y guiado. Una vez instalado, podrás iniciar la aplicación y crear nuevos sitios de WordPress con unos pocos clics.",
    configuracion: "Configura WP Local creando un nuevo sitio. Esto incluye asignar un nombre de dominio local (como 'misitio.local'), seleccionar la versión de PHP y MySQL, y establecer credenciales para la base de datos. WP Local ofrece opciones para personalizar estos ajustes según tus necesidades.",
    entornos: "WP Local permite crear diferentes entornos de desarrollo, como sitios de prueba y staging. Esto facilita la gestión de varias versiones de tu sitio, permitiéndote probar cambios antes de aplicarlos a la versión en vivo.",
    seguridad: "Aunque trabajes en un entorno local, es importante aplicar buenas prácticas de seguridad. Usa contraseñas seguras para tu base de datos y cuenta de WordPress, realiza copias de seguridad periódicas, y asegúrate de actualizar WordPress, temas y plugins regularmente.",
    actualizaciones: "WP Local facilita la actualización de WordPress, temas y plugins desde el panel de administración de tu sitio local. Asegúrate de realizar estas actualizaciones para mantener la compatibilidad y seguridad del sitio.",
    migracion: "Cuando estés listo para lanzar tu sitio en línea, WP Local te permite exportar tu base de datos y archivos de WordPress. Utiliza herramientas de migración integradas o plugins adicionales para trasladar tu sitio desde el entorno local a un servidor en línea.",
    soporte: "WP Local ofrece soporte a través de su sitio web oficial y documentación en línea. Puedes acceder a guías paso a paso, tutoriales y foros de comunidad para resolver dudas y problemas técnicos.",
    compatibilidad: "WP Local es compatible con Windows, macOS y Linux. Asegúrate de cumplir con los requisitos del sistema especificados para garantizar un funcionamiento óptimo. La plataforma proporciona versiones específicas para cada sistema operativo.",
    recursos: "WP Local incluye recursos útiles como plantillas y temas prediseñados que puedes utilizar para acelerar el desarrollo de tu sitio. Además, proporciona herramientas para gestionar múltiples instalaciones de WordPress desde una única interfaz.",
    rendimiento: "Para asegurar un buen rendimiento, WP Local optimiza el entorno de desarrollo para que sea rápido y eficiente. Esto incluye configuraciones para el servidor web y la base de datos que ayudan a minimizar los tiempos de carga y mejorar la experiencia de desarrollo.",
    personalizacion: "WP Local permite personalizar el entorno de desarrollo según tus necesidades. Puedes ajustar la configuración de PHP, modificar el archivo de hosts para cambiar el nombre del dominio local, y configurar ajustes específicos para diferentes proyectos.",
    copias_de_seguridad: "WP Local permite realizar copias de seguridad completas de tus sitios de WordPress. Puedes programar copias de seguridad automáticas o realizar copias manuales para proteger tus datos y garantizar que no se pierdan durante el desarrollo.",
    rendimiento_de_servidor: "WP Local simula un servidor web en tu computadora, proporcionando un entorno de desarrollo que imita el comportamiento de un servidor en línea. Esto es útil para probar cómo se comportará tu sitio en un entorno de producción real.",
    integración_con_tools: "WP Local se integra con herramientas de desarrollo y gestión de sitios, como Git y servicios de hosting. Esto facilita la colaboración en equipo y la sincronización de cambios entre el entorno local y el entorno en línea."
  }

};

// Gestión del contexto de la conversación
let conversationContext = {
  currentTopic: null,
  previousTopics: [],
  userPreferences: {},
  conversationStage: 'initial',
  lastResponse: null,
  questionCount: 0
};

// Función principal para manejar la entrada del usuario
function getAvatarResponse(input) {
  // Normalizar la entrada
  const normalizedInput = normalizeInput(input);

  // Actualizar el contexto
  updateContext(normalizedInput);

  // Generar la respuesta
  let response = generateResponse(normalizedInput);

  // Añadir variedad para prevenir repeticiones
  response = addVarietyToResponse(response);

  // Actualizar la última respuesta en el contexto
  conversationContext.lastResponse = response;

  return response;
}

function normalizeInput(input) {
  // Convertir a minúsculas y eliminar acentos para facilitar la comparación
  return input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function updateContext(input) {
  // Detectar el tema
  const detectedTopic = detectTopic(input);
  if (detectedTopic) {
    if (conversationContext.currentTopic && conversationContext.currentTopic !== detectedTopic) {
      conversationContext.previousTopics.push(conversationContext.currentTopic);
    }
    conversationContext.currentTopic = detectedTopic;
  }

  // Actualizar la etapa de la conversación
  if (conversationContext.conversationStage === 'initial' && !isGreeting(input)) {
    conversationContext.conversationStage = 'engaged';
  }

  // Incrementar el contador de preguntas
  conversationContext.questionCount++;
}

function detectTopic(input) {
  const topics = {
    wordpress: [
      'wordpress',
      'cms',
      'gestion de contenidos',
      'tema',
      'plugin',
      'seguridad',
      'optimización',
      'wp local',
      'widgets',
      'menus',
      'actualizaciones',
      'usuarios',
      'personalizacion',
      'comentarios',
      'editor gutenberg',
      'multisitio',
      'woocommerce',
      'shortcodes',
      'paginas',
      'entradas',
      'backups',
      'seo'
    ],
    seo: [
      'seo',
      'optimizacion',
      'motores de busqueda',
      'palabras clave',
      'serp',
      'contenido',
      'onpage',
      'offpage',
      'keywords',
      'contenido',
      'enlaces',
      'auditoría',
      'estructura del sitio',
      'meta etiquetas',
      'ranking',
      'backlinks',
      'análisis de competencia',
      'indexación',
      'sitemap',
      'experiencia de usuario'
    ],
    marketing: [
      'marketing',
      'promocion',
      'publicidad',
      'email',
      'redes sociales',
      'digital',
      'contenidos',
      'marketing de contenidos',
      'email marketing',
      'marketing en redes sociales',
      'publicidad digital',
      'inbound marketing',
      'outbound marketing',
      'conversion',
      'branding',
      'analitica',
      'cta',
      'segmentacion',
      'embudo de ventas',
      'retargeting',
      'influencers',
      'automatizacion',
      'ppc',
      'roi',
      'ux'
    ],
    ecommerce: [
      'comercio electronico',
      'tienda online',
      'ecommerce',
      'carrito de compras',
      'plataformas',
      'optimización',
      'pagos',
      'envios',
      'inventario',
      'marketing',
      'soporte',
      'fidelizacion',
      'seguridad',
      'mobilefirst',
      'crossselling',
      'upselling',
      'devoluciones'
    ],
    wp_local: [
      'wp local',
      'entorno de desarrollo',
      'instalacion',
      'configuracion',
      'entornos',
      'seguridad',
      'actualizaciones',
      'migracion',
      'soporte',
      'compatibilidad',
      'recursos',
      'rendimiento',
      'personalizacion',
      'copias de seguridad',
      'rendimiento de servidor',
      'integracion con tools'
    ]
  };

  for (const [topic, keywords] of Object.entries(topics)) {
    if (keywords.some(keyword => input.includes(keyword))) {
      return topic;
    }
  }
  return null;
}

function generateResponse(input) {
  if (isGreeting(input)) {
    return handleGreeting();
  } else if (isFarewell(input)) {
    return handleFarewell();
  } else if (isAffirmation(input)) {
    return handleAffirmation();
  } else if (isNegation(input)) {
    return handleNegation();
  } else if (isQuestion(input)) {
    return handleQuestion(input);
  } else {
    return handleGeneralInput(input);
  }
}

function isGreeting(input) {
  const greetings = ['hola', 'hey', 'buenas', 'saludos', 'que tal', 'como estas'];
  return greetings.some(greeting => input.includes(greeting));
}

function isFarewell(input) {
  const farewells = ['adios', 'hasta luego', 'chao', 'nos vemos', 'hasta pronto'];
  return farewells.some(farewell => input.includes(farewell));
}

function isAffirmation(input) {
  const affirmations = ['si', 'claro', 'por supuesto', 'ok', 'vale', 'de acuerdo'];
  return affirmations.some(affirmation => input.includes(affirmation));
}

function isNegation(input) {
  const negations = ['no', 'nope', 'para nada', 'negativo'];
  return negations.some(negation => input.includes(negation));
}

function isQuestion(input) {
  return input.includes('?') || input.startsWith('que') || input.startsWith('como') ||
    input.startsWith('cuando') || input.startsWith('donde') || input.startsWith('por que');
}

function handleGreeting() {
  const greetings = [
    "¡Hola! Bienvenido a Digital Dynamo. Soy tu asistente virtual especializado en desarrollo web y marketing digital. ¿En qué puedo ayudarte hoy?",
    "¡Saludos! Estoy aquí para resolver tus dudas sobre WordPress, SEO, marketing digital y comercio electrónico. ¿Qué te gustaría saber?",
    "¡Buen día! Soy tu guía en el mundo del desarrollo web y marketing digital. Desde WordPress hasta estrategias de monetización, estoy aquí para ayudarte. ¿Sobre qué tema te gustaría aprender hoy?"
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}

function handleFarewell() {
  const farewells = [
    "¡Hasta luego! Ha sido un placer ayudarte. Recuerda que estoy aquí 24/7 para cualquier duda que tengas sobre desarrollo web y marketing digital. ¡Que tengas un excelente día!",
    "¡Adiós! Espero que nuestra conversación haya sido útil. No dudes en volver si tienes más preguntas. Recuerda, el aprendizaje es un viaje continuo en el mundo digital. ¡Hasta la próxima!",
    "¡Nos vemos pronto! Gracias por tu tiempo y tus preguntas. Sigue explorando y aprendiendo, y recuerda que estoy aquí para ayudarte en tu camino hacia el éxito online. ¡Hasta pronto!"
  ];
  return farewells[Math.floor(Math.random() * farewells.length)];
}

function handleAffirmation() {
  const responses = [
    "¡Excelente! Me alegra que estés interesado en aprender más. ",
    "¡Perfecto! Tu entusiasmo por aprender es admirable. ",
    "¡Fantástico! La curiosidad es el motor del aprendizaje. "
  ];
  const response = responses[Math.floor(Math.random() * responses.length)];

  if (conversationContext.currentTopic) {
    return response + `Profundicemos más en ${conversationContext.currentTopic}. ¿Hay algún aspecto específico que te gustaría explorar?`;
  } else {
    return response + "¿Sobre qué tema del desarrollo web o marketing digital te gustaría que profundizáramos?";
  }
}

function handleNegation() {
  const responses = [
    "Entiendo. No hay problema. ",
    "Gracias por tu honestidad. ",
    "De acuerdo, aprecio tu franqueza. "
  ];
  const response = responses[Math.floor(Math.random() * responses.length)];

  if (conversationContext.previousTopics.length > 0) {
    const previousTopic = conversationContext.previousTopics.pop();
    return response + `¿Te gustaría que volvamos a hablar sobre ${previousTopic}? O si prefieres, podemos explorar un tema completamente nuevo.`;
  } else {
    return response + "¿Hay algún otro aspecto del desarrollo web o marketing digital sobre el que te gustaría aprender? Estoy aquí para ayudarte con cualquier tema, desde los fundamentos de WordPress hasta estrategias avanzadas de SEO y marketing digital.";
  }
}

function handleQuestion(input) {
  let response = "";

  if (conversationContext.currentTopic) {
    response = getTopicInfo(conversationContext.currentTopic, input);
  }

  if (!response) {
    // Si no se encuentra información específica del tema, buscar en todos los temas
    for (const topic in knowledgeBase) {
      response = getTopicInfo(topic, input);
      if (response) break;
    }
  }

  if (!response) {
    response = "Esa es una pregunta interesante. Aunque no tengo una respuesta precisa en este momento, puedo ayudarte a explorar ese tema más a fondo. ¿Podrías darme más contexto sobre lo que te gustaría saber específicamente? Así podré proporcionarte información más relevante y útil.";
  }

  return response;
}

function getTopicInfo(topic, input) {
  for (const subtopic in knowledgeBase[topic]) {
    if (input.includes(subtopic)) {
      return knowledgeBase[topic][subtopic] + " ¿Te gustaría saber más sobre algún aspecto específico de este tema?";
    }
  }
  return null;
}

function handleGeneralInput(input) {
  if (conversationContext.currentTopic) {
    return `Veo que estamos hablando sobre ${conversationContext.currentTopic}. ${getRandomTopicQuestion(conversationContext.currentTopic)}`;
  } else {
    return "Gracias por compartir eso. Me encanta aprender más sobre tus intereses en el mundo digital. ¿Hay algún aspecto específico del desarrollo web o marketing digital sobre el que te gustaría saber más? Puedo ayudarte con temas como WordPress, SEO, marketing de contenidos, comercio electrónico y mucho más.";
  }
}

function getRandomTopicQuestion(topic) {
  const questions = {
    wordpress: [
      "¿Te gustaría saber más sobre cómo elegir el mejor tema para tu sitio WordPress?",
      "¿Quieres que hablemos sobre los plugins más útiles para mejorar la funcionalidad de tu sitio WordPress?",
      "¿Te interesa aprender sobre cómo optimizar el rendimiento y la seguridad de tu sitio WordPress?"
    ],
    seo: [
      "¿Te gustaría profundizar en técnicas avanzadas de SEO on-page?",
      "¿Quieres saber más sobre cómo hacer una investigación efectiva de palabras clave para mejorar tu SEO?",
      "¿Te interesa aprender sobre estrategias de construcción de enlaces para potenciar tu SEO off-page?"
    ],
    marketing: [
      "¿Te gustaría explorar estrategias efectivas de email marketing para aumentar tus conversiones?",
      "¿Quieres que hablemos sobre cómo crear una estrategia de contenidos exitosa para tu marketing digital?",
      "¿Te interesa saber más sobre cómo aprovechar las redes sociales para potenciar tu presencia online?"
    ],
    ecommerce: [
      "¿Te gustaría conocer las mejores prácticas para optimizar la experiencia de usuario en tu tienda online?",
      "¿Quieres que hablemos sobre estrategias para aumentar las tasas de conversión en tu plataforma de comercio electrónico?",
      "¿Te interesa saber más sobre cómo elegir la mejor plataforma de e-commerce para tu negocio y cómo configurarla correctamente?"
    ]
  };

  return questions[topic][Math.floor(Math.random() * questions[topic].length)];
}

function addVarietyToResponse(response) {
  const transitions = [
    "Por cierto, aquí hay un dato interesante relacionado: ",
    "Además, podrías encontrar útil saber que: ",
    "Relacionado con esto, es importante mencionar que: ",
    "Un consejo adicional sobre este tema: ",
    "Para complementar esta información, considera lo siguiente: "
  ];

  if (conversationContext.questionCount % 3 === 0) {
    const transition = transitions[Math.floor(Math.random() * transitions.length)];
    const randomTopic = Object.keys(knowledgeBase)[Math.floor(Math.random() * Object.keys(knowledgeBase).length)];
    const randomSubtopic = Object.keys(knowledgeBase[randomTopic])[Math.floor(Math.random() * Object.keys(knowledgeBase[randomTopic]).length)];

    response += " " + transition + knowledgeBase[randomTopic][randomSubtopic];
  }

  return response;
}