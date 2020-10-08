import React from 'react';
import ContactContent from './contactContent';

function Contact(){
    return(
        <div className="container">
            <div className="card border-0 shadow my-5">
                <div className="card-body p-5">
                    <ContactContent />
                </div>
            </div>
        </div>  
    )
}

export default Contact;