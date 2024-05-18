import logo from './logo.svg';
import './App.css';
import React from 'react'
import {useState} from 'react'
function App() {
  const[count,setCount]=useState(0)
  return (
   <>
    <h1>count value :{count}</h1>
    <button onClick={()=>{
      setCount(count+1)
    }}>increase Count</button>
   </>
  );
}

export default App;
