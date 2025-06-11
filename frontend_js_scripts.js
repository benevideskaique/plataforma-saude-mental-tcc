document.addEventListener('DOMContentLoaded', () => {
    // 1. Funcionalidade do Menu Responsivo (Hambúrguer)
    const navToggle = document.querySelector('.nav-toggle');
    const mainMenu = document.getElementById('main-menu');

    if (navToggle && mainMenu) {
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
            navToggle.setAttribute('aria-expanded', !expanded);
            mainMenu.classList.toggle('active');
        });

        // Fechar menu ao clicar em um item (em mobile)
        mainMenu.querySelectorAll('a').forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth <= 768) { // Considera mobile
                    navToggle.setAttribute('aria-expanded', 'false');
                    mainMenu.classList.remove('active');
                }
            });
        });
    }

    // 2. Funcionalidade de Acessibilidade: Alternar Alto Contraste
    const toggleContrastButton = document.getElementById('toggle-contrast');
    if (toggleContrastButton) {
        toggleContrastButton.addEventListener('click', () => {
            document.body.classList.toggle('high-contrast');
            // Salvar preferência do usuário (opcional, usando localStorage)
            if (document.body.classList.contains('high-contrast')) {
                localStorage.setItem('accessibility-contrast', 'high');
            } else {
                localStorage.removeItem('accessibility-contrast');
            }
        });

        // Carregar preferência do usuário ao carregar a página
        if (localStorage.getItem('accessibility-contrast') === 'high') {
            document.body.classList.add('high-contrast');
        }
    }

    // 3. Funcionalidade de Acessibilidade: Alternar Tamanho da Fonte
    const toggleFontSizeButton = document.getElementById('toggle-font-size');
    let currentFontSize = 0; // 0: normal, 1: large, 2: extra-large

    const applyFontSize = () => {
        document.body.classList.remove('large-font', 'extra-large-font');
        if (currentFontSize === 1) {
            document.body.classList.add('large-font');
        } else if (currentFontSize === 2) {
            document.body.classList.add('extra-large-font');
        }
        localStorage.setItem('accessibility-font-size', currentFontSize);
    };

    if (toggleFontSizeButton) {
        toggleFontSizeButton.addEventListener('click', () => {
            currentFontSize = (currentFontSize + 1) % 3; // Cicla entre 0, 1, 2
            applyFontSize();
        });

        // Carregar preferência do usuário ao carregar a página
        const savedFontSize = localStorage.getItem('accessibility-font-size');
        if (savedFontSize !== null) {
            currentFontSize = parseInt(savedFontSize);
            applyFontSize();
        }
    }

    // 4. Exemplo de link para Política de Acessibilidade (apenas demonstração)
    const accessibilityPolicyLink = document.getElementById('acessibility-policy-link');
    if (accessibilityPolicyLink) {
        accessibilityPolicyLink.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que o link navegue
            alert('Esta é uma demonstração da Política de Acessibilidade. Aqui você detalharia as diretrizes WCAG e outras práticas de inclusão.');
            // Em uma aplicação real, isso levaria a uma página dedicada.
        });
    }

    // 5. Simulação de Lógica de Agendamento (na página professional-profile.html)
    const scheduleButton = document.querySelector('.booking-card .btn-primary');
    if (scheduleButton) {
        scheduleButton.addEventListener('click', (e) => {
            e.preventDefault();
            const dateInput = document.getElementById('calendar-input').value;
            const timeSlot = document.getElementById('time-slot').value;

            if (dateInput && timeSlot) {
                alert(`Consulta agendada com sucesso para ${dateInput} às ${timeSlot}!`);
                // Lógica real: enviar dados para o backend, processar, etc.
            } else {
                alert('Por favor, selecione uma data e um horário.');
            }
        });
    }

    // 6. Simulação de Lógica de Filtros (na página professionals.html)
    const applyFiltersButton = document.querySelector('.search-form .btn-primary');
    if (applyFiltersButton) {
        applyFiltersButton.addEventListener('click', (e) => {
            e.preventDefault();
            const searchInput = document.getElementById('search-input').value;
            const specialtyFilter = document.getElementById('specialty-filter').value;
            const ethnicityFilter = document.getElementById('ethnicity-filter').value;
            const accessibilityFilter = document.getElementById('accessibility-filter').value;

            alert(`Aplicando filtros:\nBusca: ${searchInput}\nEspecialidade: ${specialtyFilter}\nEtnia: ${ethnicityFilter}\nAcessibilidade: ${accessibilityFilter}\n\n(Em uma aplicação real, isso faria uma requisição ao backend para filtrar os resultados.)`);
            // Lógica real: fazer requisição AJAX para o backend para buscar profissionais com esses filtros
        });
    }
});
