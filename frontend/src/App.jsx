import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Comments from './Comments'
import Album from './Album'
import Photos from './Photos'
import Users from './Users'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/comments' element={<Comments />} />
        <Route path='/albums' element={<Album />} />
        <Route path='/photos' element={<Photos />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
