import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Add from './Addnumbers'

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)
  
  return (
    <>
    <div className='App'>
      <Navbar/>
      <h1>Add Your Numbers</h1>
    </div>
    
    <input type="number" placeholder='num1' value={num1} onChange={(e) => setNum1(+e.target.value)} /><br /><br />
    <input type="number" placeholder='num2' value={num2} onChange={(e) => setNum2(+e.target.value)} /> <br /> <br />
    <button onClick={Add}>Add</button>

    <p>Result : {result}</p>
   
    
      
    
    

      
    </>
  )
}

export default App
