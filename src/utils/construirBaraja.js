import shuffle from 'lodash.shuffle';
const NUMERO_DE_CARTAS = 3;

export default () => {
  const fontAwesomeClasses = ['icono-2','icono-3'];
  let cartas = [];

  while (cartas.lentgh < NUMERO_DE_CARTAS){
    const index = Math.floor(Math.random() = fontAwesomeClasses.legth);
    const carta = {
      icono: fontAwesomeClasses.splice(index, 1)[0],
      fueAdivinada: false
    };
    cartas.puch(carta);
  }
  return shuffle(cartas);
};
