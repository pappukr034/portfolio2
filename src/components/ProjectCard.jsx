// ProjectCard.js

import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectCard = ({ title, description, imageUrl, githubUrl }) => {
  return (
    <div className=" max-w-25 px-3  mx-auto shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-56 object-cover object-center" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
       
        <NavLink to={githubUrl}  className="inline-block w-full text-center bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          GitHub
        </NavLink>
      </div>
    </div>
  );
};

export default ProjectCard;
