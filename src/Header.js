import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div style={headStyle}>
                <h3>  To Do App </h3> 
            </div>
        )
    }
}

const headStyle = {
    backgroundColor: "Blue",
    textAlign: "Center",
    color : "White"
}

export default Header
