import React from 'react';
import './about.scss';
import proPic from '../../../util/images/wall-pic.jpg'
const About = (props) => {
    return (
        <div>
            <img className='background-image'
                src={proPic} alt='Priyesh Singhai'
                width='100%'
            />
            <p className='image-para'>
                {`Hi I'm Priyesh, an Young and Enthusiate Software Developer`}<br/>
                {`With a can do attitude...`}
            </p>
        </div>
    );
}

export default About;