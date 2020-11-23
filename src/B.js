import React, { useContext } from 'react';
import { MyContext } from './ContextFile'



export default function B(){
    //Finsl step, how you use context values in app 
    const values = useContext(MyContext)
    return(
        <div>
            <h1> B, X= {values.x}<button onClick={()=>values.setY(values.y+1)}>increment Y</button></h1>
        </div>
    )
}