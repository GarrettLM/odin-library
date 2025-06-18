const myLibrary = [];

function Book(title, author, pageCount, haveRead = false) {
  if (!new.target) {
    throw Error("Called Book constructor without using the new keyword!");
  }

  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.haveRead = haveRead;
  this.id = crypto.randomUUID();
}

Book.prototype.toggleHaveRead = function () {
  this.haveRead = !this.haveRead;
}

Book.prototype.info = function () {
  if (this.haveRead) {
    return `${this.id}: ${this.title} by ${this.author}, ${this.pageCount} pages, have read`;
  } else {
    return `${this.id}: ${this.title} by ${this.author}, ${this.pageCount} pages, not read yet`;
  }
}

function addBookToLibrary(title, author, pageCount) {
  let book = new Book(title, author, pageCount);
  myLibrary.push(book);
}

function getIndexByBookID(id) {
  for (i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].id === id) {
      return i;
    }
  }
  return -1;
}

function removeBookByID(id) {
  let index = getIndexByBookID(id);
  if (index === -1) {
    return;
  }
  myLibrary.splice(index, index);
}

function toggleHaveReadStatusOfBookByID(id) {
  let index = getIndexByBookID(id);
  if (index === -1) {
    return;
  }
  myLibrary[index].toggleHaveRead();
}

function displayLibrary() {
  for(book of myLibrary) {
    console.log(book.info());
  }
}

addBookToLibrary("The Hobbit", "J.R.R. Toklkien", 295);
addBookToLibrary("The Stand", "Stephen King", 1153);
addBookToLibrary("Inside the Technical Consulting Business", "Harvey Kaye", 237);
displayLibrary();

