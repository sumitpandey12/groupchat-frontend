import React, { useState } from "react";
import { CiPhone } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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
    if (
      formData.name.length > 3 &&
      formData.phone.length == 10 &&
      formData.email.length > 5 &&
      formData.password.length > 2
    ) {
      axios
        .post("http://localhost:3001/api/user/register", formData)
        .then((response) => {
          if (response.status == 200) {
            console.log(response);
            navigate("/login");
          } else {
            alert("response");
          }
        })
        .catch((err) => {
          alert(err.response.data);
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
              SignUp
            </h1>
            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
              <FaRegUserCircle />
              <input
                id="name"
                className=" pl-2 w-full outline-none border-none"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
              <CiPhone />
              <input
                id="phone"
                className=" pl-2 w-full outline-none border-none"
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
              <CiMail />

              <input
                id="email"
                className=" pl-2 w-full outline-none border-none"
                type="email"
                name="email"
                placeholder="Email Address"
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
              SignUp
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

export default SignUp;
