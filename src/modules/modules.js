function initializeModules() {
    const moduleLinks = document.querySelectorAll('#navigation-modules a');
    moduleLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const moduleId = e.target.closest('a').getAttribute('data-module');
            loadModule(moduleId);
        });
        
        // Añadir el símbolo de verificación a cada enlace de módulo
        const checkSymbol = document.createElement('span');
        checkSymbol.textContent = ' ✔';
        checkSymbol.style.color = 'green';
        checkSymbol.style.display = 'none';
        checkSymbol.className = 'module-check';
        link.appendChild(checkSymbol);
        
        // Verificar si el módulo está completado y mostrar el símbolo si es así
        const moduleId = link.getAttribute('data-module');
        const isCompleted = localStorage.getItem(`module-${moduleId}-completed`) === 'true';
        if (isCompleted) {
            checkSymbol.style.display = 'inline';
        }
    });

    const lastModuleVisited = localStorage.getItem('currentModule') || 'module-1';
    loadModule(lastModuleVisited);
    updateProgressBar();
}

async function loadModule(moduleId) {
    // Check if we're on the modules page
    const content2 = document.getElementById('content-2');
    if (!content2) {
        console.log('Not on modules page, skipping module load');
        return;
    }

    localStorage.setItem('currentModule', moduleId);

    const moduleLinks = document.querySelectorAll('#navigation-modules a');
    let targetModuleLink = null;

    moduleLinks.forEach(link => {
        link.parentElement.classList.remove('active-page');
        if (link.getAttribute('data-module') === moduleId) {
            link.parentElement.classList.add('active-page');
            targetModuleLink = link;
        }
    });

    // If the requested module is not found, default to the first module
    if (!targetModuleLink && moduleLinks.length > 0) {
        console.warn(`Module ${moduleId} not found. Loading the first module instead.`);
        targetModuleLink = moduleLinks[0];
        moduleId = targetModuleLink.getAttribute('data-module');
        localStorage.setItem('currentModule', moduleId);
        targetModuleLink.parentElement.classList.add('active-page');
    }

    const url = `../src/modules/modules/${moduleId}.html`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error! status: ${response.status}`);
        }
        const htmlContent = await response.text();
        
        // Create the checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `checkbox-${moduleId}`;
        checkbox.className = 'module-checkbox';
        
        const label = document.createElement('label');
        label.htmlFor = `checkbox-${moduleId}`;
        label.textContent = 'Módulo completado';

        const checkboxContainer = document.createElement('div');
        checkboxContainer.className = 'checkbox-container';
        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(label);

        // Insert the checkbox at the beginning of content-2
        content2.innerHTML = '';
        content2.appendChild(checkboxContainer);
        
        // Add the module content
        const moduleContent = document.createElement('div');
        moduleContent.innerHTML = htmlContent;
        content2.appendChild(moduleContent);

        // Load the checkbox state
        const isCompleted = localStorage.getItem(`module-${moduleId}-completed`) === 'true';
        checkbox.checked = isCompleted;

        // Update the check symbol in the navigation list
        if (targetModuleLink) {
            const checkSymbol = targetModuleLink.querySelector('.module-check');
            if (checkSymbol) {
                checkSymbol.style.display = isCompleted ? 'inline' : 'none';
            }
        }

        // Save the checkbox state when it changes
        checkbox.addEventListener('change', (e) => {
            localStorage.setItem(`module-${moduleId}-completed`, e.target.checked);
            updateProgressBar();
            if (targetModuleLink) {
                const checkSymbol = targetModuleLink.querySelector('.module-check');
                if (checkSymbol) {
                    checkSymbol.style.display = e.target.checked ? 'inline' : 'none';
                }
            }
        });

        // Navigation between modules
        const navigationButtons = createNavigationButtons(moduleId);
        content2.appendChild(navigationButtons);

        updateProgressBar();
    } catch (error) {
        console.error('Error loading module:', error);
        if (content2) {
            content2.innerHTML = '<p>Failed to load module.</p>';
        }
    }
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    if (!progressBar) {
        console.log('Progress bar not found, skipping update');
        return;
    }

    const totalModules = document.querySelectorAll('#navigation-modules a').length;
    const completedModules = Array.from(document.querySelectorAll('#navigation-modules a'))
        .filter(link => localStorage.getItem(`module-${link.getAttribute('data-module')}-completed`) === 'true')
        .length;
    
    const progressPercentage = Math.round((completedModules / totalModules) * 100);
    progressBar.style.width = `${progressPercentage}%`;
    
    progressBar.textContent = `${progressPercentage}%`;
    progressBar.style.color = progressPercentage > 50 ? 'white' : 'black';
    progressBar.style.textAlign = 'center';
    progressBar.style.lineHeight = '20px';
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