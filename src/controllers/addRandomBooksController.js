const { addRandomBooksService } = require('../services/bookService');

async function addRandomBooksController() {
  const books = await addRandomBooksService();
  books.forEach((book) => console.log(`Create book "${book}".`));
}

module.exports = addRandomBooksController;
