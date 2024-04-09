// SkillsCard.js

import React from 'react';

const SkillsCard = ({ skill }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 shadow-md shadow-orange-100 hover:bg-slate-950 hover:duration-500">
      <div className=" bg-slate-900 shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-semibold text-orange-500 mb-2">{skill.title}</h2>
        <div className="flex items-center">
          <div className="mr-4">
         <img className=' rounded-full hover:scale-110 hover:transition-all hover:duration-500' src={skill.logo} alt="" width={100} />
          </div>
          <div className=" text-white">{skill.description}</div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
