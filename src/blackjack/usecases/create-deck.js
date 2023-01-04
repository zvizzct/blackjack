import _ from 'underscore'

/**
 * Esta función crea un deck de cartas             
 * @param {Array<String>} tiposDeCarta  Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String} retorna un deck de cartas 
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if (!tiposDeCarta || !tiposEspeciales) throw new Error('No se puede crear el deck sin los tipos de carta y especiales')
    if (tiposDeCarta.length === 0 || tiposEspeciales.length === 0) throw new Error('No se puede crear el deck sin los tipos de carta y especiales')
    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    return deck;
}