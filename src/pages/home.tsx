import React from 'react'
import { useParams } from 'react-router-dom'

function Home() {
  const param = useParams()
  console.log(param)
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0"></div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-gray-500">You have a new message!</p>
      </div>
    </div>
  )
}
export default Home
