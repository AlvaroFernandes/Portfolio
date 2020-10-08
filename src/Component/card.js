import React from 'react';


function Cards(props){
    const style = {
        card: {
            width: 18+"rem",
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
       btnDeploy = <a href={deploy} className="btn btn-primary">Deploy Application</a>
    }

    if(git){
        btnGit = <a href={git} className="btn btn-primary">GitHub Repository</a>
    }

    if(video){
        btnVideo = <a href={video} className="btn btn-primary">Video of application</a>
    }

    return(
        <div className="card" style={style.card}>
            <img className="card-img-top" src={props.img} alt={props.name}></img>
            <div className="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p className="card-text">{props.text}</p>
                {btnDeploy}
                {btnGit}
                {btnVideo}
            </div>
        </div>
    )
}

export default Cards;