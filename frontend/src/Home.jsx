import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

function Home() {

    let [api, setapi] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:4505/").then((res) => setapi(res.data))
    }, [])


    return (
        <>
            <div className='w-full min-h-screen bg-white '>
                <Navbar />
                <h1 className='text-4xl text-black mt-5 font-bold text-center capitalize'>Post aPI here !!</h1>
                <div className='w-full h-max p-5 flex justify-evenly items-center flex-wrap'>
                    {
                        api && api.map((ele, idx) => {
                            return (
                                <div key={idx} className='w-[300px] h-[250px] cursor-pointer bg-green-600 rounded-xl mt-4 transition-all duration-150 ease-linear hover:scale-102 hover:bg-green-400'>
                                    <h1 className='text-center mt-5 font-bold text-white capitalize '> {ele.title} </h1>
                                    <p
                                        className='w-full h-[150px] px-2 mt-3 overflow-y-scroll text-center text-white'
                                        style={{
                                            scrollbarWidth: 'none',
                                            msOverflowStyle: 'none'
                                        }}
                                    >
                                        {ele.body}
                                    </p>
                                </div>

                            )
                        })
                    }

                </div>
            </div>


        </>

    )
}

export default Home