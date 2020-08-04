import React from 'react'
import { Navbar } from 'react-bootstrap'

export default function Footer(props) {
    return <Navbar fixed='bottom'>
        <p className='text-muted m-1'><small>© Ryan Werner 2020</small></p>
    </Navbar>
}