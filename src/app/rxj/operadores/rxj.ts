// RxJS v6+
import { interval } from 'rxjs';
import { sample } from 'rxjs/operators';
/*
  sample es un operador, que cotrola el flujo de datos de algo
*/

// sample -> permite controlar la frecuencia con la que se emiten los valores, para evitar saturar el procesamiento con datos emitidos demasiado


const source = interval(1000); // emite valores cada segundo (1000 milisegundos)


const example = source.pipe(sample(interval(2000))); // cada 2 segundos captura el ultimo valor de source


/*
    pipe(), captura los eventos de "source"
    sample(), con ayuda de interval, le dice a pipe() que cada 2 segundos debe capturar los datos
    las instrucciones se guardan en "example"
*/

/*
  pipe() -> permite aplicar una serie de operadores de forma secuencial y estructurada, es como un filtro por dende pasa la informacion

    1 - Encadenar múltiples operadores

    2 - Transformar datos

    3 - Controlar el flujo de datos: sample
*/

// output: 2..4..6..8..

// const subscribe = example.subscribe(val => console.log(val));
                     // example emitira eventos cada 2 segundos, de acuerdo a la configuración anterior


const subscribe = source.subscribe(val => console.log(val));



