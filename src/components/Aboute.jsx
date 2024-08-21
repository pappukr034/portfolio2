import React ,{useState} from 'react'
import Footer from './Footer'
import AutoTypingText from './AutoTypingText';
import pappuNavLogo from '../assets/pappuNavLogo.jpg'
import Button from './Button';
import resumeUpdated from '../assets/resumeUpdated.pdf'
import SocialsIcon from './SocialsIcon';
function Aboute() {

  return (
   <>
   
   <section className=" bg-slate-900 flex mt-2 ">

      <div className=" w-full flex flex-col md:flex-row justify-center items-center py-4 mx-auto px-6 space-y-4 gap-5 ">

           <div className=' w-full md:w-1/2 flex flex-wrap gap-2  mt-6 '>
               <h1 className='  w-full text-orange-400 text-5xl md:text-6xl text-start'>I am a <span className=' text-4xl'>,</span> </h1>
               
               <div className='flex gap-3 h-[100px] md:h-[160px] md:text-7xl '>               
                <AutoTypingText />
               </div>

               <p className=' mt-2 font-semibold text-white '>
                I'm  <span className=' text-xl text-orange-400 '>Pappu,</span> a passionate software developer with a keen interest in solving complex problems through efficient and scalable software solutions. With a solid background in <span className=' text-xl text-orange-400 '>Data Structures and Algorithms.</span>
               </p>
               <a className='mt-8' href={resumeUpdated} download>
              <Button text="Download Resume" />
              </a>
              <div className=' flex justify-center items-center p-1 mt-2 bg-slate-800 rounded-md'>
              <SocialsIcon />
              </div>
           </div>

         <div className=' w-full md:w-1/2 flex justify-start md:justify-center items-center relative z-10' >

            <div className='rounded-full p-1 backdrop-blur-lg shadow-2xl backdrop-brightness-150'>
            <img className=" w-[250px] rounded-full shadow-lg md:w-[420px]" src={pappuNavLogo} alt="About Me" />
            </div>

            

        </div>
      </div>
    </section>
   </>
  )
}

export default Aboute

