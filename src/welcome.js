let welcomeScreen, welcomeMessage, skipButton;
const messages = [
    "¡Bienvenido a Digital Dynamo!",
    "Soy tu guía virtual para aprender sobre WordPress y marketing digital.",
    "En la barra lateral izquierda encontrarás los módulos del curso.",
    "Usa los botones de la barra superior para controlar la aplicación.",
    "¡Estoy aquí para ayudarte en tu viaje de aprendizaje!"
];

function init() {
    welcomeScreen = document.getElementById('welcome-screen');
    welcomeMessage = document.getElementById('welcome-message');

    // Ajustar el diseño de la pantalla de bienvenida
    welcomeScreen.style.display = 'flex';
    welcomeScreen.style.flexDirection = 'column';
    welcomeScreen.style.justifyContent = 'center';
    welcomeScreen.style.alignItems = 'center';
    welcomeScreen.style.height = '100vh';
    welcomeScreen.style.width = '100vw';
    welcomeScreen.style.position = 'fixed';
    welcomeScreen.style.top = '0';
    welcomeScreen.style.left = '0';
    welcomeScreen.style.background = 'linear-gradient(135deg, rgba(0,174,239,0.1) 0%, rgba(0,174,239,0.4) 100%)';
    welcomeScreen.style.backdropFilter = 'blur(10px)';
    welcomeScreen.style.padding = '20px';
    welcomeScreen.style.boxSizing = 'border-box';
    welcomeScreen.style.zIndex = '1000';

    // Crear un contenedor para el avatar
    const avatarContainer = document.createElement('div');
    avatarContainer.id = 'avatar-container';
    avatarContainer.style.width = '550px';
    avatarContainer.style.height = '550px';
    avatarContainer.style.position = 'absolute';
    avatarContainer.style.top = '40%';
    avatarContainer.style.left = '50%';
    avatarContainer.style.transform = 'translate(-50%, -50%)';
    avatarContainer.style.zIndex = '20';
    welcomeScreen.appendChild(avatarContainer);

    // Crear un contenedor para el mensaje de bienvenida
    const messageContainer = document.createElement('div');
    messageContainer.style.position = 'absolute';
    messageContainer.style.bottom = '20%';
    messageContainer.style.left = '50%';
    messageContainer.style.transform = 'translateX(-50%)';
    messageContainer.style.width = '90%';
    messageContainer.style.maxWidth = '800px';
    messageContainer.style.padding = '20px';
    messageContainer.style.zIndex = '30';
    messageContainer.style.transition = 'opacity 0.5s ease';
    welcomeScreen.appendChild(messageContainer);

    // Ajustar el estilo del mensaje de bienvenida
    welcomeMessage.style.color = '#ffffff';
    welcomeMessage.style.fontSize = 'clamp(40px, 5vw, 40px)';
    welcomeMessage.style.textAlign = 'center';
    welcomeMessage.style.margin = '0';
    welcomeMessage.style.fontWeight = '600';
    welcomeMessage.style.lineHeight = '1.4';
    welcomeMessage.style.textShadow = '2px 2px 4px rgba(0,0,0,0.5)';
    welcomeMessage.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    messageContainer.appendChild(welcomeMessage);

    // Crear el zorro 2D
    createFox2D();

    // Crear y añadir el botón de omitir
    createSkipButton();

    // Añadir el event listener de resize
    window.addEventListener('resize', onWindowResize, false);

    showWelcomeMessages();
}

function createFox2D() {
    const foxImage = new Image();
    foxImage.src = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-R1Hf0gJntkfd2O6z9O1PBPEVOMQCSC.png';
    foxImage.onload = function() {
        const avatarContainer = document.getElementById('avatar-container');
        const canvas = document.createElement('canvas');
        canvas.width = 550;
        canvas.height = 550;
        avatarContainer.innerHTML = '';
        avatarContainer.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const scale = Math.min(canvas.width / foxImage.width, canvas.height / foxImage.height);
        const x = (canvas.width / 2) - (foxImage.width / 2) * scale;
        const y = (canvas.height / 2) - (foxImage.height / 2) * scale;
        
        // Dibujar sombra
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
        ctx.shadowBlur = 20;
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        
        ctx.drawImage(foxImage, x, y, foxImage.width * scale, foxImage.height * scale);

        // Resetear sombra
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
            if ((data[i] > 200 && data[i+1] > 100 && data[i+2] < 50) || 
                (data[i] > 200 && data[i+1] > 200 && data[i+2] > 200)) {
                data[i+3] = 0;
            }
            // Cambiar el color naranja por azul
            if (data[i] > 200 && data[i+1] > 100 && data[i+2] < 50) {
                data[i] = 0;    // R
                data[i+1] = 174;  // G
                data[i+2] = 239;  // B
            }
        }
        ctx.putImageData(imageData, 0, 0);

        // Añadir brillo a los ojos
        const eyeSize = 12;
        const eyeX1 = canvas.width / 2 - 50;
        const eyeX2 = canvas.width / 2 + 50;
        const eyeY = canvas.height / 2 - 20;

        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(eyeX1, eyeY, eyeSize, 0, Math.PI * 2);
        ctx.arc(eyeX2, eyeY, eyeSize, 0, Math.PI * 2);
        ctx.fill();

        // Añadir efecto de brillo general
        ctx.globalCompositeOperation = 'lighter';
        const gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Añadir detalles al pelaje
        ctx.globalCompositeOperation = 'source-over';
        for (let i = 0; i < 1000; i++) {
            const px = Math.random() * canvas.width;
            const py = Math.random() * canvas.height;
            ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.1})`;
            ctx.fillRect(px, py, 1, 1);
        }
    };
}

function createSkipButton() {
    skipButton = document.createElement('button');
    skipButton.textContent = 'Omitir';
    skipButton.style.position = 'fixed';
    skipButton.style.right = '2rem';
    skipButton.style.top = 'calc(2rem + 20px)';
    skipButton.style.padding = '12px 24px';
    skipButton.style.backgroundColor = 'rgba(0, 174, 239, 0.8)';
    skipButton.style.color = 'white';
    skipButton.style.border = 'none';
    skipButton.style.borderRadius = '30px';
    skipButton.style.cursor = 'pointer';
    skipButton.style.fontSize = 'clamp(16px, 3vw, 18px)';
    skipButton.style.fontWeight = 'bold';
    skipButton.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    skipButton.style.transition = 'all 0.3s ease';
    skipButton.style.zIndex = '1001';
    skipButton.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

    skipButton.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'rgba(0, 174, 239, 1)';
        this.style.transform = 'scale(1.05) translateY(-2px)';
        this.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.3)';
    });

    skipButton.addEventListener('mouseout', function() {
        this.style.backgroundColor = 'rgba(0, 174, 239, 0.8)';
        this.style.transform = 'scale(1) translateY(0)';
        this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    });

    skipButton.addEventListener('click', skipWelcome);
    
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
        welcomeScreen.style.display = 'none';
        if (skipButton) {
            skipButton.remove();
        }
    }, 1000);
}

function onWindowResize() {
    const avatarContainer = document.getElementById('avatar-container');
    const size = Math.min(window.innerWidth, window.innerHeight) * 0.5;
    avatarContainer.style.width = `${size}px`;
    avatarContainer.style.height = `${size}px`;

    const canvas = avatarContainer.querySelector('canvas');
    if (canvas) {
        canvas.width = size;
        canvas.height = size;
        createFox2D();
    }
}

window.onload = init;