#RxJS
What is RxJS trying to accomplish
Its really good for data flow managment


FRP - functional reactive programing 
- functional is a programing pattern around a series of small functions. promise chaining is functional programing 
- "do a step, get a result and pump it into the next step" 

Functional flow that reacts to things that happen. Rx does this through observables 

```javascript 

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//because its an array we get all of the data imediatly 
//if it was a stream, we could listen to the incoming data 

let numbers$ = Rx.observable.from(numbers)
.map(num => num * 3)
.filter(num => num % 2 === 0)
.filter(num = > num > 1000)
.delay(3000)
.take(3)



numbers$.subscribe((next, done, err) => {
  console.log(next)
})





// debouncing

rx.observable.fromEvent($('#typebox'), 'keydown')
.debounce(500)

.subscribe((res)=>{
  console.log('you typed')
})




//promises
const PROMISE = makeRequest(ENDPOINT),
source = Rx.observable.fromPromise(PROMISE)
.flatMao(Rx.observable.from)


```


What is cycle JS ? a front end framwork what works off of RxJS. It has inputs and outputs and etc... 

