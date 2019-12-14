import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: this.props.text,
            type: this.props.type,
            lead: this.props.lead,
            className: this.props.className
        }
        this.changeCssClass = this.changeCssClass.bind(this)
    }

    changeCssClass = () => {
        this.state.className === undefined ? 
        this.setState({className: "btn btn-info shadow m-1" }) :
        this.state.className = String(this.state.className)
        
    }

    route = () => {
        this.changeCssClass()
        return <Link to={this.state.lead} className={this.state.className} >{this.state.text}</Link>

    }

    link = () => {
        this.changeCssClass()
        return <a className={this.state.className} href={this.state.lead}>{this.state.text}</a>
    }

    buttonType = () => {
        return this.state.type === "link" ? this.link() : this.route()
    }

    render() {
        return this.buttonType()
    }

}

export default Button;