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
          <h2>React Counter Application</h2> 
<h2>{count}</h2>
<button onClick={increment}>Increment</button>
<br/><br/>
<button onClick={decrement}>Decrement</button>
<br/><br/>
<button onClick={reset}>Reset</button>
   </>
  )
}

export default App