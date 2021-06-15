const randomWords = require('random-words');

const { getBooksByName, addBook } = require("../repositories/booksRepository");

async function searchBooksByTitle(title) {
  const books = await getBooksByName(title);

  delete books.meta;
  return books;
}

async function addBookService(title, libraryId) {
  const book = await addBook(title, libraryId);

  return book;
}

async function addRandomBooksService() {
  const books = [];
  for (let i = 0; i < 10; i++) {
    const title = randomWords({ exactly: 3, join: ' ' });
    await addBookService(title);
    books.push(title);
  }

  return books;
}

module.exports = {
  searchBooksByTitle,
  addBookService,
  addRandomBooksService,
};
