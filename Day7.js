const bookData = {
  title: "Two states",
  author: "Chetan Bhagat",
  year: "2002",
  updateYear: function (newyear) {
    this.year = newyear;
  },
  getBookDetails: function () {
    return `${this.title} by ${this.author} was written in year :- ${this.year}`;
  },
  //   getBookDetails() {
  //     return `${this.title} by ${this.author}`;
  //   },

  //   getBookDetails: () => `${bookData.title} by ${bookData.author}`,
};

console.log("Book author :- ", bookData.author);
console.log("Book Title :- ", bookData.title);
console.log("Book Details using function :- ", bookData.getBookDetails());
let addYear = 2006;
bookData.updateYear(addYear);
console.log("Book Details using function :- ", bookData.getBookDetails());

const library = {
  name: "ShreeSai Reading Point",
  books: [
    "Echoes of Eternity",
    "The Silent Voyage",
    "Shadows of the Past",
    "Whispers in the Wind",
    "The Forgotten Realm",
    "A Symphony of Stars",
    "The Last Guardian",
    "Chronicles of a Lost City",
    "The Enchanted Forest",
    "Beyond the Horizon",
  ],
};

console.log("Library Details :- ", library);

console.log("Library name :-", library.name);
const printAlltitles = () => {
  library.books.forEach((b, index) => console.log("Book ", index + 1, ":-", b));
};
printAlltitles();

const printBookDetails = () => {
  for (const key in bookData) {
    if (bookData.hasOwnProperty(key)) {
      console.log(`${key}:${bookData[key]}`);
    }
  }
};

printBookDetails();

//printing all the keys

Object.keys(bookData).forEach((value) => {
  console.log(value);
});

//printing all the values
Object.values(bookData).forEach((value) => {
  console.log(value);
});

//printing key:value together using entries function..
Object.entries(bookData).forEach(([key, value]) => {
  console.log(`${key}:${value}`);
});
