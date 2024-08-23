import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
    render() {
        return (
            <div className="start">
                <h1 className="wel">Welcome to AgriConnect</h1>
                <p>The digital marketplace for the agriculture industry</p>
                <a href="#" className="button button-green side">I'm a Farmer</a>
                <a href="#" className="button button-grey">I'm a Buyer</a>
            </div>
        );
    }
}

export default Hero;
