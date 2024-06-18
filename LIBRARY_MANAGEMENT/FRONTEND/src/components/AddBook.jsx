import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        image:' ',
        BookName:' ',
        PublishYear:' ',
        Price:' ',
        Quantity:' ',
        Desc:' '
    })
    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    async function handleSubmit(e) {
        e.preventDefault();
        const res=await axios.post('http://localhost:8080/books/addBook',{formData});
        navigate('/dashboard')
    }

  return (
    <div> 
      <h1 className="text-[2.5rem] text-center">Add Book</h1>
      <form className="max-w-md mx-auto border-solid border-4 border-gray-200 mt-4 p-5 rounded-lg" onSubmit={handleSubmit} method="POST">
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="image">Image Cover</label>
          <input
             className=" pl-[5px] w-full text-sm border border-zinc-500 text-gray-900 bg-transparent border-gray-300cfocus:outline-none focus:border-blue-600"
            type="text"
            onChange={handleChange}
            name="image"
            id="image"
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="BookName">Book Title</label>
          <input
             className="pl-[5px]   w-full text-sm border border-zinc-500 text-gray-900 bg-transparent border-gray-300cfocus:outline-none focus:border-blue-600"
            type="text"
            onChange={handleChange}
            name="BookName"
            id="BookName"
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="BookName">Publish Year</label>
          <input
             className=" pl-[5px]  w-full text-sm border border-zinc-500 text-gray-900 bg-transparent border-gray-300cfocus:outline-none focus:border-blue-600"
            type="text"
            onChange={handleChange}
            name="PublishYear"
            id="PublishYear"
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="Price">Price</label>
          <input
             className="pl-[5px]   w-full text-sm border border-zinc-500 text-gray-900 bg-transparent border-gray-300cfocus:outline-none focus:border-blue-600"
            type="text"
            onChange={handleChange}
            name="Price"
            id="Price"
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="Quantity">Quantity</label>
          <input
             className=" pl-[5px]  w-full text-sm border border-zinc-500 text-gray-900 bg-transparent border-gray-300cfocus:outline-none focus:border-blue-600"
            type="text"
            onChange={handleChange}
            name="Quantity"
            id="Quantity"
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="Desc">Description</label>
          <input
             className="pl-[5px]  w-full text-sm border border-zinc-500 text-gray-900 bg-transparent border-gray-300cfocus:outline-none focus:border-blue-600"
            type="text"
            onChange={handleChange}
            name="Desc"
            id="Desc"
          />
        </div>
        <button className="text-[1.2rem] p-[.6rem] rounded-[1rem] bg-blue-400 " type="Submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
