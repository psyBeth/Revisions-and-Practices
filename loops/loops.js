const arr = ['walter', 'jesse', 'saul']

arr[Symbol.iterator] = function(){
    let i = 0
    let arr = this;
    return{
        next: function(){
            if( i>= arr.length){
                return { done: true};
            } else {
                const value = arr[i] + '🥶';
                i++;
                return { value, done: false};
            }
        }
    }
}

// for ([initialization]; [condition]; [final-expression]) {}

for (const e of arr){
    console.log(e) 
}

for (let i = 0; i < 5; i++) {
    console.log("Hello World",i)
}               // there will be output for 5 times

for ( let i = 1; i <= 5; i++){
    if( i % 2 !== 0) 
    console.log(i)
}         //we could also do it in reverse order 

const myarr = [];
for (var i = 0; i < 5; i++){
    // if(i > 2) break;
    myarr.push(i);
}
console.log(myarr)

const myarr2 = [10,9,8,7,6];
for(let i = 0; i < myarr2.length; i++){
    console.log(myarr2[i]);
}

//now nested for loop
const myarr3 = [ [1,2], [3,4], [5,6] ];
for( let i = 0; i < myarr3.length; i++){
    for(let j = 0; j < myarr3[i].length; j++){
        console.log(myarr3[i][j])
    }
}
