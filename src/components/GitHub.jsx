import React from 'react'
import GitHubProfileCard from './GitHubProfileCard'
import Footer from './Footer'
import {useLoaderData } from 'react-router-dom'
import pappuNavLogo from '../assets/pappuNavLogo.jpg'
import { NavLink } from 'react-router-dom'


function GitHub() {
  const data=useLoaderData();
  return (
     <main className='w-full'> 
     <h1 className=' text-center mt-10 mb-8 md:mt-12 text-5xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text md:text-7xl'>Profile Section</h1>
         <div className=' my-5 w-full px-3 py-8 md:mt-5 flex justify-center items-center flex-wrap gap-6'>
      {/* Github prophile */}
  
    <div className=' hover:bg-slate-950 duration-100 ease-out flex flex-col justify-center items-center p-1 ring-1 rounded-md'>

    <GitHubProfileCard headerText="Github" username={data.login} name={data.name} avatar={data.avatar_url} bio={data.bio} followers={data.followers} following={data.following} repo={data.public_repos} url="https://github.com/"  />
    <NavLink to='https://github.com/' className=" py-2">
    <button  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border focus:outline-none focus:shadow-outline cursor-pointer w-80`}>
      Github
    </button>
    </NavLink>

    </div>

    {/* LinkedIn prophile */}
    
    <div  className=' hover:bg-slate-950 duration-100 ease-out flex flex-col justify-center items-center p-1 ring-1 rounded-md'>
    <GitHubProfileCard headerText="LinkedIn" avatar={pappuNavLogo} bio="ECE NITA 21-25 | DSA | Leetcode | GFG | MERN" username={data.login} name={data.name} url="https://www.linkedin.com/in/pappu034/" followers="500+"  following="600+"  />
    <NavLink to='https://www.linkedin.com/in/pappu034/' className=" py-2">
    <button  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border focus:outline-none focus:shadow-outline cursor-pointer w-80`}>
      LinkedIn
    </button>
    </NavLink>
    </div>

   

    

    </div>

    <Footer />
     </main>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/pappukr034')
  return response.json()
}
