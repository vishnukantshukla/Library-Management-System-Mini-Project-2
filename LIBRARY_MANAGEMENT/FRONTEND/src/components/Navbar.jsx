import React, { useContext, useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";

const Navbar =() => {
  let user = localStorage.getItem("user");
  user=JSON.parse(user);
  const navigate = useNavigate();
  
  async function handlelogOut() {
    try {
        localStorage.clear();
        await axios.get("http://localhost:8080/logout");
        navigate('/');
    } catch (error) {
        console.error(error.message);
    }
}

  return (
    <div>
      <nav className="flex justify-between items-center px-[7rem] py-3 bg-blue-200 ">
        <div className="flex justify-space-between items-center">
          <img
            className="h-16 w-16 rounded-full "
            src="https://th.bing.com/th/id/R.df20f6caea121d61b8ee7d6b91e692b3?rik=ZR2823EBgCA2GQ&pid=ImgRaw&r=0"
          />
          <h1 className="text-4xl px-10">LIBRARY MANAGEMENT SYSTEM</h1>
        </div>
        <div className="nav-right flex">
          {
            user&&user.role=="Admin"&&<div><Link className="text-2xl pr-6 hover:underline font-semibold" to={"/addbook"}>
            Add Book
          </Link>
        </div>
          }
          {
            user && <Link className="text-2xl pr-6 hover:underline font-semibold" to={"/issuebooks"}>
            Issued Books
          </Link>
          }
          <Link className="text-2xl pr-6 hover:underline font-semibold" to={"/"}>
            Home
          </Link>
          <Link className="text-2xl pr-6 hover:underline font-semibold" to={"/dashboard"}>
            Dashboard
          </Link>
          {user ?<p>Welcome,{user.username}!</p> &&((<button onClick={handlelogOut} className="text-2xl pr-6 font-semibold"> Log Out ({user.username})</button>)): (
            <Link className="text-2xl pr-6 hover:underline font-semibold" to={"/login"}>
              Log In
            </Link>
          )}

        </div>
      </nav>
    </div>
  );
};

export default Navbar;