import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Add from './Addnumbers'

function App() {
  
  return (
    <>
    <div className='App'>
      <Navbar/>
      <Add/>
    </div>
    <h1>Add Your Numbers</h1>
    <button>Add</button>

      
    </>
  )
}

export default App
