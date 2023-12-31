//*==================================================
//*        1- SYNC-ASYNC PROGRAMMING
//*==================================================

//! JavaScript is single-threadded and asynchronous programming language.
//? async operations are performed in the background without blocking the main thread
//? higher performance and better user experience
//? important to use when getting data from API or database 
//? a promise may have one of 3 states: pending, fulfilled, rejected

//* SYNC
// console.log("***SYNC***");
// console.log("BetulBetul");
// const lateing = (period) => {
//     const begin = new Date().getTime()
//     while (new Date().getTime() < begin + period) {}
// }
// console.time("begin") //? start the timer
// lateing(2000) //? blocking for 2000 ms
// console.timeEnd("begin") //? end the timer and show the time period

//*ASYNC --- setTimeout()
// const timeoutId = setTimeout(() => {
//     console.log("Time's up");
// } , 1000) //? triggers after 1000 ms

// setTimeout(() => {
//     console.log("timeout2 is up");
// } , 500)

// console.log("timeout is set"); //?sync
// console.log("timeout is up");  //?sync

// clearTimeout(timeoutId) //? cancels timeout

//* ASYNC --- setInterval() - clearInterval()

// let i = 0 
// const time = setInterval(() => {
//     console.log(++i);
//     if (i>=5){
//         clearInterval(time)
//     }
// } , 1000)

//! Callback Hell (nested and independant callbacks)
/* hard to understand and not a very good programming approach */

setTimeout(() => {
  console.log("john:Hi") //? request
  setTimeout(() => {
    console.log("Sarah: Hello") //? respond
    setTimeout(() => {
      console.log("John: How Are you?") //? send data
      setTimeout(() => {
        console.log("Sarah:Fine and you?") //? starting to send
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)

//? SOLUTIONS
//* 1- XMLHttpRequest (old method, example: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise (suitable for custom async code- Advance)
//! 3- Fetch API (easy version of Promise),
//! 4- ASYNC-AWAIT (tiny adds to Fetch API)