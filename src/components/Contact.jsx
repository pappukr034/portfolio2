import { useState } from "react";

export default function Contact() {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert("Submitted succesfully")
    setName("")
    setEmail("")
    setPhone("")
  }
  return (
      <div className="relative shadow-md shadow-orange-300 flex items-top justify-center min-h-[700px] bg-slate-900 sm:items-center sm:pt-0">
          <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
         <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-orange-500 to-blue-500 text-transparent bg-clip-text">Contact me</h1>
<div className="mt-10 overflow-hidden">
  <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="p-6 mr-2 bg-slate-800 rounded-md">
          <h1 className="text-3xl sm:text-4xl 
           text-orange-500 font-extrabold tracking-tight">
              Get in touch: 
          </h1>
          <p className="text-normal text-lg sm:text-xl font-medium text-white mt-2">
              Fill in the form to start a conversation
          </p>

          <div className="flex items-center mt-8 text-white">
              <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
              >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
              </svg>
              <div className="ml-4 text-md tracking-wide font-semibold w-40 text-white">
                  Vaishali, BIHAR
              </div>
          </div>

          <div className="flex items-center mt-4 text-white">
              <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
              >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
              </svg>
              <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  +91 7667384500
              </div>
          </div>

          <div className="flex items-center mt-2 text-white">
              <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
              >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
              </svg>
              <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  pappu034@gmail.com
              </div>
          </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col justify-center p-10 gap-1">
          <div className="flex flex-col">
              <label for="name" className="hidden">
                  Full Name
              </label>
              <input
                  type="name"
                  name="name"
                  value={name}
                  id="name"
                  onChange={(e)=> setName(e.target.value)}
                  placeholder="Full Name"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-slate-700 border border-gray-400 text-white font-semibold focus:border-orange-500 focus:outline-none"
              />
          </div>

          <div className="flex flex-col mt-2">
              <label for="email" className="hidden">
                  Email
              </label>
              <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  id="email"
                  placeholder="Email"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-slate-700 border border-gray-400 text-white font-semibold focus:border-orange-500 focus:outline-none"
              />
          </div>

          <div className="flex flex-col mt-2">
              <label for="tel" className="hidden">
                  Number
              </label>
              <input
                  type="tel"
                  name="tel"
                  value={phone}
                  onChange={(e)=> setPhone(e.target.value)}
                  id="tel"
                  placeholder="Telephone Number"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-slate-700 border border-gray-400 text-white font-semibold focus:border-orange-500 focus:outline-none"
              />
          </div>

          <button
              type="submit"
              className=" bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
          >
              Submit
          </button>
      </form>
  </div>
</div>
</div>
      </div>
  );
}
