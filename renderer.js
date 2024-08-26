document.getElementById('minimize-btn').addEventListener('click', () => window.electronAPI.minimize());
document.getElementById('maximize-btn').addEventListener('click', () => window.electronAPI.maximize());
document.getElementById('close-btn').addEventListener('click', () => window.electronAPI.close());

document.addEventListener('DOMContentLoaded', async (event) => {
    document.getElementById('home-link').addEventListener('click', (e) => {
        e.preventDefault();
        loadPage('home');
    });
    document.getElementById('modules-link').addEventListener('click', (e) => {
        e.preventDefault();
        loadPage('modules');
    });

    const hideSidebarBtn = document.getElementById('hide-sidebar-btn');
    const showSidebarBtn = document.getElementById('show-sidebar-btn');
    const sidebar = document.querySelector('.sidebar');
    const content2 = document.getElementById('content-2');

    if (hideSidebarBtn) hideSidebarBtn.addEventListener('click', () => window.electronAPI.toggleSidebar());
    if (showSidebarBtn) showSidebarBtn.addEventListener('click', () => window.electronAPI.toggleSidebar());

    window.electronAPI.onToggleSidebar(() => {
        const isHidden = sidebar.style.display === 'none';
        sidebar.style.display = isHidden ? 'block' : 'none';
        showSidebarBtn.style.display = isHidden ? 'none' : 'block';
        content2.style.width = isHidden ? '100%' : 'calc(100% - 200px)';
    });

    const lastVisitedPage = localStorage.getItem('currentPage') || 'home';
    loadPage(lastVisitedPage);

    initializeAvatar();
});

async function loadPage(page) {
    localStorage.setItem('currentPage', page);

    const header = document.getElementById("navigation");
    const activeMenu = header.getElementsByClassName("menu-item");

    for (let i = 0; i < activeMenu.length; i++) {
        activeMenu[i].classList.remove("active-page");
    }

    const currentMenuItem = document.getElementById(`${page}-link`);
    if (currentMenuItem) {
        currentMenuItem.parentElement.classList.add("active-page");
    }

    const content = document.getElementById('content');
    let url = '';

    switch (page) {
        case 'home':
            url = '../src/home.html';
            break;
        case 'modules':
            url = '../src/modules/modules.html';
            break;
        case 'chat':
            url = '../src/chat/chat.html';
            break;
        default:
            url = '../src/home.html';
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const htmlContent = await response.text();
        content.innerHTML = htmlContent;

        const content2 = document.getElementById('content-2');
        if (page === 'modules') {
            if (!document.querySelector('script[src="../src/modules/modules.js"]')) {
                const script = document.createElement('script');
                script.src = '../src/modules/modules.js';
                script.nonce = "RandomNonceHere";
                script.onload = () => {
                    if (typeof initializeModules === 'function') {
                        initializeModules();
                        loadCurrentModule();
                    }
                };
                document.body.appendChild(script);
            } else {
                if (typeof initializeModules === 'function') {
                    initializeModules();
                    loadCurrentModule();
                }
            }
        } else {
            loadCurrentModule();
        }
    } catch (error) {
        console.error('Error loading page:', error);
        content.innerHTML = '<p>Failed to load content.</p>';
    }
}

function loadCurrentModule() {
    const content2 = document.getElementById('content-2');
    const currentModule = localStorage.getItem('currentModule') || 'module-1';
    if (typeof loadModule === 'function') {
        loadModule(currentModule);
    } else {
        fetch(`../src/modules/modules/${currentModule}.html`)
            .then(response => response.text())
            .then(html => {
                content2.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading module:', error);
                content2.innerHTML = '<p>Failed to load module content.</p>';
            });
    }
}

function animateAvatar() {
    const avatarImage = document.getElementById('avatar-image');
    avatarImage.style.transition = 'transform 0.5s';
    avatarImage.style.transform = 'scale(1.1)';
    setTimeout(() => {
        avatarImage.style.transform = 'scale(1)';
    }, 500);
}

function processUserInput(input) {
    console.log('Procesando entrada del usuario:', input);
    animateAvatar();
    addMessage(input, 'user-message');
    
    setTimeout(() => {
        const response = "Gracias por tu pregunta. Estoy procesando la información.";
        addMessage(response, 'avatar-message');
    }, 1000);
}

function addMessage(text, className) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = text;
    messageElement.classList.add('message', className);
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function initializeAvatar() {
    const avatarContainer = document.getElementById('avatar-container');
    const avatarChat = document.getElementById('avatar-chat');
    const avatarImage = document.getElementById('avatar-image');
    const sendButton = document.getElementById('send-button');
    const userInput = document.getElementById('user-input');

    if (avatarImage && avatarChat && sendButton && userInput) {
        // Usar el estilo Notionists de Dicebear
        const seed = 'Rocky'; // Puedes cambiar esto por el nombre del usuario o un identificador único
        avatarImage.src = `https://api.dicebear.com/6.x/notionists/svg?seed=${seed}`;

        avatarImage.addEventListener('click', () => {
            avatarChat.style.display = avatarChat.style.display === 'none' ? 'block' : 'none';
        });

        sendButton.addEventListener('click', () => {
            const question = userInput.value.trim();
            if (question) {
                processUserInput(question);
                userInput.value = '';
            }
        });

        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendButton.click();
            }
        });
    } else {
        console.error('Elementos del avatar no encontrados');
    }
}

function animateAvatar() {
    const avatarImage = document.getElementById('avatar-image');
    avatarImage.style.animation = 'pulse 0.5s';
    setTimeout(() => {
        avatarImage.style.animation = '';
    }, 500);
}

function processUserInput(input) {
    console.log('Procesando entrada del usuario:', input);
    addMessage(input, 'user-message');
    
    const response = getAvatarResponse(input);
    setTimeout(() => {
        animateAvatar();
        addMessage(response, 'avatar-message');
    }, 1000);
}

function getAvatarResponse(input) {
    const lowercaseInput = input.toLowerCase();
    if (lowercaseInput.includes('hola') || lowercaseInput.includes('saludar')) {
        return "¡Hola! ¿En qué puedo ayudarte hoy?";
    } else if (lowercaseInput.includes('módulo') || lowercaseInput.includes('modulo')) {
        return "Los módulos son secciones de aprendizaje en nuestra plataforma. ¿Sobre qué módulo específico quieres saber más?";
    } else if (lowercaseInput.includes('marketing')) {
        return "El marketing digital es crucial para promocionar tu negocio en línea. ¿Quieres saber más sobre estrategias específicas?";
    } else if (lowercaseInput.includes('seo')) {
        return "SEO significa Optimización para Motores de Búsqueda. Es importante para mejorar la visibilidad de tu sitio web. ¿Quieres aprender técnicas de SEO?";
    } else {
        return "Gracias por tu pregunta. No estoy seguro de cómo responder a eso. ¿Podrías reformular tu pregunta o preguntar sobre los módulos, marketing digital o SEO?";
    }
}