const { addBookService } = require('../services/bookService');

async function addBookController(title, libraryId) {
  const { insertId } = await addBookService(title, libraryId);
  console.log(`New book added to library with ID ${libraryId}: "${title}" with ID ${insertId}.`);
}

module.exports = addBookController;
