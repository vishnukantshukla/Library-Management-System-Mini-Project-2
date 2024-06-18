import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BookCart = ({ book }) => {
  const navigate = useNavigate();

  function CurrDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${month}-${day}-${year}`;
  }
  function IssueDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${month}-${day}-${year}`;
  }
  function DueDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    let day = today.getDate() + 7;
    let newMonth = month;
    let newYear = year;
    if (day > new Date(year, month, 0).getDate()) {
      day -= new Date(year, month, 0).getDate();
      newMonth = String(today.getMonth() + 2).padStart(2, "0");
      if (newMonth === "13") {
        newMonth = "01";
        newYear = String(year + 1);
      }
    }
    day = String(day).padStart(2, "0");
    return `${newMonth}-${day}-${newYear}`;
  }

  function calculateFine() {
    if(DueDate()>CurrDate()){
      return 0;
    }
    const dueDate = new Date(DueDate());
    const currentDate = new Date(CurrDate());
    const timeDiff = dueDate.getTime() - currentDate.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days
    if (daysDiff > 0) {
      return daysDiff * 5; // Assuming 10 units of fine per day
    } else {
      return 0;
    }
  }

  async function handleReturn() {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    await axios.post(`http://localhost:8080/user/${book._id}/return`, {
      userId: user._id,
    });
    navigate("/dashboard");
  }
  async function handleReturnAll() {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    await axios.post(`http://localhost:8080/user/${book._id}/returnAll`, {
      userId: user._id,
    });
    navigate("/dashboard");
  }
  return (
    <div> 
      <div className="flex bg-white py-[.6rem] items-center justify-center border w-[40rem]">
        <div className="ml-[1rem]">
          <img className="h-[8rem] w-[11rem]" src={book.image} alt="Logo" />
        </div>
        <div className="ml-[1rem]">
          <h1>
            <strong>Title:</strong> {book.BookName}
          </h1>
          {/* <p><strong>Desc:</strong>{book.Desc}</p> */}
          <h5>
            <strong>Price: $</strong> {book.Price}
          </h5>
          <h5>
            <strong>Issued: </strong>
            {book.Issued}
          </h5>
          <h5>
            <strong>Issued Date :</strong>
            {IssueDate()}
          </h5>
          <h5>
            <strong>Due Date :</strong>
            {DueDate()}
          </h5>
          <button className="text-semibold ">Fine: {calculateFine()}</button>
        </div>
        <div className="mt-[6rem] flex">
          <button
            className=" ml-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleReturn}
          >
            Return
          </button>
          {book.Issued > 1 && (
            <button
              className=" ml-3 bg-blue-500 w-[7rem] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleReturnAll}
            >
              Return All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCart;
