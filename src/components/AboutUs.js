import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import './AboutUs.css'
import stock1 from '../images/stock.jpg'
import stock2 from '../images/stock2.jpg'
import stock3 from '../images/stock3.jpg'
import stock4 from '../images/stock4.jpg'

class AboutUs extends PureComponent {


  render() {
    return (<div className="AboutUs">
    <div>
    About us:
    </div>

Here we tell you who we are in the hope that this doesn’t just feel like a product but that you are 
buying into us. These foto’s might be us or they might be of us or we might have used stockphoto’s
to make our team look bigger.
    
      
      <div className="thisIsUs">
      <div className="aboutPerson">
        <img className="aboutPic" src={stock1} alt-te="just the react logo" /> 
        Name: Someone<br />
        Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus sapien nec vulputate venenatis. Praesent pharetra auctor erat ac malesuada. Nunc dapibus vitae metus lacinia dapibus. Aliquam commodo dignissim tincidunt. Quisque id eleifend tortor. Nunc laoreet placerat sapien, ac tempor. 
        
    </div>
    <div className="aboutPerson">
        <img className="aboutPic"src={stock2} alt-te="just the react logo" /> 
        Name: Someone<br />
        Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus sapien nec vulputate venenatis. Praesent pharetra auctor erat ac malesuada. Nunc dapibus vitae metus lacinia dapibus. Aliquam commodo dignissim tincidunt. Quisque id eleifend tortor. Nunc laoreet placerat sapien, ac tempor.
        </div>
    <div className="aboutPerson">
        <img className="aboutPic"src={stock4} alt-te="just the react logo" /> 
        Name: Someone<br />
        Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus sapien nec vulputate venenatis. Praesent pharetra auctor erat ac malesuada. Nunc dapibus vitae metus lacinia dapibus. Aliquam commodo dignissim tincidunt. Quisque id eleifend tortor. Nunc laoreet placerat sapien, ac tempor.
        </div>
    <div className="aboutPerson">
        <img className="aboutPic" src={stock3} alt-te="just the react logo" /> 
        Name: Someone<br />
        Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus sapien nec vulputate venenatis. Praesent pharetra auctor erat ac malesuada. Nunc dapibus vitae metus lacinia dapibus. Aliquam commodo dignissim tincidunt. Quisque id eleifend tortor. Nunc laoreet placerat sapien, ac tempor.
        </div>
        </div>
    </div>)
  }
}

export default connect()(AboutUs)