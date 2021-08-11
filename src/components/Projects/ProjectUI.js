import React from 'react';


const Project = props => {
    return (
        <div className="row">
            <div className="col-sm-8 hover-overlay">
                <img src={props.imgsrc} alt={props.imgalt} width="100%" />
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <div className='mask overlay' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                </a>

            </div>
            <div className="col-sm-4">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <a className="btn btn-dark" href={props.link} role="button" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        </div>


    );

}

export default Project;