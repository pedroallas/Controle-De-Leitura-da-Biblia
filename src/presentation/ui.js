import { books } from '../data/books.js';
import { calculateTotals, updateProgress } from '../domain/progress.js';
import { storageService } from '../services/storageService.js';

const tabelaLivros = document.getElementById('tabela-livros');
const percentualLido = document.getElementById('percentual-lido');
const capitulosLidos = document.getElementById('capitulos-lidos');
const versiculosLidos = document.getElementById('versiculos-lidos');

let { totalCapitulos, totalVersiculos } = calculateTotals(books);
let progress = {
    capitul osLidosCount: 0,
    versiculosLidosCount: 0,
    checkboxes: []
};

export function initializeUI() {
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
    });

    document.getElementById('load-button').addEventListener('click', () => {
        const loadedProgress = storageService.loadProgress();
        if (loadedProgress) {
            progress = loadedProgress;
            updateCheckboxes();
            updateUI();
        }
    });

    const loadedProgress = storageService.loadProgress();
    if (loadedProgress) {
        progress = loadedProgress;
        updateCheckboxes();
        updateUI();
    }
}

function updateUI() {
    const percentual = (progress.capitulosLidosCount / totalCapitulos) * 100;
    percentualLido.textContent = `${percentual.toFixed(2)}%`;
    capitulosLidos.textContent = progress.capitulosLidosCount;
    versiculosLidos.textContent = progress.versiculosLidosCount;
}

function updateCheckboxes() {
    const checkboxes = document.querySelectorAll('.checkbox-lido');
    progress.checkboxes.forEach((checked, index) => {
        checkboxes[index].checked = checked;
    });
}
