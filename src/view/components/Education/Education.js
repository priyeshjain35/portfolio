import React from 'react';
import './education.scss';
import educations from '../../../util/data/data';
const Education = (props) => {
    return (
        <div className='education-container'>
            {educations.map((data, index) => {
            return (
                <div className="custom-card" key={index}>
                    <div className="card-header">
                        {data.title}
                    </div>
                    <div className="card-body row">
                        <div className="col-sm-8">
                            <h5 className="card-title">{data.School}</h5>
                            <p className="card-text">{data.Address}</p>
                        </div>
                        <div className="col-sm-4">
                            <div className="card-count">{data.Grades}</div>
                        </div>
                    </div>
                </div>
            );
        })}
        </div>
    );
}

export default Education;