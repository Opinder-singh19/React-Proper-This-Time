import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center inset-x-0 bottom-12 px-2'>
             <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
              <button  onClick={()=>setColor("red")}       className='bg-red-600 outline-none px-4 py-1 rounded-full'>Red</button>
              <button onClick={()=>setColor("Blue")}   className='bg-blue-600 outline-none px-4 py-1 rounded-full'>Blue</button>
              <button  onClick={()=>setColor("Green")}   className='bg-green-600 outline-none px-4 py-1 rounded-full'>Green</button>
              <button onClick={()=>setColor("Pink")}   className='bg-pink-600 outline-none px-4 py-1 rounded-full'>Pink</button>

             </div>
        </div>

    </div>
  )
}

export default App
