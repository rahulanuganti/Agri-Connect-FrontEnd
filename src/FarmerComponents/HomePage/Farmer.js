import React, { Component } from 'react';
import './Farmer.css'; 
import myimg4 from '../Images/8-epOb1ugGfX4yjUC.png'

class Farmer extends Component {
    render() {
        return (
            <div className="text-wrapper">
                <div className="image-container">
                    <img src={myimg4} alt="Farmer" style={{ height:"300px" }} />
                </div>
                <div className="text-content">
                    <h1>Ready to take your farm to the next level?</h1>
                    <p style={{ color: 'green' }}>write join Agriconnect today and start selling your products directly to customers</p>
                    <br/>
                    <br/>
                    <a href="#" className="lastbutton-green" >Sign Up</a>
                </div>
            </div>
        );
    }
}

export default Farmer;
