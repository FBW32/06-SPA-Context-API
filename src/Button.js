import React from 'react'

export default function Button(props) {
    console.log(props)
    return (
        <div>
            <button style={{backgroundColor : props.color}}> {props.children} </button>
        </div>
    )
}
