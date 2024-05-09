
import { useState } from "react"
export const Counter=()=>{

    const[count,setCount]=useState(0)

    return(
        <>
        <h1>Count is :{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increase</button>
        <button onClick={()=>{
            setCount(count-1)
        }}>Decrease</button>
        </>
    )
}