import { interval } from 'rxjs';

// Create an Observable that will publish a value on an interval
const secondsCounter = interval(1000); // es como un setInterval
// Subscribe to begin publishing values
const subscription = secondsCounter.subscribe(n =>
  console.log(`It's been ${n + 1} seconds since subscribing!`));
