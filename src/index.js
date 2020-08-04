import React from 'react'
import ReactDOM from 'react-dom'
import FrontPage from './FrontPage'
import TopNav from './Components/TopNav'
import Footer from './Components/Footer'

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div>
            <TopNav />
        <FrontPage />
        <Footer />
        </div>)
    }
}

const wrapper = document.getElementById('root')
wrapper ? ReactDOM.render(<Main />, wrapper) : console.log('Unable to locate root')
