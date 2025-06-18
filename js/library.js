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

Book.prototype.info = function () {
  if (this.haveRead) {
    return `${this.id}: ${this.title} by ${this.author}, ${this.pageCount} pages, have read`;
  } else {
    return `${this.id}: ${this.title} by ${this.author}, ${this.pageCount} pages, not read yet`;
  }
}

