import React from 'react';


function Cards(props){
    const style = {
        card: {
            width: 18+'rem',
            marginLeft: 10,
            padding: 10
            
        },
        btn:{
            margin:10,
        },
        img: {
        }
    }
    let deploy = props.deploy;
    let git = props.git;
    let video = props.video;
    let btnDeploy  = "";
    let btnGit = "";
    let btnVideo = ""

    if(deploy){
       btnDeploy = <a href={deploy} style={style.btn} className="btn btn-primary" target='_blank' rel="noopener noreferrer">Deploy Application</a>
    }

    if(git){
        btnGit = <a href={git} style={style.btn} className="btn btn-primary" target='_blank' rel="noopener noreferrer">GitHub Repository</a>
    }

    if(video){
        btnVideo = <a href={video} style={style.btn} className="btn btn-primary" target='_blank' rel="noopener noreferrer">Video of application</a>
    }

    return(
        <div className="col col-md-4">
            <div className="" style={style.card} key={props.key}>
                <img className="card-img-top" src={props.img} alt={props.name}></img>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.text}</p>
                    {btnDeploy}
                    {btnGit}
                    {btnVideo}
                </div>
            </div>
        </div>
    )
}

export default Cards;