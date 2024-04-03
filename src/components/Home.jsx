import React from 'react'
import Footer from './Footer'
import Aboute from './Aboute'
import Button from './Button'
import Contact from '../components/Contact'
import {  useLoaderData } from 'react-router-dom'
import ResumeOrg from '../assets/ResumeOrg.pdf'


function Home() {
  const data=useLoaderData();
  return (
    <>
     <section className="bg-gray-800 text-white py-20 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">Welcome to My Portfolio</h1>
          <p className="text-lg md:text-xl text-center mb-8">Looking forward to Opportunity</p>

          <a href={ResumeOrg} download>
            <Button text="Download Resume" />
          </a>
        </div>
      </div>
    </section>
    <Aboute />
    <Contact />
    </>
  )
}

export default Home
