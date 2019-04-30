import React, { Component } from 'react';
import './MenuIcon.scss';

class MenuIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handleMenuButtonChange() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const isOpenClass = this.state.isOpen ? '' : 'change';
        return(
            <div className={`menu-container ${isOpenClass}`} onClick={this.handleMenuButtonChange.bind(this)}>
                <div className='bar1'></div>
                <div className='bar2'></div>
                <div className='bar3'></div>
            </div>
        );
    }

}

export default MenuIcon;