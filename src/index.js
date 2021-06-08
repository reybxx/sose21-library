const searchBooks = require("./controllers/booksSearchController");


let arg = process.argv[2];
searchBooks(arg);
