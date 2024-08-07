function initializeModules() {
    const moduleLinks = document.querySelectorAll('#navigation-modules a');
    moduleLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const moduleId = e.target.closest('a').getAttribute('data-module');
            loadModule(moduleId);
        });
    });

    const lastModuleVisited = localStorage.getItem('currentModule') || 'module-1';
    loadModule(lastModuleVisited);
}

async function loadModule(moduleId) {
    localStorage.setItem('currentModule', moduleId);

    const moduleLinks = document.querySelectorAll('#navigation-modules a');
    moduleLinks.forEach(link => {
        link.parentElement.classList.remove('active-page');
        if (link.getAttribute('data-module') === moduleId) {
            link.parentElement.classList.add('active-page');
        }
    });

    const content2 = document.getElementById('content-2');
    const url = `../src/modules/modules/${moduleId}.html`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error! status: ${response.status}`);
        }
        const htmlContent = await response.text();
        content2.innerHTML = htmlContent;
    } catch (error) {
        console.error('Error loading module:', error);
        content2.innerHTML = '<p>Failed to load module.</p>';
    }
}