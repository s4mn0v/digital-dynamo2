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
    case "chat":
      url = "../src/chat/chat.html";
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
    introduccion: "WordPress es un sistema de gestión de contenidos (CMS) que permite crear y mantener fácilmente sitios web. Es utilizado por aproximadamente el 40% de todos los sitios web en Internet.",
    temas: "Los temas en WordPress controlan el aspecto visual de tu sitio. Puedes elegir entre miles de temas gratuitos y premium, o crear uno propio para personalizar completamente tu sitio.",
    plugins: "Los plugins añaden funcionalidades adicionales a tu sitio WordPress. Hay plugins para SEO, seguridad, formularios, comercio electrónico y prácticamente cualquier función que puedas necesitar.",
    seguridad: "La seguridad en WordPress es crucial. Algunas prácticas recomendadas incluyen usar contraseñas fuertes, mantener WordPress y todos los plugins actualizados, utilizar plugins de seguridad confiables y realizar copias de seguridad regulares.",
    optimizacion: "Para optimizar WordPress, puedes usar plugins de caché, optimizar imágenes, minimizar el uso de plugins, elegir un buen hosting y utilizar una red de distribución de contenido (CDN)."
  },
  seo: {
    introduccion: "SEO (Search Engine Optimization) son técnicas para mejorar la visibilidad de un sitio web en los motores de búsqueda, aumentando así el tráfico orgánico.",
    onpage: "El SEO on-page incluye optimizar el contenido, las etiquetas HTML, la estructura del sitio y la velocidad de carga. Es todo lo que puedes hacer dentro de tu propio sitio web para mejorar su posicionamiento.",
    offpage: "El SEO off-page se refiere a acciones fuera de tu sitio que afectan tu ranking, como la construcción de enlaces de calidad, la presencia en redes sociales y las menciones de marca.",
    keywords: "La investigación de palabras clave es fundamental para el SEO. Implica encontrar los términos que tu audiencia usa para buscar contenido relacionado con tu sitio y utilizarlos estratégicamente en tu contenido.",
    contenido: "El contenido de calidad es esencial para el SEO. Debe ser original, relevante, y proporcionar valor a los usuarios. Google premia el contenido que responde mejor a las intenciones de búsqueda de los usuarios."
  },
  marketing: {
    digital: "El marketing digital abarca todas las estrategias de marketing realizadas en medios y canales de internet. Incluye SEO, marketing de contenidos, email marketing, marketing en redes sociales y publicidad online.",
    contenidos: "El marketing de contenidos se centra en crear y distribuir contenido valioso y relevante para atraer y retener a una audiencia claramente definida, con el objetivo de impulsar la acción del cliente.",
    email: "El email marketing implica enviar mensajes comerciales a través de correo electrónico a una lista de contactos. Es una forma efectiva de mantener el contacto con tus clientes y promover tus productos o servicios.",
    redessociales: "El marketing en redes sociales utiliza plataformas como Facebook, Instagram, Twitter y LinkedIn para conectar con la audiencia, construir marca y promocionar productos o servicios."
  },
  ecommerce: {
    plataformas: "Hay varias plataformas de comercio electrónico populares como WooCommerce (para WordPress), Shopify, y Magento. Cada una tiene sus propias ventajas y es adecuada para diferentes tipos de negocios.",
    optimizacion: "La optimización de comercio electrónico incluye mejorar la experiencia del usuario, optimizar para dispositivos móviles, usar buenas descripciones e imágenes de productos, y simplificar el proceso de compra.",
    pagos: "Es importante ofrecer múltiples opciones de pago seguras para mejorar las tasas de conversión en una tienda online. Esto puede incluir tarjetas de crédito, PayPal, y otros métodos populares en tu mercado.",
    envios: "Una buena estrategia de envío es crucial para el éxito en comercio electrónico. Esto incluye ofrecer varias opciones de envío, ser transparente con los costos y tiempos de entrega, y considerar ofertas como envío gratuito."
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
    wordpress: ['wordpress', 'cms', 'gestion de contenidos', 'tema', 'plugin'],
    seo: ['seo', 'optimizacion', 'motores de busqueda', 'palabras clave', 'serp'],
    marketing: ['marketing', 'promocion', 'publicidad', 'email', 'redes sociales'],
    ecommerce: ['comercio electronico', 'tienda online', 'ecommerce', 'carrito de compras']
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