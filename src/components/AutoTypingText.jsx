// AutoTypingText.js
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const AutoTypingText = () => {
    const [text] = useTypewriter({
        words: ['Frontend developer', 'Backend developer', 'Coder'],
        loop: Infinity,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })
    
      return (
        <div className=' text-5xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text md:text-7xl'>
          <span>{text}</span>
          <Cursor cursorColor='red' />
        </div>
      )
};

export default AutoTypingText;
