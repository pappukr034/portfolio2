import React from 'react'
import Footer from './Footer.jsx';
import SkillsCard from './SkillsCard.jsx';


function Skills() {

  const skills = [
    {
      title: 'JavaScript',
      description: 'Proficient in modern JavaScript (ES6+) and its ecosystem.',
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZy0F9pfOV_ZbLtxkgOciRM-zzLDfusG3bKhAemYwcSA&s"
    },
    {
      title: 'React.js',
      description: 'Experience building SPAs and dynamic UIs with React.js.',
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkzv19f4ThzUieybTxuYSDjI4hG6dTSfSXBxycTCrkA&s"
    },
    {
      title: 'Tailwind CSS',
      description: 'Skilled in using Tailwind CSS for responsive styling and utility-first approach.',
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLuZ96y5283SsMP9qWhm3goWZ37KawSHOorpCBPqXGkQ&s"
    },
    {
      title: 'HTML & CSS',
      description: 'Solid understanding of HTML5 and CSS3, including Flexbox and Grid layout.',
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3BA-hO-P46GQHgnegFBgmBujfg0mF7YCn0FzdQ6MfQ&s"
    },
  ];
  

  return (
    <>
    <main className='w-full shadow-md shadow-orange-300 p-3 space-x-2'> 
      <h1 className=' text-start md:text-center px-1 mt-10 mb-2 md:mt-12 text-5xl font-bold bg-gradient-to-r from-orange-500 to-blue-500  text-transparent bg-clip-text md:text-8xl'>My Skills</h1>
         <div className=' w-full px-3 py-3 md:mt-5 flex justify-center items-center flex-wrap gap-6'>
         </div>

       <div className='flex my-10 flex-col flex-wrap md:flex-row gap-6 md:gap-10 px-3 py-4'>
       {skills.map((skill, index) => (
          <SkillsCard key={index} skill={skill} />
        ))}
       </div>
     </main>
    </>
  )
}

export default Skills
