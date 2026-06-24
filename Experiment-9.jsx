import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './Student'
function App() {
  const [count, setCount] = useState(0)
  const increment =()=>{
    setCount(count+1)
  }
  const decrement=()=>{
    setCount(count-1)
  }
  const reset=()=>{
    setCount(0)
  }

  return (
    <>
    
     <h1>Registration Form</h1>
    <input type="text" placeholder="Enter Your Name" onChange={(e)=>SetName(e.target.value)}/><br/>
    <input type="text" placeholder="Enter Your Email-Id"onChange={(e)=>SetEmail(e.target.value)}/><br/>
    <input type="text" placeholder="Enter Your Password"onChange={(e)=>SetPassword(e.target.value)}/><br/>
   <h2>{name}</h2>
   <h2>{email}</h2>
   <h2>{password}</h2>
   <button onClick={Show}>Sumbit </button>
  
   
   </>
  )
}

export default App