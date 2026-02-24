import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './Components/Props'

function App() {
  let studentData = [
    { name:"Opinder Singh", age:21 },
    { name:"xyz", age:20 }
  ];

  return (
    <>
    <h1 className="bg-blue-500" > hello</h1>

    {
       studentData.map((stu,index)=>(
          <Student 
            key={index}
            newobj={stu.name}
            age={stu.age}
          />
        ))
    }
    
    
    </>
  )
}

export default App
