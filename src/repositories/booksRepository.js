const mariadb = require('mariadb');

async function getBooksByName(name) {
    const pool = mariadb.createPool({
        host: '127.0.0.1',
        user:'root',
        password: 'root',
        database: 'library',
        connectionLimit: 5
    });
    let conn;
    try {

        conn = await pool.getConnection();
        const book = await conn.query
        ("SELECT books.name AS book, libraries.name AS library FROM books JOIN libraries ON books.book_id = libraries.library_FK where books.name =?", [name]);

        return book;

    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.close(); //release to pool
    }
}

module.exports = getBooksByName;
