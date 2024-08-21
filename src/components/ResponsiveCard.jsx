// ResponsiveCard.js

import React from 'react';

const ResponsiveCard = ({ imageUrl, title, description, demoLink, githubLink }) => {
  return (
    <div className=" w-full border-2 border-pink-200 md:w-[25%] rounded overflow-hidden shadow-lg bg-slate-800 hover:bg-slate-950 hover:duration-500">
      <img className=" w-full h-[160px] hover:scale-110 hover:transition-all hover:duration-500 " src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className=" text-orange-500 font-bold text-xl mb-2">{title}</div>
        <p className="  text-white text-base">{description}</p>
      </div>
      <div className="px-6 py-4 flex justify-between">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Demo
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ResponsiveCard;
