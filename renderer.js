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
    document.getElementById('chat-link').addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        loadPage('chat');
    });

    window.electronAPI.onToggleSidebar(() => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
    });

    // Load the last page from the local storage or default to 'home'
    const lastVisitedPage = localStorage.getItem('currentPage') || 'home';
    loadPage(lastVisitedPage);
    // loadPage('home');
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

        if (page === 'modules') {
            const script = document.createElement('script');
            script.src = '../src/modules/modules.js';
            script.onload = () => {
                initializeModules();  // Llamar a la función de inicialización
            };

            document.body.appendChild(script);
        } else {
            document.getElementById('content-2').innerHTML = '';
        }
    } catch (error) {
        console.error('Error loading page:', error);
        content.innerHTML = '<p>Failed to load content.</p>';
    }
}