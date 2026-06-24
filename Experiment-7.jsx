import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './Student'
function App() {
  return (
    <>
    
    <h2>student information</h2>
<Student name="Rohit" course="B.Tech" marks="90"/><br/>
<Student name="Mohit" course="M.Tech" marks="95"/><br/>
<Student name="Raj" course="MCA" marks="98"/><br/>

    
    
   
   </>
  )
}

export default App