import React, { Component } from 'react';
import './Header.css';

export default class extends Component {
    render(){
        const { stick, open } = this.state;

        let className = 'header';
        if (stick) className += ' header--stick';
        if (open) className += ' header--open';

        return (
            <div className={className}>
                <div className="header__logo">
                    <h1>EVIL FX</h1>
                    <h2>PROPS & ARMOR</h2>
                </div>
                <button className="header__button" onClick={this.toggle}>Menu</button>
                <ul className="header__links">
                    <a href="#a">Home</a>
                    <a href="#b">News</a>
                    <a href="#c">Gallery</a>
                    <a href="#d">Contact</a>
                </ul>


                
            </div>
        );
    }

    state = { stick: false, open: false };

    // componentDidMount(){
    //     const { offsetHeight } = document.getElementById('carousel');
    //     this.stickHeight = offsetHeight;
    //     document.addEventListener('scroll', this.scroll);
    // };

    // componentWillUnmount(){
    //     //document.removeEventListener('scroll', this.scroll);
    // };

    componentDidUpdate(prevProps, prevState){
        if (this.state.open && !prevState.open){
            document.addEventListener('click', this.toggle);
        } else if (!this.state.open && prevState.open) {
            document.removeEventListener('click', this.toggle);
        }
    };

    // scroll = e => {
    //     let { stick } = this.state;
    //     const { pageYOffset } = window;
    //     if (pageYOffset >= this.stickHeight && !stick) {
    //         this.setState({ stick: true });
    //     } else if (pageYOffset < this.stickHeight && stick){
    //         this.setState({ stick: false });
    //     }
    // };

    toggle = e => {
        const { open } = this.state;
        this.setState({ open: !open });
    };
}
    