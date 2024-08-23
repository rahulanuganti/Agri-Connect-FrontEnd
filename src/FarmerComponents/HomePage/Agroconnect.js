import React, { Component } from 'react';
import myimg  from  '../Images/picture farmer  6f93e1d8-b9cd-4471-aab0-8e295858b45a.png'
import myimg2 from '../Images/picture that de 8aa2803c-527a-4276-a183-3271d6592af5.png'
import myimg3 from '../Images/8-YDMzyIBnPlV5dPG.png'
import './Agroconnect.css'
class AgriConnect extends Component {
    render() {
        return (
            <div className="agri-connect-container">
                <div className="agri-connect-info">
                    <h1>Why AgriConnect?</h1>
                    <p>AgriConnect is a digital marketplace that allows farmers to sell their products to buyers.</p>
                    <p style={{marginBottom:"50px" }}>With AgriConnect, you can set your price, set your terms, and sell directly to customers. You can also deliver your products directly to buyers' doors.</p>
                </div>
                <div className="image-container" >
                    <Section
                        src={myimg}
                        alt="Image 1"
                        height="250px"
                        width="380px"
                        heading="Sell directly to Buyers"
                        description="Set your price, set your terms and sell directly to consumers."
                    />

                    <Section
                        src={myimg2}
                        alt="Image 2"
                        height="250px"
                        width="350px"
                        heading="Deliver directly to Buyers"
                        description="Deliver your products directly to the buyer's door."
                        // style={{ marginleft: '100px' }}
                    />
                    <Section
                        src={myimg3}
                        alt="Image 3"
                        height="250px"
                        width="350px"
                        heading="Sell to local stores"
                        description="Sell to local stores and restaurants through AgriConnect."
                        // style={{ marginRight: '20px'}}
                    />
                </div>
            </div>
        );
    }
}

class Section extends Component {
    render() {
        const { src, alt, height, width, heading, description } = this.props;
        return (
            <div className="div1" >
                <img style={{  borderRadius: '20px' }} src={src} alt={alt} height={height} width={width} />
                <h3>{heading}</h3>
                <p style={{ color: 'green' }}>{description}</p>
            </div>
        );
    }
}

export default AgriConnect;
