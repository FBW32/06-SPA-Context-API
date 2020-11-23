import React, {useState} from 'react'
import {MyContext} from "./Contextfile"


export default function Container(props) {

    const [x,setX]=useState(0)
    const [y,setY]= useState(0)

    console.log(props)

    return (
          //Second Step, wrap your whole application in Context.Provider, through provider you provide value to your application
        <MyContext.Provider value={{ x,y,setX,setY }} >
            {props.children}
        </MyContext.Provider> 
    )
}
