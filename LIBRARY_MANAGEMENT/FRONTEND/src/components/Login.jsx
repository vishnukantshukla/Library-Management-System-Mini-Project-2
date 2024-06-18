import React, { createContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", {
        username,
        password,
      });
      let user = response.data;
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/dashboard");
    } catch (e) {
      alert("You Entered Wrong Credentials");
      setPassword("");
      setusername("");
    }
  }
  return (
    <div className="py-60 bg-teal-100">
      <div className="">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url("https://th.bing.com/th/id/OIP.K-7eTkye-OGaq_GfmNVTqgHaEK?w=261&h=180&c=7&r=0&o=5&pid=1.7")`,
            }}
          ></div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">LOG IN</h2>
            <form onSubmit={handleSubmit} method="POST">
              <div className="mt-5">
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(e) => {
                    setusername(e.target.value);
                  }}
                  placeholder="username"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input type="checkbox" className="border border-gray-400" />
                <span>
                  I accept the{" "}
                  <a href="#" className="text-purple-500 font-semibold">
                    Terms of Use
                  </a>{" "}
                  &{" "}
                  <a href="#" className="text-purple-500 font-semibold">
                    Privacy Policy
                  </a>
                </span>
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full bg-purple-500 py-3 text-center text-white"
                >
                  Log in
                </button>
              </div>
              <div className="mt-[1rem]">
                <Link to="/register">
                  <h3>
                    Don't have an account?<strong>Register For Free</strong>
                  </h3>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
