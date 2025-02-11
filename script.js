const livros = [
    { nome: 'Gênesis', capitulos: 50, versiculos: 1533 },
    { nome: 'Êxodo', capitulos: 40, versiculos: 1213 },
    { nome: 'Levítico', capitulos: 27, versiculos: 859 },
    { nome: 'Números', capitulos: 36, versiculos: 1288 },
    { nome: 'Deuteronômio', capitulos: 34, versiculos: 959 },
    { nome: 'Josué', capitulos: 24, versiculos: 658 },
    { nome: 'Juízes', capitulos: 21, versiculos: 618 },
    { nome: 'Rute', capitulos: 4, versiculos: 85 },
    { nome: '1 Samuel', capitulos: 31, versiculos: 810 },
    { nome: '2 Samuel', capitulos: 24, versiculos: 695 },
    { nome: '1 Reis', capitulos: 22, versiculos: 816 },
    { nome: '2 Reis', capitulos: 25, versiculos: 719 },
    { nome: '1 Crônicas', capitulos: 29, versiculos: 942 },
    { nome: '2 Crônicas', capitulos: 36, versiculos: 822 },
    { nome: 'Esdras', capitulos: 10, versiculos: 280 },
    { nome: 'Neemias', capitulos: 13, versiculos: 406 },
    { nome: 'Ester', capitulos: 10, versiculos: 167 },
    { nome: 'Jó', capitulos: 42, versiculos: 1070 },
    { nome: 'Salmos', capitulos: 150, versiculos: 2461 },
    { nome: 'Provérbios', capitulos: 31, versiculos: 915 },
    { nome: 'Eclesiastes', capitulos: 12, versiculos: 222 },
    { nome: 'Cantares', capitulos: 8, versiculos: 117 },
    { nome: 'Isaías', capitulos: 66, versiculos: 1292 },
    { nome: 'Jeremias', capitulos: 52, versiculos: 1364 },
    { nome: 'Lamentações', capitulos: 5, versiculos: 154 },
    { nome: 'Ezequiel', capitulos: 48, versiculos: 1273 },
    { nome: 'Daniel', capitulos: 12, versiculos: 357 },
    { nome: 'Oseias', capitulos: 14, versiculos: 197 },
    { nome: 'Joel', capitulos: 3, versiculos: 73 },
    { nome: 'Amós', capitulos: 9, versiculos: 146 },
    { nome: 'Obadias', capitulos: 1, versiculos: 21 },
    { nome: 'Jonas', capitulos: 4, versiculos: 48 },
    { nome: 'Miqueias', capitulos: 7, versiculos: 105 },
    { nome: 'Naum', capitulos: 3, versiculos: 47 },
    { nome: 'Habacuque', capitulos: 3, versiculos: 56 },
    { nome: 'Sofonias', capitulos: 3, versiculos: 53 },
    { nome: 'Ageu', capitulos: 2, versiculos: 38 },
    { nome: 'Zacarias', capitulos: 14, versiculos: 211 },
    { nome: 'Malaquias', capitulos: 4, versiculos: 55 },
    { nome: 'Mateus', capitulos: 28, versiculos: 1071 },
    { nome: 'Marcos', capitulos: 16, versiculos: 678 },
    { nome: 'Lucas', capitulos: 24, versiculos: 1151 },
    { nome: 'João', capitulos: 21, versiculos: 879 },
    { nome: 'Atos', capitulos: 28, versiculos: 1007 },
    { nome: 'Romanos', capitulos: 16, versiculos: 433 },
    { nome: '1 Coríntios', capitulos: 16, versiculos: 437 },
    { nome: '2 Coríntios', capitulos: 13, versiculos: 257 },
    { nome: 'Gálatas', capitulos: 6, versiculos: 149 },
    { nome: 'Efésios', capitulos: 6, versiculos: 155 },
    { nome: 'Filipenses', capitulos: 4, versiculos: 104 },
    { nome: 'Colossenses', capitulos: 4, versiculos: 95 },
    { nome: '1 Tessalonicenses', capitulos: 5, versiculos: 89 },
    { nome: '2 Tessalonicenses', capitulos: 3, versiculos: 47 },
    { nome: '1 Timóteo', capitulos: 6, versiculos: 113 },
    { nome: '2 Timóteo', capitulos: 4, versiculos: 83 },
    { nome: 'Tito', capitulos: 3, versiculos: 46 },
    { nome: 'Filemom', capitulos: 1, versiculos: 25 },
    { nome: 'Hebreus', capitulos: 13, versiculos: 303 },
    { nome: 'Tiago', capitulos: 5, versiculos: 108 },
    { nome: '1 Pedro', capitulos: 5, versiculos: 105 },
    { nome: '2 Pedro', capitulos: 3, versiculos: 61 },
    { nome: '1 João', capitulos: 5, versiculos: 105 },
    { nome: '2 João', capitulos: 1, versiculos: 13 },
    { nome: '3 João', capitulos: 1, versiculos: 14 },
    { nome: 'Judas', capitulos: 1, versiculos: 25 },
    { nome: 'Apocalipse', capitulos: 22, versiculos: 404 }
];

const tabelaLivros = document.getElementById('tabela-livros');
const percentualLido = document.getElementById('percentual-lido');
const capitulosLidos = document.getElementById('capitulos-lidos');
const versiculosLidos = document.getElementById('versiculos-lidos');

let totalCapitulos = 0;
let totalVersiculos = 0;
let capitulosLidosCount = 0;
let versiculosLidosCount = 0;

livros.forEach(livro => {
    totalCapitulos += livro.capitulos;
    totalVersiculos += livro.versiculos;

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${livro.nome}</td>
        <td>${livro.capitulos}</td>
        <td>${livro.versiculos}</td>
        <td><input type="checkbox" class="checkbox-lido" data-capitulos="${livro.capitulos}" data-versiculos="${livro.versiculos}"></td>
    `;
    tabelaLivros.appendChild(row);
});

document.querySelectorAll('.checkbox-lido').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const capitulos = parseInt(checkbox.getAttribute('data-capitulos'));
        const versiculos = parseInt(checkbox.getAttribute('data-versiculos'));

        if (checkbox.checked) {
            capitulosLidosCount += capitulos;
            versiculosLidosCount += versiculos;
        } else {
            capitulosLidosCount -= capitulos;
            versiculosLidosCount -= versiculos;
        }

        const percentual = (capitulosLidosCount / totalCapitulos) * 100;
        percentualLido.textContent = `${percentual.toFixed(2)}%`;
        capitulosLidos.textContent = capitulosLidosCount;
        versiculosLidos.textContent = versiculosLidosCount;

        salvarProgresso();
    });
});

function salvarProgresso() {
    const progresso = {
        capitulosLidos: capitulosLidosCount,
        versiculosLidos: versiculosLidosCount,
        checkboxes: Array.from(document.querySelectorAll('.checkbox-lido')).map(checkbox => checkbox.checked)
    };
    localStorage.setItem('progressoLeitura', JSON.stringify(progresso));
}

function carregarProgresso() {
    const progresso = JSON.parse(localStorage.getItem('progressoLeitura'));
    if (progresso) {
        capitulosLidosCount = progresso.capitulosLidos;
        versiculosLidosCount = progresso.versiculosLidos;
        percentualLido.textContent = `${(capitulosLidosCount / totalCapitulos * 100).toFixed(2)}%`;
        capitulosLidos.textContent = capitulosLidosCount;
        versiculosLidos.textContent = versiculosLidosCount;

        const checkboxes = document.querySelectorAll('.checkbox-lido');
        progresso.checkboxes.forEach((checked, index) => {
            checkboxes[index].checked = checked;
        });
    }
}

// Carregar o progresso ao carregar a página
window.onload = carregarProgresso;
