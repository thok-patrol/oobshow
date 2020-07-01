import React from 'react'

export default function Person(props) {

        return (<div className='d-flex flex-column'>
        <div>
            <img className='headshot' src={props.src}></img>
        </div>
        <div className='p-2 text-center'>
<h4>{props.name}</h4>
            {props.children}
        </div>
        </div>)
    }
