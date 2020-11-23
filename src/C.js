import React, { useContext } from 'react'
import { MyContext } from './Contextfile'

export default function C() {
        const values = useContext(MyContext)
    return (
        <div>
            <h1>C, Y = {values.y} <button onClick={()=>values.setX(values.x+1)}>incement X</button></h1>
        </div>
    )
}