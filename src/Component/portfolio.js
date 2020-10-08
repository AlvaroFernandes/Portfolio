import React from 'react';
import PortfolioContent from './portfolioContent';

function Portfolio(){
    return(
        <div className="container">
            <div className="card border-0 shadow my-5">
                <div className="card-body p-5">
                    <PortfolioContent />
                </div>
            </div>
        </div>  
    )
}

export default Portfolio;