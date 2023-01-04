
/**
 * Función que devuelve una carta del deck
 * @param {Array<String>} deck Array de cartas
 * @returns {String} Carta del deck
 */

export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}