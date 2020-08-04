import React from 'react'

export default function Person(props) {

        return (<div className='d-flex flex-column' style={{backgroundColor: props.color}}>
            <a href={props.link} className='link'>
        <div>
            <img className='headshot' src={props.src}></img>
        </div>
        <div className='p-2 px-3 text-center'>
<h3>{props.name}</h3>
            {props.children}
        </div>
        </a>
        </div>)
    }
