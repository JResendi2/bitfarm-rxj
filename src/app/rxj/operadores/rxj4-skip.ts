// RxJS v6+
import { interval } from 'rxjs';
import { skip } from 'rxjs/operators';

/*
  skip:

  -> omite valores del observable
*/

const source = interval(1000);
const example = source.pipe(skip(5));
//output: 5...6...7...8........
const subscribe = example.subscribe(val => console.log(val));

/*
  espera 5 segundos y despues los empieza a imprimir
*/
