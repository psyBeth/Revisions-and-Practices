//constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

//getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

//getAge
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} old.`
}

// Revise / Change Year
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
}

const book1 = new Book("Book one", "John Doe", "2024");
const book2 = new Book("Book Two", "Jane Doe", "2014");

console.log(book1.getSummary());
console.log(book2.getAge());

book2.revise("2018")
console.log(book2);

