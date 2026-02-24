import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
  const addValue=()=>{
   
      counter=counter+1;
      setCounter(counter);
    
    
   
  }
  const removeValue =()=>{
   if(counter>0){
    counter=counter-1;
    setCounter(counter)
   }
   else{
    setCounter("error")
   }
  }
  return(
    <>
     <h1>Finally Try Myself... </h1>
    <h2> Counter value:{counter} </h2>
    <button onClick={addValue}>Add button </button>
    <br />
       <button onClick={removeValue}>Remove button </button>
    </>
    
  )
}

export default App
