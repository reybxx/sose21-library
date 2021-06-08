const searchBooksByTitle = require("../services/bookSearchService");

async function searchBooks(arg) {
    const books = await searchBooksByTitle(arg);
    books.forEach(book => {
        console.log(book.book, book.library)
    })
}

module.exports = searchBooks;
