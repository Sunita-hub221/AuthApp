import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Landing from './pages/LandingPage'
import Navbar from './components/NavBar'

const App = () => {
  const [buttonClicked, setButtonClicked] = useState("");
  return (
    <>
      <div className=' w-screen min-h-screen flex flex-col mx-auto'>
        <div className='w-full'>
          <Navbar buttonClicked={buttonClicked} setButtonClicked={setButtonClicked} />
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Landing buttonClicked={buttonClicked} setButtonClicked={setButtonClicked} />} />
            <Route path='/home' element={<HomePage />} />
          </Routes>
        </div>
      </div>

    </>
  )
}

export default App