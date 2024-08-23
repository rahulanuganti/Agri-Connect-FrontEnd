import React, { Component } from 'react';
import './Working.css';

class Working extends Component {
    render() {
        return (
            <div className='main'>
                <h1 style={{marginLeft:"200px", marginTop:"50px" }}>How It Works</h1>
                <div className='use'>  
                    <WorkSection
                        icon="https://cdn-icons-png.flaticon.com/128/748/748137.png"
                        title="SignUp"
                        description="Sign up as a seller on agriconnect"
                    />
                    <WorkSection
                        icon="https://cdn-icons-png.flaticon.com/128/25/25228.png"
                        title="Set Price and Terms"
                        description="Set your prices and terms for delivery and payment"
                    />
                    <WorkSection
                        icon="https://cdn-icons-png.flaticon.com/128/10535/10535983.png"
                        title="Get Paid"
                        description="Receive payment directly from buyer"
                    />
                    <WorkSection
                        icon="https://cdn-icons-png.flaticon.com/128/1433/1433678.png"
                        title="Delivery"
                        description="Deliver your products to your home"
                    />
                </div>
            </div>
        );
    }
}

class WorkSection extends Component {
    render() {
        const { icon, title, description } = this.props;
        return (
            <div className='workSection'>
                <img style={{ maxHeight:"20px", maxWidth:"20px" }}src={icon} alt="Icon" /> 
                <h1 style={{ fontWeight:"bold", fontSize:"25px" }}>{title}</h1>
                <p style={{ color: 'green' }}>{description}</p>
            </div>
        );
    }
}

export default Working;
