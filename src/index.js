import React from 'react'
import ReactDOM from 'react-dom'
import FrontPage from './FrontPage'

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <FrontPage />
    }
}

const wrapper = document.getElementById('root')
wrapper ? ReactDOM.render(<Main />, wrapper) : console.log('Unable to locate root')
