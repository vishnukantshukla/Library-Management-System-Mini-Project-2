const express = require("express");
const Book = require("../model/Book");
const User = require("../model/User");
const router = express.Router();

router.get("/user/:userId/issuedBooks", async (req, res) => {
    const userId = req.params.userId;
    
    let user = await User.findById(userId).populate("cart");
    if (user) {
      res.send(user.cart);
    }
  });
  
  router.post("/user/:bookId/issue", async (req, res, next) => {
      let { bookId } = req.params;
      let { userId } = req.body;
      let user = await User.findById(userId);
      let book = await Book.findById(bookId);
      let isBookInCart = user.cart.find(
        (cartItem) => cartItem._id.toString() === bookId
      );
      if (book.Quantity == 0) {
        return res.send("Book is not available");
      }else{
          book.Quantity = book.Quantity - 1;
          if (isBookInCart) {
            book.Issued+=1;
            await book.save();
            return res.send("Book is already in the cart");
          } else {
            book.Issued=1;
            await book.save();
            user.cart.push(book);
            await user.save();
           return res.send("Issued");
          }
      }
    });
  router.post("/user/:bookId/return", async (req, res, next) => {
      let { bookId } = req.params;
      let { userId } = req.body;
      let user = await User.findById(userId);
      let book = await Book.findById(bookId);
      try {
         if(book.Issued>0){
            book.Issued = book.Issued - 1;
            book.Quantity = book.Quantity + 1;
            if(book.Issued==0){
              user.cart = user.cart.filter(cartItem => cartItem.toString() !== bookId);
              await user.save();
          }
            await book.save();
            res.send("Book returned successfully");
        }
      } catch (error) {
        console.error("Error returning book:", error);
        res.status(500).send("Error returning book");
      }
    });
  router.post("/user/:bookId/returnAll", async (req, res, next) => {
      let { bookId } = req.params;
      let { userId } = req.body;
        let user = await User.findById(userId);
        let book = await Book.findById(bookId);
        try {
          if(book.Issued>0){
              book.Quantity = book.Quantity + book.Issued;
              book.Issued = 0;
              user.cart = user.cart.filter(cartItem => cartItem.toString() !== bookId);
              await user.save();
              await book.save();
              res.send("Book returned successfully");
              
            }
          } catch (error) {
            console.error("Error returning book:", error);
            res.status(500).send("Error returning book");
          }
    });


module.exports = router;