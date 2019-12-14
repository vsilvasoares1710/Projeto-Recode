import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Btn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: this.props.text,
            type: this.props.type,
            lead: this.props.lead,
            className: this.props.className,
            onClick: this.props.onClick
        }
        this.changeCssClass = this.changeCssClass.bind(this)
        this.changeOnClick = this.changeOnClick.bind(this)
    }

    changeCssClass = () => {
        if (this.state.className === undefined) {
            this.setState({className: "btn btn-info shadow m-1" })
        }
    }

    changeOnClick = () => {
        if (this.state.onClick === undefined) {
            this.setState({onClick: ""})
            return ""
        } else {
            return this.state.onClick
        }
    }
    
    emptyButton = () => {
        this.changeOnClick()
        this.changeCssClass()

        return <button type="button" onClick={this.state.onClick} className={this.state.className}>{this.state.text}</button>
    }

    routeButton = () => {
        this.changeOnClick()
        this.changeCssClass()
        return <Link to={this.state.lead} className={this.state.className}>{this.state.text}</Link>

    }

    linkButton = () => {
        this.changeOnClick()
        this.changeCssClass()
        return <a href={this.state.lead} className={this.state.className} >{this.state.text}</a>
    }

    buttonType = () => {
        return this.state.type === "link" ? this.linkButton() : this.routeButton()
    }

    render() {
        if (this.state.lead === undefined) {
            return this.emptyButton()
        } else {
            return this.buttonType()
        }
    }

}

export default Btn;