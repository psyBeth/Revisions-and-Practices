const number = [1,3,5];
//kac deger yazarsak baştan indekse gore o kadar deger verir
//sadece biri tanımlasaydık first diye first 1'e gidecekti
let [first, second, third] = number
console.log(first);
console.log(second);
console.log(third);

const users = ["ali", "veli", "huseyin"];
let [babam, kardesim, kayinco] = users; //burda deger atasak bile icindekini deistirmiyor
console.log(babam, kardesim, kayinco)

const array = [
    ["java", "php", "django"],
    ["html","css","js"]
]
let[back, [first1, second1, third1]] = array;
console.log(back);
console.log(first1, second1);

let num = [1,3,7]
const[oneChild, ,thirdchild] = num //ucu atladı
console.log(thirdchild);

const numb = [1,0,9,5,6,7]
let [one, two, ...rest] = numb;
console.log(one, two)
console.log(rest)

console.log("======================")

const countries = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"], 
    ["Norway", "Oslo"], 
    ["Turkey", "Ankara"]
];
let[[country, capital]] = countries; 
console.log(country, capital); //sadece finlan ve helsin verdi

for(let [country, capital] of countries) {
    console.log(country, capital)
} //hepsini verdi

console.log("---------------------------");

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
  
for(const [first, second, third] of fullStack) {
console.log(first, second, third)
}
console.log("---------------------------");

//destructuring objects
const userName = {
    name: "betul",
    surname: "koru",
    age: 22,
    skills: ["html", "css", "js"],
}
let {name, surname, age, skills, hobby = ["reading", "hiking"]} = userName
console.log(name, surname, age, skills, hobby) 
//burada eklenen hobby bastaki userName cagırdıgında gelmeyecek

const kisi = {
    isim: "ahmet",
    soyad: "kaya",
    age: 33
}
const getFullName = (obj) => {
    return `${obj.isim} ${obj.soyad}  ${obj.age} years old.`
}
console.log(getFullName(kisi))

const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
]   //bura tam bi json dosyasi gibi
    
for (const {task, time, completed} of todoList){
    console.log(task, time, completed)
}

const countries2 = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
]
  
let [gem, fra, , ...nordicCountries] = countries2
  
console.log(gem)
console.log(fra)
console.log(nordicCountries)

const sumAllNums = (...args) => {
    let sum = 0
    for (const num of args){
      sum += num
    }
    return sum
    
}
  
console.log(sumAllNums(1, 2, 3, 4, 5))