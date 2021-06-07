const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: '127.0.0.1',
    user:'root',
    password: 'root',
    database: 'library',
    connectionLimit: 5
});


async function run() {
    let conn;
    try {

        conn = await pool.getConnection();
        let arg = process.argv[2];
        const bookTitle = await conn.query("SELECT name FROM books WHERE name = ?", [arg]);

        console.log(bookTitle);

    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.release(); //release to pool
    }
}

run();
