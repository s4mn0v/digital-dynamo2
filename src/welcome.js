let welcomeScreen, welcomeMessage, skipButton;
const messages = [
  "¡Bienvenido a Digital Dynamo!",
  "Soy tu guía virtual para aprender sobre WordPress y marketing digital.",
  "En la barra lateral izquierda encontrarás los módulos del curso.",
  "Usa los botones de la barra superior para controlar la aplicación.",
  "¡Estoy aquí para ayudarte en tu viaje de aprendizaje!",
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
  welcomeScreen.style.background =
    "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.9) 100%)";
  welcomeScreen.style.backdropFilter = "blur(10px)";
  welcomeScreen.style.padding = "2vw";
  welcomeScreen.style.boxSizing = "border-box";
  welcomeScreen.style.zIndex = "1000";

  // Crear un contenedor para el avatar
  const avatarContainer = document.createElement("div");
  avatarContainer.id = "avatar-container";
  avatarContainer.style.width = "80vw";
  avatarContainer.style.maxWidth = "500px";
  avatarContainer.style.height = "auto";
  avatarContainer.style.aspectRatio = "1 / 1"; // Mantener una relación de aspecto cuadrada
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
  messageContainer.style.padding = "2vw";
  messageContainer.style.textAlign = "center";
  messageContainer.style.zIndex = "30";
  messageContainer.style.transition = "opacity 0.5s ease";
  welcomeScreen.appendChild(messageContainer);

  // Ajustar el estilo del mensaje de bienvenida
  welcomeMessage.style.color = "#000000";
  welcomeMessage.style.fontSize = "clamp(24px, 4vw, 36px)"; // Ajustar tamaño de fuente
  welcomeMessage.style.fontWeight = "600";
  welcomeMessage.style.lineHeight = "1.4";
  welcomeMessage.style.textShadow = "1px 1px 2px rgba(0,0,0,0.1)";
  welcomeMessage.style.fontFamily =
    "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
  welcomeMessage.style.margin = "0";
  welcomeMessage.style.width = "100%"; // Asegura que el mensaje ocupe todo el ancho disponible
  messageContainer.appendChild(welcomeMessage);

  // Crear el zorro 2D
  createFox2D();

  // Crear y añadir el botón de omitir
  createSkipButton();

  // Añadir el event listener de resize
  window.addEventListener("resize", onWindowResize, false);

  showWelcomeMessages();
}

function createFox2D() {
  const foxImage = new Image();
  foxImage.src =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-R1Hf0gJntkfd2O6z9O1PBPEVOMQCSC.png";
  foxImage.onload = function () {
    const avatarContainer = document.getElementById("avatar-container");
    const canvas = document.createElement("canvas");
    const size = Math.min(
      avatarContainer.clientWidth,
      avatarContainer.clientHeight
    );
    canvas.width = size * 2;
    canvas.height = size * 2;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    avatarContainer.innerHTML = "";
    avatarContainer.appendChild(canvas);

    const ctx = canvas.getContext("2d", { willReadFrequently: true });

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const scale = Math.min(
      canvas.width / foxImage.width,
      canvas.height / foxImage.height
    );
    const x = canvas.width / 2 - (foxImage.width / 2) * scale;
    const y = canvas.height / 2 - (foxImage.height / 2) * scale;

    // Aplicar suavizado
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      foxImage,
      x,
      y,
      foxImage.width * scale,
      foxImage.height * scale
    );

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      // Hacer transparente solo el fondo blanco
      if (data[i] > 250 && data[i + 1] > 250 && data[i + 2] > 250) {
        data[i + 3] = 0;
      }
    }
    ctx.putImageData(imageData, 0, 0);

    // Añadir sombras suaves
    ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
    ctx.shadowBlur = 15 * scale;
    ctx.shadowOffsetX = 5 * scale;
    ctx.shadowOffsetY = 5 * scale;
    ctx.drawImage(canvas, 0, 0);

    // Añadir detalles sutiles al pelaje
    ctx.globalCompositeOperation = "source-atop";
    for (let i = 0; i < 15000; i++) {
      const px = Math.random() * canvas.width;
      const py = Math.random() * canvas.height;
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.02})`;
      ctx.fillRect(px, py, 1, 1);
    }

    // Mejorar el brillo de los ojos
    const eyeSize = 15 * scale;
    const eyeX1 = canvas.width / 2 - 75 * scale;
    const eyeX2 = canvas.width / 2 + 75 * scale;
    const eyeY = canvas.height / 2 - 30 * scale;

    ctx.globalCompositeOperation = "lighter";
    const gradient = ctx.createRadialGradient(
      eyeX1,
      eyeY,
      0,
      eyeX1,
      eyeY,
      eyeSize
    );
    gradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(eyeX1, eyeY, eyeSize, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(eyeX2, eyeY, eyeSize, 0, Math.PI * 2);
    ctx.fill();
  };
}

function createSkipButton() {
  skipButton = document.createElement("button");
  skipButton.textContent = "Omitir";
  skipButton.style.position = "fixed";
  skipButton.style.right = "2vw";
  skipButton.style.bottom = "calc(15vh)"; // Posicionar el botón a un 85% desde la parte inferior
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
  skipButton.style.fontFamily =
    "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

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

function showWelcomeMessages() {
  let currentMessage = 0;
  const messageContainer = welcomeMessage.parentElement;

  function displayNextMessage() {
    if (currentMessage < messages.length) {
      messageContainer.style.opacity = 0;
      setTimeout(() => {
        welcomeMessage.textContent = messages[currentMessage];
        messageContainer.style.opacity = 1;
        currentMessage++;
        setTimeout(displayNextMessage, 3000);
      }, 500);
    } else {
      setTimeout(() => {
        hideWelcomeScreen();
      }, 1000);
    }
  }

  displayNextMessage();
}

function skipWelcome() {
  hideWelcomeScreen();
}

function hideWelcomeScreen() {
  welcomeScreen.style.opacity = 0;
  setTimeout(() => {
    welcomeScreen.style.display = "none";
    if (skipButton) {
      skipButton.remove();
    }
  }, 1000);
}

function onWindowResize() {
  createFox2D(); // Re-render the fox on resize
}

window.onload = init;
