import React from 'react'

const Logo:React.FC = () => {
  return (
    <div className="col-span-2">

    <h1 className="text-2xl font-bold">
    <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 text-transparent bg-clip-text">
        DeepDev
    </span>
      <span className="text-blue-400 bg-gray-800 px-3 py-1 rounded-lg shadow-md">
        LAB
      </span>
    </h1>
    </div>
  )
}

export default Logo