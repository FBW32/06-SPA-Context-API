import React, {useState} from "react";
import {MyContext} from "./ContextFile";

export default function Container(props) {
    const [x,setX]= useState(0)
    const [y,setY]=useState(0)
    console.log(props)
    return(
        <MyContext.Provider value={{ x,y,setX,setY}}>
          {props.children}
        </MyContext.Provider>
    )
}