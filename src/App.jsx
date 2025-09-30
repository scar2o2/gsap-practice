import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BasicGSAP from './pages/BasicGSAP'
import ModerateGSAP from './pages/ModerateGSAP'
import ComplexGSAP from './pages/ComplexGSAP'
import AdvancedGSAP from './pages/AdvancedGSAP'
import ScrollTriggersGSAP from './pages/ScrollTriggersGSAP'
import ComponentsGSAP from './pages/ComponentsGSAP'

const App = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/basicgsap' element={<BasicGSAP/>}/>
          <Route path='/moderategsap' element={<ModerateGSAP/>}/>
          <Route path='/complexgsap' element={<ComplexGSAP/>}/>
          <Route path='/advancedgsap' element={<AdvancedGSAP/>}/>
          <Route path='/gsapscrolltrigger' element={<ScrollTriggersGSAP/>}/>
          <Route path='/gsapcomponents' element={<ComponentsGSAP/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App