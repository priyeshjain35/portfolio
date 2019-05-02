import React, { Component } from 'react';
import './MenuIcon.scss';

class MenuIcon extends Component {
    render() {
        const isOpenClass = !this.props.isOpen ? '' : 'change';
        return(
            <div className={`menu-container ${isOpenClass}`}>
                <div className='bar1'></div>
                <div className='bar2'></div>
                <div className='bar3'></div>
            </div>
        );
    }

}

export default MenuIcon;