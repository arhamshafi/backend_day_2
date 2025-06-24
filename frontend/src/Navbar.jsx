import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
            <div className='w-full h-[60px] bg-green-600 flex justify-between items-center px-5'>
                <div className='text-2xl text-white'>Testing</div>
                <ul className='flex text-white justify-center font-bold text-md items-center gap-4 cursor-pointer '>
                   <li><Link to={"/"} >Post</Link></li>
                   <li><Link to={"/comments"} >Comments</Link></li>
                   <li><Link to={"/albums"} >Albums</Link></li>
                   <li><Link to={"/photos"} >Photos</Link></li>
                   <li><Link to={"/users"} >Users</Link></li>
                </ul>
                <div className='w-max h-max text-sm text-white'>API <span className='font-bold'>-Integreation-</span> with <span className='font-bold'>-Back-End-</span></div>
            </div>
  )
}

export default Navbar