document.addEventListener('DOMContentLoaded', () => {
    const switchInput = document.querySelector('.cabecalho__switch-input');
    const body = document.body;
    const logo = document.getElementById('logo');

    const updateSidebarIcons = () => {
        console.log('Updating sidebar icons...');
        const icons = document.querySelectorAll('.menu-lateral__item i');
        icons.forEach(icon => {
            const parent = icon.parentElement;
            parent.style.display = 'none'; // Force re-render
            void parent.offsetWidth; // Trigger reflow
            parent.style.display = ''; // Reset display
        });
    };

    const updateLogo = (isDarkMode) => {
        if (isDarkMode) {
            logo.src = './img/modo_escuro/vidflow-logo-dark-mode.png';
        } else {
            logo.src = './img/modo_claro/vidflow-logo-light-mode.png';
        }
    };

    if (localStorage.getItem('dark-mode') === 'enabled') {
        console.log('Dark mode is enabled');
        body.classList.add('dark-mode');
        switchInput.checked = true;
        updateLogo(true);
        updateSidebarIcons();
    }

    switchInput.addEventListener('change', () => {
        const isDarkMode = switchInput.checked;
        if (isDarkMode) {
            console.log('Switching to dark mode');
            body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            console.log('Switching to light mode');
            body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
        }
        updateLogo(isDarkMode);
        updateSidebarIcons();
    });
});
