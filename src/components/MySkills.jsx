// GitHubProfileCard.js

import React from 'react';
import { Link, NavLink } from 'react-router-dom'



const MySkills = ({avatar,headerText}) => {
  return (
   <>
   <main className='flex  flex-col space-y-3 rounded-md'> 
   <div className="max-w-sm  mx-auto flex flex-col justify-center items-center bg-slate-800 shadow-md rounded-lg  ">
    <h1 className=' text-2xl font-bold py-2 text-center text-white w-full bg-slate-900'>{headerText}</h1>
<div className="px-6 py-4">
  <div className="flex items-center justify-center">
   <NavLink to={url}>
   <img className="w-24 h-24 rounded-full" src={avatar} alt={name} />
   </NavLink>
  </div>
  <div className="mt-4 text-center">
    <h1 className="text-xl font-semibold text-orange-500">{name}</h1>
    <p className=" text-white">{username}</p>
  </div>
  <p className="text-white text-sm mt-4">{bio}</p>
</div>
<div className="px-6 py-4">
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Followers: {followers}</span>
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Following: {following}</span>
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Repos: {repo}</span>
</div>

</div>

<div className='flex justify-center items-center py-2'>

</div>
   </main>
   
   </>


  );
};

export default MySkills;


