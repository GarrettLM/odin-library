function Book(title, author, pageCount, haveRead = false) {
  if (!new.target) {
    throw Error("Called Book constructor without using the new keyword!");
  }

  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.haveRead = haveRead;
}

Book.prototype.info = function () {
  if (this.haveRead) {
    return `${this.title} by ${this.author}, ${this.pageCount} pages, have read`;
  } else {
    return `${this.title} by ${this.author}, ${this.pageCount} pages, not read yet`;
  }
}

