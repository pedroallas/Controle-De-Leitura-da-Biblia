/**
 * @typedef {import("../domain/progress.js").Progress} Progress
 */

/**
 * Um serviço para interagir com o `localStorage` do navegador.
 * Encapsula a lógica de salvar e carregar o progresso da leitura.
 * @namespace
 */
export const storageService = {
    /**
     * Salva o objeto de progresso no `localStorage`.
     * @param {Progress} progress - O objeto de progresso a ser salvo.
     */
    saveProgress(progress) {
        localStorage.setItem('readingProgress', JSON.stringify(progress));
    },

    /**
     * Carrega o objeto de progresso do `localStorage`.
     * @returns {Progress | null} O objeto de progresso salvo, ou `null` se não houver nenhum.
     */
    loadProgress() {
        const progress = localStorage.getItem('readingProgress');
        return progress ? JSON.parse(progress) : null;
    }
};
