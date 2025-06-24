import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { data } from 'react-router-dom'


function Photos() {

    let [api, setapi] = useState(null)

    axios.get("http://localhost:4505/photo").then((res) => setapi(res.data))

    return (
        <div className='w-full min-h-screen bg-white '>
            <Navbar />
            <h1 className='text-4xl text-black mt-5 font-bold text-center capitalize'>Photos aPI here !!</h1>
            <div className='w-full h-max p-5 flex justify-evenly items-center flex-wrap'>

                {
                    api && api.map((ele, idx) => {
                        return (
                            <div key={idx} className='w-[300px] h-[300px] cursor-pointer px-5 bg-green-600 rounded-xl mt-4 transition-all duration-150 ease-linear hover:scale-102 hover:bg-green-400'>
                                <h1 className='text-center mt-5 font-bold text-white capitalize '> {ele.id} </h1>
                                <p className='text-white text-md text-center'> {ele.title} </p>
                                <div className='w-[80%] mx-auto h-[180px] mt-2 rounded-xl border overflow-hidden '>
                                    {/* <img src={ele.url} alt="" /> */}
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Photos