import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Dashboard from "./Dashboard";
import AddBook from "./AddBook";
import EditForm from "./EditForm";
import IssuedBook from "./IssuedBook";
const Library = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/addbook" element={<AddBook/>}></Route>
            <Route path="/books/:id" element={<EditForm/>}></Route>
            <Route path="/issuebooks" element={<IssuedBook/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Library;
