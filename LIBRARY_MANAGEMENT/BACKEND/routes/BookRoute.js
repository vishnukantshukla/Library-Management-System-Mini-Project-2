const express = require("express");
const Book = require("../model/Book");
const User = require("../model/User");
const router = express.Router();

router.get("/books", async (req, res) => {
  let AllBooks = await Book.find({});
  res.send(AllBooks);
});
router.post("/books/addBook", async (req, res) => {
  const { image, BookName, PublishYear, Price, Quantity, Desc } =req.body.formData;
  await Book.create({ image, BookName, PublishYear, Price, Quantity, Desc });
  res.status(200).send("Book Added");
});
router.get("/books/:id", async (req, res) => {
  const { id } = req.params;
  const foundBook = await Book.findById(id);
  res.send(foundBook);
});
router.patch("/books/:id", async (req, res) => {
  const { id } = req.params;
  const { BookName, Price, Quantity, Desc } = req.body.data;
  if(Price <0 || Quantity<0){
    return res.status(400).send("Invalid Data");
  }
  await Book.findByIdAndUpdate(id, { BookName, Price, Quantity, Desc });
  res.send("Updated");
});

router.delete("/books/:id", async (req, res) => {
  const { id } = req.params;
  await Book.findByIdAndDelete(id);
  res.redirect("/books");
});

module.exports = router;
