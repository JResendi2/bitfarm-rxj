import { from, } from 'rxjs';

// Create an Observable out of a promise
const data = from(fetch('/api/endpoint')); // hace referencia a una url de la aplicacion
// Subscribe to begin listening for async result
data.subscribe({
  next(response) { console.log(response); },
  error(err) { console.error('Error: ' + err); },
  complete() { console.log('Completed'); }
});
