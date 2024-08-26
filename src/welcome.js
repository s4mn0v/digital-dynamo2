let scene, camera, renderer, gear;
let welcomeScreen, welcomeMessage;
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

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight * 0.4);
    document.getElementById('avatar-container').appendChild(renderer.domElement);

    // Crear un engranaje
    const gearGeometry = new THREE.Shape();
    const outerRadius = 1;
    const innerRadius = 0.8;
    const teeth = 20;
    const toothDepth = 0.2;

    gearGeometry.moveTo(outerRadius, 0);
    for (let i = 0; i < teeth; i++) {
        const angle = (i / teeth) * Math.PI * 2;
        const nextAngle = ((i + 1) / teeth) * Math.PI * 2;
        
        gearGeometry.lineTo(
            Math.cos(angle) * outerRadius,
            Math.sin(angle) * outerRadius
        );
        
        gearGeometry.lineTo(
            Math.cos(angle + 0.1) * (outerRadius + toothDepth),
            Math.sin(angle + 0.1) * (outerRadius + toothDepth)
        );
        
        gearGeometry.lineTo(
            Math.cos(nextAngle - 0.1) * (outerRadius + toothDepth),
            Math.sin(nextAngle - 0.1) * (outerRadius + toothDepth)
        );
        
        gearGeometry.lineTo(
            Math.cos(nextAngle) * outerRadius,
            Math.sin(nextAngle) * outerRadius
        );
    }

    const extrudeSettings = {
        steps: 2,
        depth: 0.2,
        bevelEnabled: false
    };

    const gearExtrudeGeometry = new THREE.ExtrudeGeometry(gearGeometry, extrudeSettings);
    const gearMaterial = new THREE.MeshPhongMaterial({ color: 0x1E90FF, shininess: 100 });
    gear = new THREE.Mesh(gearExtrudeGeometry, gearMaterial);

    scene.add(gear);

    // Añadir luces para mejorar la apariencia
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
    gear.rotation.z += 0.01;
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
                welcomeScreen.style.opacity = 0;
                setTimeout(() => {
                    welcomeScreen.style.display = 'none';
                }, 1000);
            }, 1000);
        }
    }

    displayNextMessage();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight * 0.4);
}

window.addEventListener('resize', onWindowResize, false);

window.onload = init;