import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <div>
      <nav className='flex bg-red-400 p-6'>
        <div className='flex  text-white mr-6'>
          <span className='font-bold'> Kalvium </span>
        </div>

        <div className='  flex-grow sm:flex sm:items-center sm:w-auto'>
          <div className='text-sm sm:flex-grow'>
            <a href="" className='block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4'>About Us</a>
            <a href="" className='block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4'>Contacts</a>
            <a href="" className='block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4'>Courses</a>
          </div>
          <div>
            <button href="" className=' pl-2 pr-2  border-white text-white '>Login</button>
          </div>
        </div>
      </nav>

      <div className=' mt-5 px-2'>
        <button className='ml-20 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4'>Button one</button>

        <div className="ml-20 bg-red-100 border border-red-400 text-red-700 px-4 py-3 my-5" >
          <strong className='font-bold'>Alert!</strong>
          <span className="block sm:inline">This is awesome!</span>
        </div>
      </div>
      <div className='flex justify-center'>
      <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" className='h-12 w-12 mr-5 ' alt="" />
      <div className='m1-6 pt-1'>
        <h4 className='text-x1 text-grey-900'>KalviumStore</h4>
        <p className="text-base text-gray-600">You have a new course!</p>
      </div>
      </div>

    </div>

    <footer className='bg-gray-200 text-center '>
      <div className="text-gray-700 text-center p-4">
        2024 Copyright:
        <a href="https://kalvium.com/" className="text-gray-800 ">Kalvium</a>
      </div>
    </footer>
    </>
  )
}

export default App
