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

        // Navigation betwenn modules
        const navigationButtons = createNavigationButtons(moduleId);
        content2.appendChild(navigationButtons);

    } catch (error) {
        console.error('Error loading module:', error);
        content2.innerHTML = '<p>Failed to load module.</p>';
    }
}


// Modules navigation between buttons

function createNavigationButtons(currentModuleId) {
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'module-navigation-buttons';

    const prevButton = document.createElement('button');
    prevButton.textContent = '← Módulo Anterior';
    prevButton.addEventListener('click', () => navigateModule(currentModuleId, 'prev'));

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Módulo Siguiente →';
    nextButton.addEventListener('click', () => navigateModule(currentModuleId, 'next'));

    buttonContainer.appendChild(prevButton);
    buttonContainer.appendChild(nextButton);

    return buttonContainer;
}

function navigateModule(currentModuleId, direction) {
    const moduleLinks = Array.from(document.querySelectorAll('#navigation-modules a'));
    const currentIndex = moduleLinks.findIndex(link => link.getAttribute('data-module') === currentModuleId);

    let newIndex;
    if (direction === 'prev') {
        newIndex = Math.max(0, currentIndex - 1);
    } else {
        newIndex = Math.min(moduleLinks.length - 1, currentIndex + 1);
    }

    const newModuleId = moduleLinks[newIndex].getAttribute('data-module');
    loadModule(newModuleId);
}

// END -  Modules navigation between buttons