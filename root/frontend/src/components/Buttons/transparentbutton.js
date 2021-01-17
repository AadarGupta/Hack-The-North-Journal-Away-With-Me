import React, { Component } from 'react'
import './transparentbutton.css'

export default class TransparentButton extends Component {

    // constructor() {
        
    //     super()

    //     this.STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
    //     this.SIZES = ['btn--medium', 'btn--large'];
    // }

    render() {
        var children = ""
        var onClick = () => {}

        this.props.children == null ? children = "Click Me!" : children = this.props.children
        this.props.onClick == null ? onClick = () => {} : onClick = this.props.onClick
        return (
            <button onClick={onClick} className="TransparentButton">{children}</button>
        )
    }
}