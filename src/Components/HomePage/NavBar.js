import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="head" style={{ display: 'inline-flex' }}>
    
                <div className="left">
                    <a href="#" className="logo">AgroConnect</a>
                </div>
                <div className="right">
                    
                    <a href="#" className="space">Home</a>
                  
                    <a href="#" className="space">Marketplace</a>
                   
                    <a href="#" className="space">Services</a>
                    
                    <a href="#" className="space">Resources</a>
                  
                    <a href="#" className="space">Community</a>

                    <a href="#" className="button button-greenbutton">Sign Up</a>
                    <a href="#" className="button button-greybutton">Log In</a>
                </div>
            </div>
        );
    }
}

export default NavBar;
