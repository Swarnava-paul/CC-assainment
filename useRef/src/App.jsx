import { useState,useRef } from 'react'

import './App.css'

function App() {
  const [massage, setMassage] = useState(`Call Now Connected to client id ${Math.random().toFixed(0)+100*120}`)
  const useRefValue=useRef()
  const[time,setTime]=useState(5)
  const[display,setDisplay]=useState('hide')

  return(
    <>
    {
      (display=='hide'?(
        <>
        <div>
          <h1>{massage}</h1>
          <button onClick={()=>{
            setMassage('Call Disconnecting on process....')
            useRefValue.current=setTimeout(()=>{
              setMassage('Call Disconnected')
            },5000)

            setInterval(()=>{
              setTime(prevTime=>prevTime>0?prevTime-1:prevTime)
            },1000)
            setDisplay('display')
          }}> Disconnect call</button>
        </div>
        </>
      ):(
        <>
        <h1>{massage}</h1>
        <button onClick={()=>{
          setDisplay('hide');
          setMassage('Call connected')
          clearTimeout(useRefValue.current)
        }}>Cancel Disconnecting in {time}s</button>
        </>
      ))
    }
    </>
  )

}

export default App
