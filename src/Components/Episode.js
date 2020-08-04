import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default class Episode extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Card className='m-3 p-3 shadow episode-card'>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Body className='px-0' >{this.props.children}</Card.Body>
            <Button variant='light' className='ml-auto' href={this.props.link}>Listen Now</Button>
        </Card>
    }
}