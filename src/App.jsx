import './App.css'
import React, { useState } from 'react'

const App = () => {
   const [title, settitle] = useState("")
   const [desc, setdesc] = useState("")
   const [maintask, setmaintask] = useState([])
   
   
  const submitHandler= (e)=>{
      e.preventDefault()
     setmaintask([...maintask,{title,desc}])
      settitle("")
      setdesc("")
      console.log("Hello world")
      console.log("Task added to your todo")
  }
  let rendertask = <h2>No Task Avialible</h2>
  

  if(maintask.length>0){
    rendertask = maintask.map((t,i)=>{
      return <div key={i} className="showtask">
        <h2>{t.title}</h2>
        <h3>{t.desc}</h3>
        <button
        onClick={()=>{
          deleteHandler (i);
        }}
        >Delete</button>
      </div>
      
    })
  }
 
  const deleteHandler = (i) =>{
        let copytask = [...maintask]
        copytask.splice(i,1)
        setmaintask(copytask)
  }

  return (
    <>
      <div className="header"><h1>MY <span>TO DO List</span></h1></div>
       
       <form onSubmit={submitHandler}> 
       
       <input type="text" className='title' placeholder='Enter Title Here'
       value={title} 
       onChange={(e)=>{
        settitle(e.target.value)
       }}/>
       <input type="text" className='desc' placeholder='Enter Description Here'
       value={desc}
       onChange={(e)=>{
        setdesc(e.target.value)
       }} />
       <button>Add Task</button>
     </form>
   
     
     <div className="task">
      {rendertask}
     </div>
      
    </>
  )
}

export default App

