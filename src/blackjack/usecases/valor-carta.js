
/** 
 * Esta función determina el valor de la carta
 * @param   {string} carta Ejemplo: '1C'
 * @returns {number} Devuelve el valor numérico de la carta
 * */ 

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}