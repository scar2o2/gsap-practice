import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BasicGSAP from './pages/BasicGSAP'
import IntermediateGSAP from './pages/IntermediateGSAP'

const App = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/basicgsap' element={<BasicGSAP/>}/>
          <Route path='/intermediategsap' element={<IntermediateGSAP/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App