const searchBooksController = require("./controllers/booksSearchController");
const addBookController = require('./controllers/addBookController');
const addRandomBooksController = require('./controllers/addRandomBooksController');
const { createConnectionPool, closeConnectionPool } = require('./repositories/db');

const command = process.argv[2];
const value = process.argv[3];
const value2 = process.argv[4];

createConnectionPool().then(async () => {
  switch (command) {
    case 'search-book':
      await searchBooksController(value);
      break;
    case 'add-book':
      await addBookController(value, value2);
      break;
    case 'add-random-books':
      await addRandomBooksController();
      break;
    default:
      console.error('Unsupported command.');
  }

  closeConnectionPool().then(() => {
  });

});
