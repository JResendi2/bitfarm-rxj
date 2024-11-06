import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

// Encadenamiento de operadores con pipe()

const source = of(1, 2, 3, 4, 5);

const example = source.pipe(
  filter(value => value % 2 === 0), // Filtra valores pares
  map(value => value * 10)          // Multiplica cada valor por 10
);

/*
  "filter" y "map" son operadores

  en este caso, no se emiten valores cada cierto tiempo
*/

// Suscripción al observable resultante
example.subscribe(val => console.log(val));
