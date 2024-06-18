import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Book = ({
  id,
  img,
  BookName,
  PublishYear,
  price,
  DeleteBook,
  Quantity,
}) => {
  let user = localStorage.getItem("user");
  const navigate=useNavigate();
  function handleDelete() {
    DeleteBook(id);
  }
  async function handleIssue() {
    let user = localStorage.getItem("user");
    user=JSON.parse(user);
    if(user==null){
      alert ("Please login to issue book");
      navigate('/login');
      return;
    }
    await axios.post(`http://localhost:8080/user/${id}/issue`,{userId:user._id});
    navigate('/issuebooks');
  }
  return (
    <div className="border border-gray-400 m-3 jusify-center p-4 w-[25rem] rounded-lg bg-blue-200">
      <img src={img} alt="Logo" className="h-[19rem] w-full rounded-lg mb-2" />
      <h3 className="font-bold text-xl font-serif">Title: {BookName}</h3>
      <h5 className="font-semibold text-lg">Published In: {PublishYear}</h5>
      <h5 className="font-semibold text-lg">Price: ${price}</h5>
      <h5 className="font-semibold text-lg">Quantity: {Quantity}</h5>
      {user && JSON.parse(user).role === "Admin" ? (
        <>
          <Link to={`/books/${id}`}><button className="bg-zinc-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Edit
          </button>
          </Link>
          <button
            onClick={handleDelete}
            className=" ml-2 bg-red-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </>
      ) : (
        <>
        { Quantity>0 && <button
            className="mt-2 text-lg bg-green-700 hover:bg-gray-300 hover:border hover:text-black hover:border-gray-500 text-white font-bold p-2  rounded-lg"
            onClick={handleIssue}
          >
            ISSUE NOW
          </button>
        }
          {/* <button className=" ml-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Return
          </button> */}
        </>
      )}
    </div>
  );
};

export default Book;