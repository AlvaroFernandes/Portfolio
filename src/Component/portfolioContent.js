import React from 'react';
import projects from '../assets/projects.json';
import Cards from './card.js'

function PortfolioContent() {
    return(
        <section id='portfolio'>
            <div className='container my-3 py-5 text-center'>
                <div className='row mb-5'>
                    <div className='col'>
                        <h1>Portfolio</h1>
                        <p>Some of my best projects</p>
                    </div>
                </div>
           </div>
           <div className="container-fluid d-flex justify-content-center">
            {projects.map(e => {
                <Cards 
                    name={e.name}
                    img={e.img}
                    text={e.text}
                    deploy={e.deploy}
                    git={e.git}
                    video={e.video}
                />
            })}
           </div>
       </section>
       
    )
}

export default PortfolioContent;