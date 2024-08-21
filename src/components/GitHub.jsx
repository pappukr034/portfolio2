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
      <h1 className=" mt-4 text-4xl md:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-orange-500 to-blue-500 text-transparent bg-clip-text">Github profile</h1>
         <div className=' my-5 w-full px-3 py-8 md:mt-5 flex justify-center items-center flex-wrap gap-6'>
      {/* Github prophile */}
  
    <div className=' hover:bg-slate-950 duration-100 ease-out flex flex-col justify-center items-center p-1 ring-1 rounded-md'>

    <GitHubProfileCard headerText="Github" username={data.login} name={data.name} avatar={data.avatar_url} bio={data.bio} followers={data.followers} following={data.following} repo={data.public_repos} url="https://github.com/pappukr034"  />
    <NavLink to='https://github.com/pappukr034' className=" py-2">
    <button  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border focus:outline-none focus:shadow-outline cursor-pointer w-80`}>
      Github
    </button>
    </NavLink>

    </div>

    </div>
     </main>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/pappukr034')
  return response.json()
}
