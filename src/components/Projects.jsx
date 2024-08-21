import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: 'LMS',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjxJ9XWmOfYLOelRKOUBW2wlFyzQzq-zl2Iw&s',
      description:"This Learning Management System (LMS) MERN stack (MongoDB, Express.js, React, Node.js). It provides an online platform for managing courses, delivering content, and facilitating user authentication and authorization.",
      demoLink:"https://skillrisefrontend.onrender.com/",
      githubLink:"https://github.com/pappukr034/SkillRize",
      category: 'Major Project'
    },
    {
      title: 'Todo app',
      imageUrl: 'https://i.ytimg.com/vi/G0jO8kUrg-I/maxresdefault.jpg',
      description:"The ToDo App is a simple and intuitive application designed to help users manage their daily tasks efficiently.",
      demoLink:"https://todo-lime-nine.vercel.app/",
      githubLink:"https://github.com/pappukr034/MILESTONE_EXAM-2/tree/main/Todo",
      category: 'Minor Project'
    },
    {
      title: 'Movie app',
      imageUrl: 'https://strapi.dhiwise.com/uploads/jusplay_movie_streaming_app_flutter_2_3dfd9cbbfc.jpg',
      description:"The Movie App is a dynamic application designed to provide users with an extensive collection of movies.",
      demoLink:"https://milestone-exam-2.vercel.app/",
      githubLink:"https://github.com/pappukr034/MILESTONE_EXAM-2/tree/main/Movie",
      category: 'Minor Project'
    },
    {
      title: 'Blog app',
      imageUrl: 'https://cdn.dribbble.com/userupload/5061112/file/original-e8c212d66f2f4c12f588e5e18bfa275f.png?resize=400x300&vertical=center',
      description:"The Blog App is a simple and user-friendly platform that allows users to create posts and interact with blog content.",
      demoLink:"https://milestone-exam-2-z615.vercel.app/",
      githubLink:"https://github.com/pappukr034/MILESTONE_EXAM-2/tree/main/BolgApp",
      category: 'Minor Project'
    },
    {
      title: 'Wheather',
      imageUrl: 'https://i.pinimg.com/736x/aa/71/d7/aa71d7f3e6c3ce0865e767d2f4e2c473.jpg',
      description:"The weather application provides users with real-time weather information.",
      demoLink:"https://github.com/pappukr034",
      githubLink:"https://github.com/pappukr034",
      category: 'Others'
    },
    {
        title: 'BMI Calculator',
        imageUrl: 'https://assets-cdn.workingnotworking.com/qv0n6alpob7jj3vqzi06mq05odor',
        description:"Body Mass Index (BMI) is a person's weight in kilograms divided by the square of height in meters.",
        demoLink:"https://github.com/pappukr034",
        githubLink:"https://github.com/pappukr034",
        category: 'Others'
    },
    {
        title: 'Number guessing app',
        imageUrl: 'https://content.instructables.com/FGE/F6F0/K1NVATVK/FGEF6F0K1NVATVK.jpg?auto=webp',
        description:"In a number guessing game, the user guesses a randomly generated secret number within a given number of attempts.",
        demoLink:"https://github.com/pappukr034",
        githubLink:"https://github.com/pappukr034/JavaScriptAll/tree/main/NumberGuessing",
        category: 'Others'
    },
    {
        title: 'QR Code generator',
        imageUrl: 'https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/9afab89c-1849-4921-b2a4-5d3a9e04b2b6/header_QR-code-generator_2x.png',
        description:"A generator that allows you to customize your QR code with color, shape, and logo.",
        demoLink:"https://github.com/pappukr034",
        githubLink:"https://github.com/pappukr034/JavaScriptAll/tree/main/QR_Code_Generator",
        category: 'Others'
    },
    {
        title: 'Theame switcher',
        imageUrl: 'https://www.infoxication.net/wp-content/uploads/2020/11/dark-mode-dead.png',
        description:"A theme switcher that lets users change the look of a website by switching between themes or presentation styles.",
        demoLink:"https://github.com/pappukr034",
        githubLink:"https://github.com/pappukr034/LearningReactJS/tree/main/10_ToggleDarkMode",
        category: 'Others'
    },
    {
        title: 'Independance Day 2024',
        imageUrl: 'https://static.toiimg.com/thumb/imgsize-23456,msid-77543295,width-600,resizemode-4/77543295.jpg',
        description:"This project is a vibrant and interactive web application built to celebrate Independence Day.",
        demoLink:"https://independenceday2024.onrender.com/",
        githubLink:"https://github.com/pappukr034/IndependenceDay2024",
        category: 'Minor Project'
    },
  ];

  const filteredProjects = selectedCategory === 'All' ? projects : projects.filter(project => project.category === selectedCategory);

  return (
    <div>
      <div className="container mx-auto px-4 py-10">
        <h1 className='text-start md:text-center px-1 mt-10 mb-2 md:mt-12 text-5xl font-bold bg-gradient-to-r from-orange-500 to-blue-500  text-transparent bg-clip-text md:text-8xl'>My some works</h1>
        
        {/* Category Buttons */}
        <div className="flex justify-center mt-8 bg-gray-700 p-2 rounded-lg">
          <button onClick={() => setSelectedCategory('All')} className="mx-2 px-4 py-2 rounded bg-blue-500 text-white">All</button>
          <button onClick={() => setSelectedCategory('Major Project')} className="mx-2 px-4 py-2 rounded bg-green-500 text-white">Major Projects</button>
          <button onClick={() => setSelectedCategory('Minor Project')} className="mx-2 px-4 py-2 rounded bg-yellow-500 text-white">Minor Projects</button>
          <button onClick={() => setSelectedCategory('Others')} className="mx-2 px-4 py-2 rounded bg-red-500 text-white">Others</button>
        </div>
      </div>

      <div className='mt-2 px-4 py-5'>
        <ProjectCard projects={filteredProjects} />
      </div>
    </div>
  );
}

export default Projects;
