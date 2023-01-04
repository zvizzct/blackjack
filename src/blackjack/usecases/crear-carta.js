
/**
 * Crea una carta en formato HTML
 * @param {String} carta  Ejemplo: 'AS', '10C', 'KH'
 * @returns {HTMLImageElement} Carta en formato HTML
 */
export const crearCartaHTML = (carta) => {

    if (!carta) throw new Error('No se puede crear la carta sin el valor')
    const imgCarta = document.createElement('img');
    imgCarta.src = `/assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    return imgCarta;
}