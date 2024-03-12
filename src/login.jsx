import axios from "axios";
import React, { useState } from "react";
import { CiPhone } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function clickOnSubmit(event) {
    event.preventDefault();
    if (formData.email.length > 5 && formData.password.length > 2) {
      axios
        .post("http://localhost:3001/api/user/login", formData)
        .then((response) => {
          if (response.status == 200) {
            console.log(response);
            navigate("/");
          } else {
            alert("response");
          }
        })
        .catch((err) => {
          console.log(err.response.status);
          if (err.response.status == 404) {
            alert("User Not Found!");
          } else if (err.response.status == 401) {
            alert(err.response.data.message);
          } else {
            alert("Failed To Login");
          }
        });
    } else {
      alert("Form Field are not correct! Try Again");
    }
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
        <div className="w-full px-8 md:px-32 lg:px-24">
          <form className="bg-white rounded-md shadow-2xl p-5">
            <h1 className="text-gray-800 font-bold text-2xl mb-3 flex justify-center">
              Login
            </h1>

            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
              <CiPhone />
              <input
                id="email"
                className=" pl-2 w-full outline-none border-none"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
              <RiLockPasswordLine />
              <input
                className="pl-2 w-full outline-none border-none"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button
              onClick={clickOnSubmit}
              type="submit"
              className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
            >
              Login
            </button>
            <div className="flex justify-between mt-4">
              <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                Forgot Password ?
              </span>

              <a
                href="#"
                className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
              >
                Already have an account?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
