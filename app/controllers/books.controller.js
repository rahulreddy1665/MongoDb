const db = require("../models");
const Book = db.books;

// Create and Save a new Book
exports.create = (req, res) => {
    // Validate request

    // Create a Book
    const book = new Book(req.body);

    // Save Book in the database
    book
        .save(book)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Book."
            });
        });
};

// Retrieve all Books from the database.
exports.findAll = (req, res) => {
    Book.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving books."
            });
        });
};
