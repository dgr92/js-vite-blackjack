
/** 
 * Esta función tomar una carta
 * @param   {Array<string>} deck Ejemplo: ['1C', '2D', '7H', '3S',...]
 * @returns {String} Retorna la última carta del deck. Ejemplo: '1C'
 * */ 

export const pedirCarta = ( deck ) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();

    return carta;
}