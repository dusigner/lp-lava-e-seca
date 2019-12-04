import React, { Component } from 'react'

class Video extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', this.onWindowScroll);
    }
     
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onWindowScroll);
    }

    onWindowScroll = () => {

        const vid = document.getElementById("myVideo");

        function playVid() {
            vid.play();
        }

        function pauseVid() {
            vid.pause();
        }

        const observer = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true)
                vid.play();
            else
                vid.pause();
            
        }, { threshold: [0.5] });
        
        observer.observe(document.querySelector("#myVideo"));
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <video id="myVideo" className="video" width="100%" height="100%" muted>
                <source src={this.props.setSrc} type="video/mp4"></source>
            </video>
        )
    }
}
export default Video;
