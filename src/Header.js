import React, { Component } from 'react';
import './Header.css';

export default class extends Component {
    render(){
        const { stick } = this.state;

        let className = 'header';
        if (stick) className += ' header--stick';

        return (
            <div className={className}>
                <ul className="header__links">
                    <a href="#a">Home</a>
                    <a href="#b">News</a>
                    <a href="#c">Gallery</a>
                    <a href="#d">Contact</a>
                </ul>
                <div className="header__logo">
                    <h1>EVIL FX</h1>
                    <h2>Props & Armor</h2>
                </div>
            </div>
        );
    }

    state = { stick: false };

    componentDidMount(){
        const { offsetHeight } = document.getElementById('carousel');
        this.stickHeight = offsetHeight + 100;
        document.addEventListener('scroll', this.scroll);
    };

    componentWillUnmount(){
        document.removeEventListener('scroll', this.scroll);
    };

    scroll = e => {
        let { stick } = this.state;
        const { pageYOffset } = window;
        if (pageYOffset >= this.stickHeight && !stick) {
            this.setState({ stick: true });
        } else if (pageYOffset < this.stickHeight && stick){
            this.setState({ stick: false });
        }
    }
}
    