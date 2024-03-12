import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center items-center m-4">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold my-3 flex justify-center">
          Chat App
        </h1>
        <div className="bg-red-400 w-1/2 p-1 m-1">
          <p className="text-white">You Joined</p>
        </div>
        <div className="bg-white w-1/2 p-1 m-1">
          <p className="">Vaibhav Joined</p>
        </div>
        <div className="bg-red-400 w-1/2 p-1 m-1">
          <p className="text-white">Vaibhav: Hello</p>
        </div>
        <div className="bg-white w-1/2 p-1 m-1">
          <p className="">You: Hello!</p>
        </div>
        <div className="bg-red-400 w-1/2 p-1 m-1">
          <p className="text-white">Vaibhav: Kya haal?</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
