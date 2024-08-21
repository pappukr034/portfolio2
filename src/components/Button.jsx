import React from 'react'

function Button({text}) {
  return (
    <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-2 px-4 rounded-md hover:from-purple-600 hover:via-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">{text}</button>
  )
}

export default Button
