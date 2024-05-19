import { useState,useRef } from 'react'

import './App.css'

function App() {
  
  const formInputValues=useRef({name:'',email:'',state:''})

  return (
    <div >
      <form action="" style={{display:"grid",width:"80%",rowGap:"19px",margin:"auto"}} onChange={(event)=>{
        event.preventDefault()
        formInputValues.current={
          ...formInputValues.current,
          [event.target.name]:event.target.value
        }
        console.log(formInputValues.current);
      }}>
        <input type="text" name='name' placeholder='Enter Name'/>
        <input type="text" name='email' placeholder='Enter Email'/>
        <select  id="" name='state'>
          <option>Select State</option>
          <option value="west Bengal">West Bengal</option>
          <option value="West Bengal">West Bengal</option>
        </select>
        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default App
