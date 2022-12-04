module.exports = app => {
    const tutorials = require("../controllers/tutorial.controllers");
    const books = require("../controllers/books.controller");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", tutorials.create);

    router.post("/books", books.create);

    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);

    router.post("/books", books.findAll);

    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);

    // Update a Tutorial with id
    router.put("/:id", tutorials.update);

    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);

    // Delete all Tutorials
    router.delete("/", tutorials.deleteAll);

    app.use('/api/tutorials', router);
};