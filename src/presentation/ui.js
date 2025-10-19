import { books } from '../data/books.js';
import { calculateTotals, updateProgress } from '../domain/progress.js';
import { storageService } from '../services/storageService.js';

// Elementos do DOM
const tabelaLivros = document.getElementById('tabela-livros');
const percentualLido = document.getElementById('percentual-lido');
const capitulosLidos = document.getElementById('capitulos-lidos');
const versiculosLidos = document.getElementById('versiculos-lidos');

// Estado da aplicação
let { totalCapitulos, totalVersiculos } = calculateTotals(books);
/** @type {import("../domain/progress.js").Progress} */
let progress = {
    capitulosLidosCount: 0,
    versiculosLidosCount: 0,
    checkboxes: Array(books.length).fill(false)
};

/**
 * Inicializa a interface do usuário.
 * Renderiza a tabela de livros, anexa os event listeners e carrega o progresso salvo.
 */
export function initializeUI() {
    renderBookTable();
    addEventListeners();
    loadAndApplyProgress();
}

/**
 * Renderiza a tabela de livros na página.
 * Itera sobre a lista de livros e cria uma linha na tabela para cada um.
 */
function renderBookTable() {
    books.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.nome}</td>
            <td>${book.capitulos}</td>
            <td>${book.versiculos}</td>
            <td><input type="checkbox" class="checkbox-lido" data-capitulos="${book.capitulos}" data-versiculos="${book.versiculos}"></td>
        `;
        tabelaLivros.appendChild(row);
    });
}

/**
 * Anexa os event listeners aos elementos interativos da página.
 * (checkboxes e botões de salvar/carregar).
 */
function addEventListeners() {
    document.querySelectorAll('.checkbox-lido').forEach((checkbox, index) => {
        checkbox.addEventListener('change', () => {
            progress = updateProgress(checkbox, progress);
            progress.checkboxes[index] = checkbox.checked;
            updateUI();
            storageService.saveProgress(progress);
        });
    });

    document.getElementById('save-button').addEventListener('click', () => {
        storageService.saveProgress(progress);
        alert('Progresso salvo!');
    });

    document.getElementById('load-button').addEventListener('click', () => {
        loadAndApplyProgress();
        alert('Progresso carregado!');
    });
}

/**
 * Carrega o progresso salvo do `storageService` e atualiza a UI.
 */
function loadAndApplyProgress() {
    const loadedProgress = storageService.loadProgress();
    if (loadedProgress) {
        progress = loadedProgress;
        updateCheckboxes();
        updateUI();
    }
}

/**
 * Atualiza os elementos da UI que exibem as estatísticas de progresso
 * (percentual, capítulos e versículos lidos).
 */
function updateUI() {
    const percentual = (progress.capitulosLidosCount / totalCapitulos) * 100;
    percentualLido.textContent = `${percentual.toFixed(2)}%`;
    capitulosLidos.textContent = progress.capitulosLidosCount;
    versiculosLidos.textContent = progress.versiculosLidosCount;
}

/**
 * Atualiza o estado dos checkboxes na tabela com base no progresso carregado.
 */
function updateCheckboxes() {
    const checkboxes = document.querySelectorAll('.checkbox-lido');
    if (progress.checkboxes && progress.checkboxes.length === checkboxes.length) {
        progress.checkboxes.forEach((checked, index) => {
            checkboxes[index].checked = checked;
        });
    }
}
