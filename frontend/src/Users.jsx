import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'


function Users() {

    let [api, setapi] = useState(null)

    axios.get("http://localhost:4505/user").then((res) => setapi(res.data))
    return (
        <div className='w-full min-h-screen bg-white '>
            <Navbar />
            <h1 className='text-4xl text-black mt-5 font-bold text-center capitalize'>Users aPI here !!</h1>
            <div className='w-full h-max p-5 flex justify-evenly items-center flex-wrap'>

                {
                    api && api.map((ele, idx) => {
                        return (
                            <div key={idx} className='w-[300px] h-[250px] cursor-pointer px-5 bg-green-600 rounded-xl mt-4 transition-all duration-150 ease-linear hover:scale-102 hover:bg-green-400'>
                                <h1 className='text-center mt-5 font-bold text-white capitalize '> id : {ele.id} </h1>
                                <p className='text-white text-md '> Name : {ele.name} </p>
                                <p className='text-white text-md '> Email : {ele.email} </p>
                                <p className='text-white text-lg '> Username : {ele.username} </p>
                                <p className='text-white text-sm mt-5 '> Adress : {ele.address.street} , {ele.address.suite} , {ele.address.city} </p>
                                <p className='text-white text-sm mt-5 font-bold '> Zipcode : {ele.address.zipcode} </p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Users