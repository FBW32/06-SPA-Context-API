import React,{useContext} from 'react'
import {MyContext} from './App'

export default function B() {
const {x,y,setY}=useContext(MyContext);

  return (
    <div>
      <h1>B, x = {x} <button onClick={()=>{setY(y+1)}}>Increment Y</button></h1>
    </div>
  )
}
