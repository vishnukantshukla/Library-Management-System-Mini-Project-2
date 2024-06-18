import React, { useEffect, useState } from 'react'
import axios from "axios";
import Book from './Book';
import BookCart from './BookCart';
const IssuedBook = () => {
    let [books,setBooks]=useState([]);
    async function getIssuedBooks(){
        let user = localStorage.getItem("user");
        user=JSON.parse(user);
        let issuedBooks=await axios.get(`http://localhost:8080/user/${user._id}/issuedBooks`)
        setBooks(issuedBooks.data);
    }
    useEffect(()=>{
        getIssuedBooks();
    },[])
    return (
        <div className='bg-teal-100 h-[100vw]'>
          <h1 className="text-[2rem] text-center font-medium">
            Issued Books By You !!
          </h1>
          <div className="flex flex-col gap-2 rounded p-4 ml-8">
            {books.map((book, index) => {
              return (
                <BookCart
                  key={index}
                  book={book}
                />
              );
            })}
          </div>
        </div>
      );
    };

export default IssuedBook