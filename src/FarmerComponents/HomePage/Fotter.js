import React from 'react';
import "./Fotter.css"

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
        <div className="container">
          <div className="header-content">
            <div className='SocialIcons'>
            <img src="https://cdn-icons-png.flaticon.com/128/20/20837.png" alt="Logo" style={{width:"30px", backgroundColor:"rgb(68, 224, 68)",borderRadius:"100%",marginRight: "30px"}} /> 
            <img src="https://cdn-icons-png.flaticon.com/128/733/733622.png" alt="Logo" style={{width:"30px", backgroundColor:"rgb(68, 224, 68)",borderRadius:"100%",marginRight: "30px"}} />  
            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png" alt="Logo" style={{width:"30px", backgroundColor:"rgb(68, 224, 68)",borderRadius:"100%",marginRight: "30px"}} />   
            <img src="https://cdn-icons-png.flaticon.com/128/733/733635.png" alt="Logo" style={{width:"30px", backgroundColor:"rgb(68, 224, 68)",borderRadius:"100%",marginRight: "30px"}} />    
            </div>
            
            <nav>
              <ul >
                <li><a href="#" style={{color:"white"}}>Home</a></li>
                <li><a href="#" style={{color:"white"}}>Menu</a></li>
                <li><a href="#" style={{color:"white"}}>Story</a></li>
                <li><a href="#" style={{color:"white"}}>Detox</a></li>
                <li><a href="#" style={{color:"white"}}>Locations</a></li>
                <li><a href="#" style={{color:"white"}}>Contact</a></li>
                <li><a href="#" style={{color:"white"}}>Blog</a></li>
                <li><a href="#" style={{color:"white"}}>Catering</a></li>
                <li><a href="#" style={{color:"white"}}>Delivery</a></li>
              </ul>
            </nav>
          </div>
        </div >
        <div className='fo' style={{width:"100%"}}>
            <p className="text-muted">HEALTHY FAST-CASUAL FOOD, CRAFTED WITH ❤️ IN MINNEAPOLIS</p>
          <p className="text-muted">© AgriConnect   & PRESS ALL RIGHTS RESERVED</p>
        </div>
          
        </div>
      </footer>
    );
  }
}

export default Footer;
