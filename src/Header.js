import React, { Component } from 'react';
import './Header.css';

export default class extends Component {
    render(){
        return (
            <div className="header">
                <div className="header__logo">
                    <h1>EVIL FX</h1>

                </div>
                <ul className="header__links">
                    <a href="#">Home</a>
                    <a href="#">News</a>
                    <a href="#">Gallery</a>
                    <a href="#">Contact</a>
                </ul>
            </div>
        );
    }
}
    