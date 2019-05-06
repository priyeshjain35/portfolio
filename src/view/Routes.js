import React from 'react';
import { Route, Switch} from 'react-router-dom';
import About from './components/About/About';
import Education from '../view/components/Education/Education';
import Projects from '../view/components/Projects/Projects';
import Contact from '../view/components/Contact/Contact';

const Routes = (props) => {
    return (
        <Switch>
            <Route path='/about' component={About}></Route>
            <Route path='/eduAndSkills' component={Education} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
        </Switch>
    )
}

export default Routes;