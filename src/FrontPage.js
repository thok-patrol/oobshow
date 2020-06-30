import React from 'react'
import { render } from 'react-dom'
import {Button, Grid } from '@material-ui/core'

export default class FrontPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className='flex-column'>

                <img id='oobImage' src='./img/OOBPNG.png'></img>

                <iframe src="https://open.spotify.com/embed-podcast/episode/1iOmbKV9p7RmD62wYvHpGZ" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> 
            
            <Button variant='contained' color='primary'>Button text here</Button>
        </div>)
    }
}