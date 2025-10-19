import { initializeUI } from './src/presentation/ui.js';

/**
 * Ponto de entrada principal da aplicação.
 * Aguarda o evento 'DOMContentLoaded' para garantir que o DOM esteja completamente
 * carregado antes de inicializar a interface do usuário.
 * @listens DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', () => {
    initializeUI();
});
