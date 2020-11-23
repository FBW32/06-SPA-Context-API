import React,{useContext} from 'react'
import {MyContext} from './App'

export default function C(props) {
  const {x,y,setX}=useContext(MyContext);
  return (
    <div>
      <h1>C, y = {y} <button onClick={()=>{setX(x+1)}}>Increment X</button></h1>
    </div>
  )
}