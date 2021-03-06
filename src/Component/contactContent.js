import React from 'react';


function ContactContent() {
    const aStyle ={
        color: 'black',
        padding: 10,
    }
    return(
        <section className="mb-4">
            <h2 className="h1-responsive font-weight-bold text-center my-4">Contact Me</h2>
            <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly.</p>
            <div className="row">
                <div className="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="name" name="name" className="form-control" />
                                    <label for="name" className="">Your name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="email" name="email" className="form-control" />
                                    <label for="email" className="">Your email</label>
                                </div>
                            </div> 
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="md-form mb-0">
                                    <input type="text" id="subject" name="subject" className="form-control" />
                                    <label for="subject" className="">Subject</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="md-form">
                                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                    <label for="message">Your message</label>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="text-center text-md-left">
                        <a className="btn btn-primary" href="#">Send</a>
                    </div>
                    <div className="status"></div>
                </div>
                <div className="col-md-3 text-center">
                    <ul className="list-unstyled mb-0">
                        <li>
                            <i className="fa fa-map-marker mt-4 fa-2x"></i>
                            <p>Sydney, NSW 2100, Australia</p>
                        </li>
                        <li>
                            <i className="fa fa-phone mt-4 fa-2x"></i>
                            <p>+61 0432 385 150</p>
                        </li>
                        <li>
                            <i className="fa fa-envelope mt-4 fa-2x"></i>
                            <p>fernandes.alvaro@gmail.com</p>
                        </li>
                        <li>
                            <a href="https://github.com/AlvaroFernandes" title="link for github repository" target="_blank" rel="noopener noreferrer" style={aStyle}><i className="fa fa-github mt-4 fa-2x" aria-hidden="true"></i></a>
                            <a href="https://www.linkedin.com/in/alvaro-fernandes-07071985/" title="Follow me on LinkedIn" target="_blank" rel="noopener noreferrer" style={aStyle}><i className="fa fa-linkedin mt-4 fa-2x"></i></a>
                            <a href="../assets/ResumeAlvaro.pdf" title="my resume" target="_self" rel="noopener noreferrer" style={aStyle}><i className="fa fa-file-pdf-o mt-4 fa-2x" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ContactContent;