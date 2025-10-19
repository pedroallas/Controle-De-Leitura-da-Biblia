export function calculateTotals(books) {
    return books.reduce((totals, book) => {
        totals.totalCapitulos += book.capitulos;
        totals.totalVersiculos += book.versiculos;
        return totals;
    }, { totalCapitulos: 0, totalVersiculos: 0 });
}

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
