// const s1 = "Hello" //primitive
// console.log(s1.toUpperCase()); 
// console.log(typeof s1); // string

// const s2 = new String("Hello")
// console.log(typeof s2);  //object

// // console.log(window);
// // window.alert(1)

// console.log(navigator.appVersion);

const book1 = {
    title: "Book One",
    author: "John Doe",
    year: "2024",
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
console.log(book1.title);

const book2 = {
    title: "Book Two",
    author: "Jane Doe",
    year: "2024",
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

console.log(book2.getSummary());
console.log(Object.values(book2));
console.log(Object.keys(book2));