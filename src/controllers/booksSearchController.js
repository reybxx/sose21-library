const { searchBooksByTitle } = require('../services/bookService');

async function searchBooksController(arg) {
  const books = await searchBooksByTitle(arg);
  books.forEach(({ book_title, library_name }) => {
    console.log(`${book_title} (${library_name})`);
  });
}

module.exports = searchBooksController;
