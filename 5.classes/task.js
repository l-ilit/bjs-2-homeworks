class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.pagesCount = pagesCount;
        this.releaseDate = releaseDate;
        this.state = 100; 
        this.type = null;
    }
    fix() {
       this.state = this.state * 1.5;
    }
    set state(state) {
        if (state < 0){
          this._state = 0;
        } else if (state > 100){
          this._state = 100;
        } else {
          this._state = state;
        }
    }
    get state() {
        return this._state;
    }
}
class Magazine extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    super(name, pagesCount, releaseDate);
    this.type = "magazine";
    }
}
class Book extends PrintEditionItem {
  constructor (author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
   }
}
class NovelBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
    }
}
class DetectiveBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
    }
}
class FantasticBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
    }
}
class Library {
  constructor (name, books) {
    this.name = name;
    this.books = [];
  }
  addBook(printItem) {
    if (this.state > 30) {
      this.books.push(printItem);
    }
  }
  findBookBy (type, value) {
    return this.books.find (book => book[type] == value) || null;
  }
  giveBookByName (bookName) {
    const book = this.findBookBy('name', bookName);
  if (book) {
    this.books.splice(this.books.indexOf(book), 1);
    return book;
  } else {
    return null;
  }

}
  }
class Student {
  constructor (name) {
    this.marks = [];
  }
  addMark(mark) {
    if ((mark < 2) || (mark > 5)) {
      return false;
    }
}
}