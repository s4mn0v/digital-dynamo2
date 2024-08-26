let welcomeScreen, welcomeMessage, skipButton;
let speechSynthesis;
let speechUtterance;
let isSpeaking = true;
let selectedVoice = null;

const messages = [
  { text: "¡Bienvenido a Digital Dynamo!", highlight: null },
  {
    text: "Soy tu guía virtual para aprender sobre WordPress y marketing digital.",
    highlight: null,
  },
  {
    text: "En la barra lateral izquierda encontrarás los módulos del curso.",
    highlight: "sidebar",
  },
  {
    text: "El botón 'Inicio' te llevará a la página principal del curso.",
    highlight: "inicio-button",
  },
  {
    text: "En 'Módulos' accederás a todos los temas del curso.",
    highlight: "modulos-button",
  },
  {
    text: "Usa los botones de la barra superior para controlar la aplicación.",
    highlight: "topbar",
  },
  {
    text: "El botón siguiente a módulos te permite ocultar o mostrar la barra lateral.",
    highlight: "toggle-sidebar",
  },
  {
    text: "En el panel derecho verás el contenido de cada módulo.",
    highlight: "main-content",
  },
  {
    text: "¡Estoy aquí para ayudarte en tu viaje de aprendizaje!",
    highlight: null,
  },
  {
    text: "Recuerda que esta el chat-bot habilitado para cualquier pregunta",
    highlight: null,
  },
  { text: "¡BIENVENIDO!", highlight: null },
];

function init() {
  welcomeScreen = document.getElementById("welcome-screen");
  welcomeMessage = document.getElementById("welcome-message");

  // Ajustar el diseño de la pantalla de bienvenida
  welcomeScreen.style.display = "flex";
  welcomeScreen.style.flexDirection = "column";
  welcomeScreen.style.justifyContent = "center";
  welcomeScreen.style.alignItems = "center";
  welcomeScreen.style.height = "100vh";
  welcomeScreen.style.width = "100vw";
  welcomeScreen.style.position = "fixed";
  welcomeScreen.style.top = "0";
  welcomeScreen.style.left = "0";
  welcomeScreen.style.background = "linear-gradient(135deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.03) 100%)";
  welcomeScreen.style.backdropFilter = "blur(1px)";
  welcomeScreen.style.padding = "2vw";
  welcomeScreen.style.boxSizing = "border-box";
  welcomeScreen.style.zIndex = "1000";

  // Crear un contenedor para el avatar
  const avatarContainer = document.createElement("div");
  avatarContainer.id = "avatar-container";
  avatarContainer.style.width = "80vw";
  avatarContainer.style.maxWidth = "500px";
  avatarContainer.style.height = "auto";
  avatarContainer.style.aspectRatio = "1 / 1";
  avatarContainer.style.position = "relative";
  avatarContainer.style.display = "flex";
  avatarContainer.style.justifyContent = "center";
  avatarContainer.style.alignItems = "center";
  avatarContainer.style.overflow = "hidden";
  avatarContainer.style.zIndex = "20";
  welcomeScreen.appendChild(avatarContainer);

  // Crear un contenedor para el mensaje de bienvenida
  const messageContainer = document.createElement("div");
  messageContainer.style.position = "relative";
  messageContainer.style.width = "90%";
  messageContainer.style.maxWidth = "800px";
  messageContainer.style.padding = "5vw";
  messageContainer.style.textAlign = "center";
  messageContainer.style.zIndex = "30";
  messageContainer.style.transition = "opacity 0.5s ease";
  welcomeScreen.appendChild(messageContainer);

  // Ajustar el estilo del mensaje de bienvenida
  welcomeMessage.style.color = "#FFFFFF";
  welcomeMessage.style.fontSize = "clamp(24px, 4vw, 36px)";
  welcomeMessage.style.fontWeight = "600";
  welcomeMessage.style.lineHeight = "1.4";
  welcomeMessage.style.textShadow = "2px 2px 4px rgba(0,0,0,0.7)";
  welcomeMessage.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
  welcomeMessage.style.margin = "0";
  welcomeMessage.style.width = "100%";
  welcomeMessage.style.backgroundColor = "rgba(0,0,0,0.3)";
  welcomeMessage.style.borderRadius = "10px";  
  messageContainer.appendChild(welcomeMessage);

  // Inicializar el sintetizador de voz
  speechSynthesis = window.speechSynthesis;
  speechUtterance = new SpeechSynthesisUtterance();

  // Configurar la voz fija
  setFixedVoice();

  // Crear el zorro (ahora cargará el GIF)
  createFox2D();

  // Crear y añadir el botón de omitir
  createSkipButton();

  // Crear y añadir el botón de control de audio
  createAudioControlButton();

  // Añadir el event listener de resize
  window.addEventListener("resize", onWindowResize, false);

  showWelcomeMessages();
}

function adjustWelcomeMessageStyle() {
  welcomeMessage.style.color = "#FFFFFF";
  welcomeMessage.style.fontSize = "clamp(24px, 4vw, 36px)";
  welcomeMessage.style.fontWeight = "600";
  welcomeMessage.style.lineHeight = "1.4";
  welcomeMessage.style.textShadow = "2px 2px 4px rgba(0,0,0,0.5)";
  welcomeMessage.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
  welcomeMessage.style.margin = "0";
  welcomeMessage.style.width = "100%";
  welcomeMessage.style.textAlign = "center";
  welcomeMessage.style.padding = "10px";
  welcomeMessage.style.backgroundColor = "rgba(0,0,0,0.2)";
  welcomeMessage.style.borderRadius = "10px";
}

function setFixedVoice() {
  speechSynthesis.onvoiceschanged = () => {
    const voices = speechSynthesis.getVoices();
    selectedVoice = voices.find(
      (voice) => voice.name === "Microsoft Sabina - Spanish (Mexico)"
    );

    if (selectedVoice) {
      speechUtterance.voice = selectedVoice;
      speechUtterance.lang = selectedVoice.lang;

      // Ajustar parámetros para una voz más natural
      speechUtterance.pitch = 1.2; // Ligeramente más alto
      speechUtterance.rate = 0.9; // Ligeramente más lento
    } else {
      console.warn(
        "La voz 'Microsoft Sabina - Spanish (Mexico)' no está disponible. Se usará la voz predeterminada."
      );
    }
  };

  // Trigger la carga de voces
  speechSynthesis.getVoices();
}

function createFox2D() {
  const foxImage = new Image();
  foxImage.src = "../assets/icons/fox.gif";
  foxImage.onload = function () {
    const avatarContainer = document.getElementById("avatar-container");
    avatarContainer.innerHTML = ""; // Limpiar el contenedor

    // Crear un elemento de imagen para el GIF
    const gifElement = document.createElement("img");
    gifElement.src = foxImage.src;
    gifElement.style.width = "100%";
    gifElement.style.height = "100%";
    gifElement.style.objectFit = "contain";

    // Añadir el GIF al contenedor
    avatarContainer.appendChild(gifElement);
  };
}

function createSkipButton() {
  skipButton = document.createElement("button");
  skipButton.textContent = "Omitir";
  skipButton.style.position = "fixed";
  skipButton.style.right = "2vw";
  skipButton.style.bottom = "calc(17vh)";
  skipButton.style.padding = "1vw 2vw";
  skipButton.style.backgroundColor = "rgba(0, 174, 239, 0.8)";
  skipButton.style.color = "white";
  skipButton.style.border = "none";
  skipButton.style.borderRadius = "30px";
  skipButton.style.cursor = "pointer";
  skipButton.style.fontSize = "clamp(14px, 2vw, 16px)";
  skipButton.style.fontWeight = "bold";
  skipButton.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
  skipButton.style.transition = "all 0.3s ease";
  skipButton.style.zIndex = "1001";
  skipButton.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

  skipButton.addEventListener("mouseover", function () {
    this.style.backgroundColor = "rgba(0, 174, 239, 1)";
    this.style.transform = "scale(1.05) translateY(-2px)";
    this.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.3)";
  });

  skipButton.addEventListener("mouseout", function () {
    this.style.backgroundColor = "rgba(0, 174, 239, 0.8)";
    this.style.transform = "scale(1) translateY(0)";
    this.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
  });

  skipButton.addEventListener("click", skipWelcome);

  welcomeScreen.appendChild(skipButton);
}

function createAudioControlButton() {
  const audioButton = document.createElement("button");
  audioButton.id = "audio-control";
  audioButton.innerHTML = "🔊"; // Emoji de altavoz
  audioButton.style.position = "fixed";
  audioButton.style.left = "2vw";
  audioButton.style.bottom = "calc(17vh)";
  audioButton.style.padding = "1vw";
  audioButton.style.backgroundColor = "rgba(0, 174, 239, 0.8)";
  audioButton.style.color = "white";
  audioButton.style.border = "none";
  audioButton.style.borderRadius = "50%";
  audioButton.style.cursor = "pointer";
  audioButton.style.fontSize = "clamp(20px, 3vw, 24px)";
  audioButton.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
  audioButton.style.transition = "all 0.3s ease";
  audioButton.style.zIndex = "1001";

  audioButton.addEventListener("click", toggleAudio);
  welcomeScreen.appendChild(audioButton);
}

function toggleAudio() {
  isSpeaking = !isSpeaking;
  const audioButton = document.getElementById("audio-control");
  audioButton.innerHTML = isSpeaking ? "🔊" : "🔇";

  if (!isSpeaking) {
    speechSynthesis.cancel();
  }
}

function showWelcomeMessages() {
  let currentMessage = 0;
  const messageContainer = welcomeMessage.parentElement;

  function displayNextMessage() {
    if (currentMessage < messages.length) {
      messageContainer.style.opacity = 0;
      setTimeout(() => {
        welcomeMessage.textContent = messages[currentMessage].text;
        messageContainer.style.opacity = 1;
        highlightElement(messages[currentMessage].highlight);

        // Reproducir el mensaje actual
        if (isSpeaking) {
          speechUtterance.text = messages[currentMessage].text;
          speechSynthesis.speak(speechUtterance);
        }

        currentMessage++;
        setTimeout(displayNextMessage, 5000); // Increased to 5 seconds for better readability
      }, 500);
    } else {
      setTimeout(() => {
        playMagicSound();
        hideWelcomeScreen();
      }, 1000);
    }
  }

  displayNextMessage();
}

function highlightElement(element) {
  removeHighlight();
  if (element) {
    const elementToHighlight = document.getElementById(element);
    if (elementToHighlight) {
      const clone = elementToHighlight.cloneNode(true);
      clone.id = `${element}-clone`;
      clone.style.position = "fixed";
      clone.style.zIndex = "1002";
      clone.style.boxShadow = "0 0 0 9999px rgba(0, 0, 0, 0.7)";
      clone.style.transition = "all 0.5s ease";
      clone.style.transform = "scale(1.1)";
      clone.style.pointerEvents = "none";

      const rect = elementToHighlight.getBoundingClientRect();
      clone.style.top = `${rect.top}px`;
      clone.style.left = `${rect.left}px`;
      clone.style.width = `${rect.width}px`;
      clone.style.height = `${rect.height}px`;

      document.body.appendChild(clone);

      setTimeout(() => {
        clone.style.transform = "scale(1.1)";
      }, 50);

      elementToHighlight.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      // Add a pulsating effect
      const pulse = document.createElement("div");
      pulse.style.position = "absolute";
      pulse.style.top = "0";
      pulse.style.left = "0";
      pulse.style.right = "0";
      pulse.style.bottom = "0";
      pulse.style.border = "3px solid #00AEEF";
      pulse.style.borderRadius = "5px";
      pulse.style.animation = "pulse 2s infinite";
      clone.appendChild(pulse);
    }
  }
}

function removeHighlight() {
  const highlightedElements = document.querySelectorAll('[id$="-clone"]');
  highlightedElements.forEach((el) => {
    el.style.opacity = "0";
    setTimeout(() => el.remove(), 500);
  });
}

function skipWelcome() {
  removeHighlight();
  speechSynthesis.cancel(); // Detener cualquier audio en reproducción
  isSpeaking = false; // Asegurarse de que el estado de habla esté desactivado
  const audioButton = document.getElementById("audio-control");
  if (audioButton) {
    audioButton.innerHTML = "🔇"; // Cambiar el icono del botón de audio
  }
  playMagicSound();
  hideWelcomeScreen();
}

function hideWelcomeScreen() {
  const messageContainer = welcomeMessage.parentElement;
  const avatarContainer = document.getElementById("avatar-container");

  // Detener cualquier síntesis de voz en curso
  speechSynthesis.cancel();

  // Aplicar transición suave
  welcomeScreen.style.transition = "opacity 2s ease-out";
  messageContainer.style.transition =
    "opacity 1.5s ease-out, transform 1.5s ease-out";
  avatarContainer.style.transition =
    "opacity 1.5s ease-out, transform 1.5s ease-out";

  // Iniciar la transición
  welcomeScreen.style.opacity = "0";
  messageContainer.style.opacity = "0";
  messageContainer.style.transform = "translateY(20px)";
  avatarContainer.style.opacity = "0";
  avatarContainer.style.transform = "scale(0.9)";

  // Ocultar completamente después de la transición
  setTimeout(() => {
    welcomeScreen.style.display = "none";
    if (skipButton) {
      skipButton.remove();
    }
    const audioButton = document.getElementById("audio-control");
    if (audioButton) {
      audioButton.remove();
    }
  }, 2000);

  // Eliminar todos los listeners de voz para asegurarse de que no haya más síntesis de voz
  speechSynthesis.onvoiceschanged = null;
  window.removeEventListener("beforeunload", cancelSpeech);
}

function onWindowResize() {
  createFox2D();
}

// Función para cancelar la síntesis de voz antes de que la página se cierre
function cancelSpeech() {
  speechSynthesis.cancel();
}

// Añadir un listener para cancelar la síntesis de voz antes de que la página se cierre
window.addEventListener("beforeunload", cancelSpeech);

// Función para reproducir el sonido mágico
function playMagicSound() {
  return;
}

// Add keyframe animation for pulsating effect
const style = document.createElement("style");
style.textContent = `
  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.7; }
    100% { transform: scale(1); opacity: 1; }
  }
`;
document.head.appendChild(style);

window.onload = init;