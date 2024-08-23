// Title bar functions
document.getElementById('minimize-btn').addEventListener('click', () => {
    window.electronAPI.minimize();
});

document.getElementById('maximize-btn').addEventListener('click', () => {
    window.electronAPI.maximize();
});

document.getElementById('close-btn').addEventListener('click', () => {
    window.electronAPI.close();
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Add event listeners to the menu items
    document.getElementById('home-link').addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        loadPage('home');
    });
    document.getElementById('modules-link').addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        loadPage('modules');
    });

    // Add event listener for toggle-sidebar button
    const hideSidebarBtn = document.getElementById('hide-sidebar-btn');
    const showSidebarBtn = document.getElementById('show-sidebar-btn');
    const sidebar = document.querySelector('.sidebar');
    const content2 = document.getElementById('content-2');

    if (hideSidebarBtn) {
        hideSidebarBtn.addEventListener('click', () => {
            window.electronAPI.toggleSidebar();
        });
    }

    if (showSidebarBtn) {
        showSidebarBtn.addEventListener('click', () => {
            window.electronAPI.toggleSidebar();
        });
    }

    window.electronAPI.onToggleSidebar(() => {
        const isHidden = sidebar.style.display === 'none';
        
        sidebar.style.display = isHidden ? 'block' : 'none';
        showSidebarBtn.style.display = isHidden ? 'none' : 'block';
        
        // Adjust the content-2 width
        content2.style.width = isHidden ? '100%' : 'calc(100% - 200px)'; // Adjust 200px to match your sidebar width
    });

    // Load the last page from the local storage or default to 'home'
    const lastVisitedPage = localStorage.getItem('currentPage') || 'home';
    loadPage(lastVisitedPage);
});

async function loadPage(page) {
    localStorage.setItem('currentPage', page); // Local storage for the current page

    const header = document.getElementById("navigation");
    const activeMenu = header.getElementsByClassName("menu-item");

    // Remove active class from all menu items
    for (let i = 0; i < activeMenu.length; i++) {
        activeMenu[i].classList.remove("active-page");
    }

    // Set the active class for the current page
    const currentMenuItem = document.getElementById(`${page}-link`);
    if (currentMenuItem) {
        currentMenuItem.parentElement.classList.add("active-page"); // Add active class to the parent <li>
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

        // Stay in the current module
        const content2 = document.getElementById('content-2');
        if (page === 'modules') {
            // Verificar si el script ya existe
            if (!document.querySelector('script[src="../src/modules/modules.js"]')) {
                const script = document.createElement('script');
                script.src = '../src/modules/modules.js';
                script.nonce = "RandomNonceHere";  // Agregar el nonce aquí
                script.onload = () => {
                    if (typeof initializeModules === 'function') {
                        initializeModules();
                        loadCurrentModule();
                    }
                };
                document.body.appendChild(script);
            } else {
                // Si el script ya existe, solo llamamos a initializeModules
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

// WEBVIEW

// const webview = document.getElementById('myWebview');

// webview.addEventListener('dom-ready', () => {
//     console.log('WebView cargado correctamente');
// });

// function loadUrl(url) {
//     webview.src = url;
// }