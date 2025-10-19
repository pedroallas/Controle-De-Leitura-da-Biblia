import { books } from "../data/books.js";

/**
 * @typedef {object} Totals
 * @property {number} totalCapitulos - O número total de capítulos em todos os livros.
 * @property {number} totalVersiculos - O número total de versículos em todos os livros.
 */

/**
 * @typedef {object} Progress
 * @property {number} capitulosLidosCount - O número de capítulos lidos até o momento.
 * @property {number} versiculosLidosCount - O número de versículos lidos até o momento.
 * @property {boolean[]} checkboxes - Um array que representa o estado (marcado/desmarcado) de cada checkbox.
 */

/**
 * Calcula o número total de capítulos e versículos de uma lista de livros.
 * @param {import("../data/books.js").Book[]} books - A lista de livros para calcular os totais.
 * @returns {Totals} Um objeto contendo o total de capítulos e versículos.
 */
export function calculateTotals(books) {
    return books.reduce((totals, book) => {
        totals.totalCapitulos += book.capitulos;
        totals.totalVersiculos += book.versiculos;
        return totals;
    }, { totalCapitulos: 0, totalVersiculos: 0 });
}

/**
 * Atualiza o progresso da leitura com base na interação do usuário com um checkbox.
 * Adiciona ou subtrai o número de capítulos e versículos do livro correspondente.
 * @param {HTMLInputElement} checkbox - O elemento checkbox que foi alterado.
 * @param {Progress} currentProgress - O objeto de progresso atual.
 * @returns {Progress} O objeto de progresso atualizado.
 */
export function updateProgress(checkbox, currentProgress) {
    const capitulos = parseInt(checkbox.getAttribute('data-capitulos'));
    const versiculos = parseInt(checkbox.getAttribute('data-versiculos'));

    if (checkbox.checked) {
        currentProgress.capitulosLidosCount += capitulos;
        currentProgress.versiculosLidosCount += versiculos;
    } else {
        currentProgress.capitulosLidosCount -= capitulos;
        currentProgress.versiculosLidosCount -= versiculos;
    }
    return currentProgress;
}
