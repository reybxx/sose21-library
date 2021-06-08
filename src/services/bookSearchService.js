const getBooksByName = require("../repositories/booksRepository");

async function searchBooksByTitle(arg) {
    const books = await getBooksByName(arg);
    delete books.meta;
    return books;
}

module.exports = searchBooksByTitle;
