// create a reference to the model
let Book = require("../models/book");


module.exports.bookList = function (req, res, next) {
  Book.find((err, bookList) => {
    // console.log(bookList);
    if (err) {
      return console.error(err);
    } else {
      res.render("book/list", {
        title: "Book List",
        books: bookList,
      });
    }
  });
};


module.exports.details = (req, res, next) => {
  let id = req.params.id;

  Book.findById(id, (err, bookToShow) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      
      res.render("book/details", {
        title: "Book Details",
        book: bookToShow,
      });
    }
  });
};


module.exports.displayAddPage = (req, res, next) => {
  let newBook = Book();
  res.render("book/add_edit", { title: "Add Book", book: newBook });
};


module.exports.processAddPage = (req, res, next) => {
  let newBook = Book({
    _id: req.body.id,
    Title: req.body.Title,
    Description: req.body.Description,
    Price: req.body.Price,
    Author: req.body.Author,
    Genre: req.body.Genre,
  });

  Book.create(newBook, (err, Book) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the book list
      res.redirect("/book/list");
    }
  });
};

module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;

  Book.findById(id, (err, bookToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      
      res.render("book/add_edit", { title: "Edit Book", book: bookToEdit });
    }
  });
};


module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;

  let updatedBook = Book({
    _id: req.body.id,
    Title: req.body.Title,
    Description: req.body.Description,
    Price: req.body.Price,
    Author: req.body.Author,
    Genre: req.body.Genre,
  });

  Book.updateOne({ _id: id }, updatedBook, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      
      res.redirect("/book/list");
    }
  });
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;

  Book.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
       
      res.redirect("/book/list");
    }
  });
};
