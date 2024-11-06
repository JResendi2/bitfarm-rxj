import { interval, zip, from } from 'rxjs';
import { sample } from 'rxjs/operators';
/*
  Emitir arrays con zip, a partir de un conjunto de valores
*/

const source = zip(
  from(['Joe', 'Frank', 'Bob','Bob', 'Bob']),
  interval(2000)
);

/*
  zip ->
    cada 2 segundos, emite (retorna) un array -> ['Joe', 0], ['Frank', 1], ['Bob', 2]
    asi hasta que se termine todo el array

    Necesita un intervalo de tiempo, para eso se utliza interval()
*/

const example = source.pipe(sample(interval(2500)));
/*
  de source, cada 2.5 segundos, se va a leer el ultimo array
*/


// Mostrar el observable: output: ["Joe", 0]...["Frank", 1]...........
const subscribe = example.subscribe(val => console.log(val));



