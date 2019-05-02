import React, {Component} from 'react';
import './SidePanel.scss';
import MenuIcon from '../MenuIcon/MenuIcon';
import About from '../about/About';

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
            <div>
                <div className={`sidenav ${stylingClass}`}>
                    <div onClick={this.handleSelectMenu.bind(this, 'about')}>{'About'}</div>
                    <div onClick={this.handleSelectMenu.bind(this, 'edus')}>{'Education & Skills'}</div>
                    <div onClick={this.handleSelectMenu.bind(this, 'proj')}>{'Projects'}</div>
                    <div onClick={this.handleSelectMenu.bind(this, 'cont')}>{'Contact'}</div>
                </div>

                <div className={`${secDiv} real-content`}  onClick={this.handleSideMenu.bind(this)} style={{'display': 'inline-block'}}>
                    <span style={{'position': 'absolute', 'top': '0px'}}>
                        <MenuIcon isOpen={this.state.isOpen}
                            toggle={this.handleSideMenu.bind(this)}
                        />
                    </span>
                    <div>
                        <div id='about'>
                        <About />
                    </div>
                    <div id='edus'>

                    </div>
                    <div id='proj'>

                    </div>
                    <div id='cont'>

                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SidePanel;