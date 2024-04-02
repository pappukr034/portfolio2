import React ,{useState} from 'react'
import Footer from './Footer'
import AutoTypingText from './AutoTypingText';
import pappuNavLogo from '../assets/pappuNavLogo.jpg'
import Button from './Button';

function Aboute() {

  return (
   <>
   
   <section className=" bg-slate-900 h-screen flex ">

      <div className=" w-full flex flex-col md:flex-row justify-center items-center py-4 mx-auto px-6 space-y-4 gap-5">

           <div className=' w-full md:w-1/2 flex flex-wrap gap-2  mt-6 '>
               <h1 className='  w-full text-orange-400 text-5xl md:text-6xl text-start'>I am a <span className=' text-4xl'>,</span> </h1>
               
               <div className='flex gap-3 h-[100px] md:h-[160px] md:text-7xl '>               
                <AutoTypingText />
               </div>

               <p className=' mt-2 font-semibold text-white '>
                I'm  <span className=' text-xl text-orange-400 '>Pappu,</span> a passionate software developer with a keen interest in solving complex problems through efficient and scalable software solutions. With a solid background in <span className=' text-xl text-orange-400 '>Data Structures and Algorithms.</span>
               </p>
               <a className='mt-2' href="../assets/ResumeOrg.pdf" download>
                <Button text="Download Resume" />
               </a>
           </div>

         <div className=' w-full md:w-1/2 flex justify-center md:justify-center items-center ' >

            <div className=' bg-blue-600 rounded-full p-1 backdrop-blur-lg shadow-2xl backdrop-brightness-150'>
            <img className=" w-[250px] rounded-full shadow-lg md:w-[420px]" src={pappuNavLogo} alt="About Me" />
            </div>

            

        </div>
      </div>
    </section>
      <Footer />
   </>
  )
}

export default Aboute

