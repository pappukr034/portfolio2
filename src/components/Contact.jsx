import React, { useState } from 'react'
import Footer from './Footer'

function Contact() {

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [mess,setMess]=useState('')

  const handleClick=(e)=>{
    e.preventDefault();
    alert("Form submmited...")
    setName("");
    setEmail("");
    setMess("")
  }
  return (
    <>
     <div className=" bg-slate-900 my-3 flex flex-wrap justify-center items-center py-10">

    <div className=' hidden md:block rounded-md justify-center flex-col items-center'>
      <img className=' max-w-md rounded-md' src="https://media.istockphoto.com/id/1450058572/photo/businessman-using-a-laptop-and-touching-on-virtual-screen-contact-icons-consists-of-telephone.jpg?s=2048x2048&w=is&k=20&c=7KhNOYQ1PAxuAcVxu_YieJo5wvIvBpcw1nkXDJ5YM30=" alt="" />
      <img className=' max-w-md rounded-md' src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGFjdCUyMHVzJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
    </div>
   
    <div className=" md:w-1/2 w-full  max-w-md mx-auto  bg-slate-800 p-2 rounded-md shadow-md">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">Contact me...</h1>
    <form>
       
      <div className="mb-4 py-5">
        <label for="name" className="block text-white font-bold mb-2">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e)=> setName(e.target.value)}
          required
          name="name"
          className="w-full bg-gray-800 text-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-4">
        <label for="email" className="block text-white font-bold mb-2">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          name="email"
          className="w-full bg-gray-800 text-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-4">
        <label for="message" className="block text-white font-bold mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={mess}
          onChange={(e)=> setMess(e.target.value)}
          spellCheck="false"
          rows="4"
          className="w-full bg-gray-800 text-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none"
          placeholder="Enter your message"
        ></textarea>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>

 <Footer />
    </>
  )
}

export default Contact
