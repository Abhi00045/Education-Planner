import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const[subject , setSubject]=useState("")
  const[hours,sethours]=useState(0)
  const[planner ,setplanner]= useState([])

  const handleClick = ()=>{

  }

  return (
   <>
   <main>
    <div className="one">
      <h1>Education planner</h1>
    </div>
    <div className="half">
      <input type="text" placeholder='Name'/>
      <input type="number" placeholder='hours'/>
      <button onClick={handleClick}>Add plan</button>
    </div>
   </main>
   </>
  )
}

export default App
