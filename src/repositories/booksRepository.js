const { getConnection } = require('./db');

async function getBooksByName(title) {
  let conn;
  try {
    conn = await getConnection();
    const book = await conn.query(
      'SELECT books.title AS book_title, libraries.name AS library_name FROM books LEFT JOIN libraries ON libraries.id = books.library_id WHERE books.title = ?',
      [title]
    );

    return book;

  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.close(); //release to pool
  }
}

async function addBook(title, libraryId) {
  let conn;
  try {

    conn = await getConnection();
    const book = await conn.query('INSERT INTO books (title, library_id) VALUES (?, ?)', [title, libraryId]);

    return book;

  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.close(); //release to pool
  }
}

module.exports = {
  getBooksByName,
  addBook,
};
