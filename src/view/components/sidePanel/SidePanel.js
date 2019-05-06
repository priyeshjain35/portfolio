import React, {Component} from 'react';
import './SidePanel.scss';
import MenuIcon from '../MenuIcon/MenuIcon';
import Routes from '../../Routes';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class SidePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handleSideMenu() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleSelectMenu(id) {
        console.log(id);
        this.handleSideMenu();
    }

    render() {
        const stylingClass = this.state.isOpen ? 'push-content' : '';
        const secDiv = this.state.isOpen ? 'main-content' : ''
        return (
            <Router>
                <div>
                <div className={`sidenav ${stylingClass}`}>
                    <Link to='/about' onClick={this.handleSelectMenu.bind(this, 'about')}>{'About'}</Link>
                    <Link to='/eduAndSkills' onClick={this.handleSelectMenu.bind(this, 'edus')}>{'Education & Skills'}</Link>
                    <Link to='/projects' onClick={this.handleSelectMenu.bind(this, 'proj')}>{'Projects'}</Link>
                    <Link to='/contact' onClick={this.handleSelectMenu.bind(this, 'cont')}>{'Contact'}</Link>
                </div>

                <div className={`${secDiv} real-content`}  onClick={this.handleSideMenu.bind(this)}>
                    <span style={{'position': 'absolute', 'top': '0px'}}>
                        <MenuIcon isOpen={this.state.isOpen}
                            toggle={this.handleSideMenu.bind(this)}
                        />
                    </span>
                </div>
                <Routes />
            </div>
            </Router>
        );
    }
}

export default SidePanel;