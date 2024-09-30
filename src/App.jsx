import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const[subject , setSubject]=useState("")
  const[hours,sethours]=useState(0)
  const[planner ,setplanner]= useState([])

  const handleClick = (e)=>{
    e.preventDefault();
    const obj={
      subject : subject,
      hours : hours
    }
    setplanner([obj]);
  }

  return (
   <>
   <main>
    <div className="one">
      <h1>Education planner</h1>
    </div>
    <div className="half">
      <input onChange={(e)=>{
        subject = e.target.value;
      }} type="text" placeholder='Name'/>
      <input onChange={(e)=>{
        hours = e.target.value;
      }} type="number" placeholder='hours'/>
      <button onClick={handleClick}>Add plan</button>
    </div>
    <form>
      {
        planner.map((sub,index)=>{
          return(
           <div>
            <p>{sub.subject}-{sub.hours}Hours</p>
            <button>+</button>
            <button>-</button>
           </div>
          )
        })
          
      }
    </form>
   </main>
   </>
  )
}

export default App
