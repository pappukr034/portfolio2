// Slider.js

import React, { useState } from 'react';
import ResponsiveCard from './ResponsiveCard';
import Footer from './Footer.jsx'

const ProjectCard = ({ projects }) => {


  return (
    <>
      <div className=" w-full overflow-hidden flex justify-center items-center space-x-2 px-2 py-3 my-3 flex-wrap flex-col md:flex-row gap-3 shadow-md shadow-orange-300 ">
     
     {projects.map((project, index) => (
               <ResponsiveCard
               imageUrl={project.imageUrl}
               title={project.title}
               description={project.description}
               demoLink={project.demoLink}
               githubLink={project.githubLink}
             />
            ))}
     
    </div>
    </>
  );
};

export default ProjectCard;

