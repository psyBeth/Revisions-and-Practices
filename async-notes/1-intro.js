//*==================================================
//*        1- SYNC-ASYNC PROGRAMMING
//*==================================================

//! JavaScript is single-threadded and asynchronous programming language.
//? async operations are performed in the background without blocking the main thread
//? higher performance and better user experience
//? important to use when getting data from API or database 
//? a promise may have one of 3 states: pending, fulfilled, rejected

//* SYNC
console.log("***SYNC***");
console.log("BetulBetul");
const lateing = (period) => {
    const begin = new Date().getTime()
    while (new Date().getTime() < begin + period) {}
}
console.time("begin") //? start the timer
lateing(2000) //? blocking for 2000 ms
console.timeEnd("begin") //? end the timer and show the time period