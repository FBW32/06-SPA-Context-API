import React, { useContext } from 'react';
import { MyContext } from './ContextFile'

export default function C(){
    const values = useContext(MyContext)
    return(
        <div>
            <h1> C, Y= {values.y}<button onClick={()=>values.setX(values.x+1)}>increment X</button></h1>
        </div>
    )
}