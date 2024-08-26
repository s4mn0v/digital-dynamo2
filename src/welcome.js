let scene, camera, renderer, cube;
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

    // Adjust welcome screen layout
    welcomeScreen.style.display = 'flex';
    welcomeScreen.style.flexDirection = 'column';
    welcomeScreen.style.justifyContent = 'center';
    welcomeScreen.style.alignItems = 'center';
    welcomeScreen.style.height = '100vh';

    // Create a container for the 3D object
    const avatarContainer = document.createElement('div');
    avatarContainer.id = 'avatar-container';
    avatarContainer.style.width = '100%';
    avatarContainer.style.height = '50%';
    avatarContainer.style.marginTop = '20%'; // Push the avatar down
    welcomeScreen.insertBefore(avatarContainer, welcomeMessage);

    // Adjust welcome message style
    welcomeMessage.style.marginTop = '20px';
    welcomeMessage.style.textAlign = 'center';
    welcomeMessage.style.maxWidth = '80%';

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight * 0.5); // Adjust renderer size
    document.getElementById('avatar-container').appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 0, 10);
    scene.add(light);

    camera.position.z = 5;

    animate();
    showWelcomeMessages();
}

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
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
    renderer.setSize(window.innerWidth, window.innerHeight * 0.5); // Adjust renderer size on resize
}

window.addEventListener('resize', onWindowResize, false);

window.onload = init;