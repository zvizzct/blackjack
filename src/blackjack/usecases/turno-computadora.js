
import { pedirCarta } from './pedir-carta.js';
import { valorCarta } from './valor-carta.js';
import { crearCartaHTML } from './crear-carta.js';

/**
 * Función que determina el turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que necesita la computadora para ganar
 * @param {Array<HTMLElement>} puntosHTML arreglo de elementos HTML que muestran los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML que contiene las cartas de la computadora
 * @param {Array<string>} deck deck de cartas
 */

export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
    let puntosComputadora = 0;
    if (!puntosMinimos || !deck || !puntosHTML) throw new Error('No se puede determinar el turno de la computadora sin los puntos minimos y el deck');
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);


        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}

