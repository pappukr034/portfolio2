import React from "react";
import {NavLink } from "react-router-dom";
import Footer from "./Footer";

const leetcodeData={
    username:"pappukr034",
    solvedProblems:"700+",
    rank:1590
}
const gfgData={
    username:"pappukayf4",
    solvedProblems:"1000+",
    rank:9
}
const codingNinjas={
    username:"pappukr",
    solvedProblems:"400+",
    rank:0
}

const CodingProfile = () => {
  return (
    <>
    <div className=" px-6 py-7  w-full mx-auto rounded-xl shadow-md">
      <h1 className=" mt-2 text-5xl md:text-8xl font-bold text-strat bg-gradient-to-r from-orange-500 to-blue-500 text-transparent bg-clip-text md:text-center">Coding profile</h1>
      <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
        {/* LeetCode Profile */}
        <div className=" bg-gray-800 w-full p-4 rounded-lg shadow-md">
            <div className=" flex item-center gap-2 ">
                <img
                className=" w-[50px] rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuw31Hhw8MBnDPGLwvT9KGxWPuNDz9qToBkuJzadT1gGWhPUm0B5qxngcCoNJGBsGfd_M&usqp=CAU" alt="leetcode logo" />
            <h2 className="text-xl font-semibold text-blue-600 mt-2">LeetCode</h2>
            </div>
          <ul className="mt-2">
            <li className="text-gray-400"><strong>Username:</strong> {leetcodeData.username}</li>
            <li className="text-gray-400"><strong>Problems Solved:</strong> {leetcodeData.solvedProblems}</li>
            <li className="text-gray-400"><strong>Rating:</strong> {leetcodeData.rank}</li>
          </ul>
          <div>
           <NavLink to='https://leetcode.com/u/pappukr034/' target="_main">
           <button 
            className=" bg-yellow-600 text-white px-5 py-1 float-right rounded-md"
            >Profile</button>
           </NavLink>
          </div>
        </div>

        {/* GeeksforGeeks Profile */}
        <div className=" bg-gray-800 w-full p-4 rounded-lg shadow-md">
        <div className=" flex item-center gap-2 ">
                <img
                className=" w-[50px] rounded-full"
                src="https://media.geeksforgeeks.org/wp-content/uploads/20240327032356/gfgimg.png" />
            <h2 className="text-xl font-semibold text-green-600 mt-2">Geeks For Geeks</h2>
            </div>
          <ul className="mt-2">
            <li className="text-gray-400"><strong>Username:</strong> {gfgData.username}</li>
            <li className="text-gray-400"><strong>Problems Solved:</strong> {gfgData.solvedProblems}</li>
            <li className="text-gray-400"><strong>Rank:</strong> {gfgData.rank}</li>
          </ul>
          <div>
           <NavLink to='https://www.geeksforgeeks.org/user/pappukayf4/' target="_main">
           <button 
            className=" bg-green-600 text-white px-5 py-1 float-right rounded-md"
            >Profile</button>
           </NavLink>
          </div>
        </div>
        
        {/* codingNinjas Profile */}
        <div className=" bg-gray-800 w-full p-4 rounded-lg shadow-md">
        <div className=" flex item-center gap-2 ">
                <img
                className=" w-[50px] rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv6GKtpdkO5xbthGVqj7IflrQnha80Njkk-QG17Onh-ysoV_3zubhnFK6U-2VaUgNZjYE&usqp=CAU" />
            <h2 className="text-xl font-semibold text-orange-600 mt-2">Coding Ninjas</h2>
            </div>
          <ul className="mt-2">
            <li className="text-gray-400"><strong>Username:</strong> {codingNinjas.username}</li>
            <li className="text-gray-400"><strong>Problems Solved:</strong> {codingNinjas.solvedProblems}</li>
            <li className="text-gray-400"><strong>Rank:</strong> {codingNinjas.rank}</li>
          </ul>
          <div>
           <NavLink to='https://www.naukri.com/code360/profile/a25bdd91-8c62-4704-bf38-7f32df40070d' target="_main">
           <button 
            className=" bg-orange-600 text-white px-5 py-1 float-right rounded-md"
            >Profile</button>
           </NavLink>
          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default CodingProfile;
