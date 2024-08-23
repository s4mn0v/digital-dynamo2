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
        
        // Crear el checkbox
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

        // Insertar el checkbox al principio del content-2
        content2.innerHTML = '';
        content2.appendChild(checkboxContainer);
        
        // Agregar el contenido del módulo
        const moduleContent = document.createElement('div');
        moduleContent.innerHTML = htmlContent;
        content2.appendChild(moduleContent);

        // Cargar el estado del checkbox
        const isCompleted = localStorage.getItem(`module-${moduleId}-completed`) === 'true';
        checkbox.checked = isCompleted;

        // Guardar el estado del checkbox cuando cambie
        checkbox.addEventListener('change', (e) => {
            localStorage.setItem(`module-${moduleId}-completed`, e.target.checked);
            updateProgressBar();
        });

        // Navigation between modules
        const navigationButtons = createNavigationButtons(moduleId);
        content2.appendChild(navigationButtons);

        updateProgressBar();
    } catch (error) {
        console.error('Error loading module:', error);
        content2.innerHTML = '<p>Failed to load module.</p>';
    }
}

function updateProgressBar() {
    const totalModules = document.querySelectorAll('#navigation-modules a').length;
    const completedModules = Array.from(document.querySelectorAll('#navigation-modules a'))
        .filter(link => localStorage.getItem(`module-${link.getAttribute('data-module')}-completed`) === 'true')
        .length;
    
    const progressPercentage = Math.round((completedModules / totalModules) * 100);
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${progressPercentage}%`;
    
    // Añadir el texto del porcentaje dentro de la barra de progreso
    progressBar.textContent = `${progressPercentage}%`;
    
    // Ajustar el estilo para que el texto sea visible
    progressBar.style.color = progressPercentage > 50 ? 'white' : 'black';
    progressBar.style.textAlign = 'center';
    progressBar.style.lineHeight = '20px'; // Debe coincidir con la altura de la barra
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