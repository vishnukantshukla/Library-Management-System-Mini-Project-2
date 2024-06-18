import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
const Dashboard = () => {
  let [books, SetBooks] = useState([]);

  const getBooks = async () => {
    let res = await axios.get("http://localhost:8080/books");
    SetBooks(res.data);
  };
  useEffect(() => {
    getBooks();
  }, []);

  const DeleteBook = async(id) => {
    const UpdateList = books.filter((book) => book._id !== id);
    SetBooks(UpdateList);
console.log(id);    
    await axios.delete(`http://localhost:8080/books/${id}`)
  };
  return (
    <div className="bg-teal-100 py-2">
      <h1 className="mx-auto text-[2rem] text-center mt-[1rem] font-medium border border-slate-400 rounded-full w-1/2 hover:underline bg-blue-200">
        Available Books in Library
      </h1>
      <div className="flex justify-center flex-wrap gap-2 rounded p-4 mx-28">
        {books.map((book, index) => {
          return (
            <Book
              key={index}
              img={book.image}
              BookName={book.BookName}
              PublishYear={book.PublishYear}
              id={book._id}
              price={book.Price}
              Quantity={book.Quantity}
              DeleteBook={DeleteBook}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;