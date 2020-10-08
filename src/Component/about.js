import React from 'react';
import AboutContent from './aboutContent';

function About(){
    return(
        <div className="container">
            <div className="card border-0 shadow my-5">
                <div className="card-body p-5">
                    <AboutContent />
                </div>
            </div>
        </div>  
    )
}

export default About;