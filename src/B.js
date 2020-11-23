import React, { useContext } from 'react'
import { MyContext } from "./Contextfile"

export default function B() {
    //final step ,how you use context values in app
         const values =  useContext(MyContext)
    return (
        <div>
            <h1>B, X = {values.x} <button onClick={()=>values.setY(values.y+1)}> incement Y</button></h1>
        </div>
    )
}