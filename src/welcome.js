let scene, camera, renderer, avatar;
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
    welcomeScreen.style.justifyContent = 'flex-start';
    welcomeScreen.style.alignItems = 'center';
    welcomeScreen.style.height = '100vh';
    welcomeScreen.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    welcomeScreen.style.padding = '20px';
    welcomeScreen.style.boxSizing = 'border-box';

    // Crear un contenedor para el objeto 3D
    const avatarContainer = document.createElement('div');
    avatarContainer.id = 'avatar-container';
    avatarContainer.style.width = '100%';
    avatarContainer.style.height = '40%';
    avatarContainer.style.marginTop = '10%';
    welcomeScreen.insertBefore(avatarContainer, welcomeMessage);

    // Ajustar el estilo del mensaje de bienvenida
    welcomeMessage.style.color = 'white';
    welcomeMessage.style.fontSize = '24px';
    welcomeMessage.style.textAlign = 'center';
    welcomeMessage.style.maxWidth = '80%';
    welcomeMessage.style.marginTop = '5%';
    welcomeMessage.style.position = 'relative';
    welcomeMessage.style.zIndex = '10';

    // Crear y añadir el botón de omitir
    skipButton = document.createElement('button');
    skipButton.textContent = 'Omitir';
    skipButton.style.position = 'absolute';
    skipButton.style.top = '10px';
    skipButton.style.right = '10px';
    skipButton.style.padding = '70px 16px';
    skipButton.style.backgroundColor = 'rgba(76, 175, 80, 0.8)';
    skipButton.style.color = 'white';
    skipButton.style.border = 'none';
    skipButton.style.borderRadius = '20px';
    skipButton.style.cursor = 'pointer';
    skipButton.style.zIndex = '1000';
    skipButton.style.fontFamily = 'Arial, sans-serif';
    skipButton.style.fontSize = '14px';
    skipButton.style.fontWeight = 'bold';
    skipButton.style.textTransform = 'uppercase';
    skipButton.style.letterSpacing = '1px';
    skipButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
    skipButton.style.transition = 'all 0.3s ease';
    skipButton.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'rgba(76, 175, 80, 1)';
        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
        this.style.transform = 'translateY(-2px)';
    });
    skipButton.addEventListener('mouseout', function() {
        this.style.backgroundColor = 'rgba(76, 175, 80, 0.8)';
        this.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
        this.style.transform = 'translateY(0)';
    });
    skipButton.addEventListener('click', skipWelcome);
    welcomeScreen.appendChild(skipButton);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true,
        powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight * 0.4);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('avatar-container').appendChild(renderer.domElement);

    // Crear una figura más interesante (un toro)
    const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
    const material = new THREE.MeshPhongMaterial({ color: 0x00ff00, shininess: 100 });
    avatar = new THREE.Mesh(geometry, material);
    scene.add(avatar);

    // Añadir más luces para mejorar la apariencia
    const light1 = new THREE.PointLight(0xffffff, 1, 100);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xffffff, 0.5, 100);
    light2.position.set(-5, -5, -5);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    camera.position.z = 5;

    animate();
    showWelcomeMessages();
}

function animate() {
    requestAnimationFrame(animate);
    avatar.rotation.x += 0.01;
    avatar.rotation.y += 0.01;
    renderer.render(scene, camera);
}

function showWelcomeMessages() {
    let currentMessage = 0;

    function displayNextMessage() {
        if (currentMessage < messages.length) {
            welcomeMessage.style.opacity = 0;
            setTimeout(() => {
                welcomeMessage.textContent = messages[currentMessage];
                welcomeMessage.style.opacity = 1;
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
    }, 1000);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight * 0.4);
}

window.addEventListener('resize', onWindowResize, false);

window.onload = init;