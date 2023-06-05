import _ from "underscore";

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ej: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ej: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

  if ( !tiposDeCarta || tiposDeCarta.length < 0 ) 
       throw new Error('Tipos de Carta es obligatorio como un arreglo de string');  //MSJ DE ERROR PERSONALIZADO EN CONSOLA

  if ( !tiposEspeciales || tiposEspeciales.length < 0 ) 
       throw new Error('Tipos Especiales es obligatorio como un arreglo de string');  //MSJ DE ERROR PERSONALIZADO EN CONSOLA

  let deck = [];

  for( let i = 2; i <= 10; i++ ) {
      for( let tipo of tiposDeCarta ) {
          deck.push( i + tipo);
      }
  }

  for( let tipo of tiposDeCarta ) {
      for( let esp of tiposEspeciales ) {
          deck.push( esp + tipo);
      }
  }  
  deck = _.shuffle( deck );  
  return deck;
}

// export default crearDeck; // EXPORTACION POR DEFECTO