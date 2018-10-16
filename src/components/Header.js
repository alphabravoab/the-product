import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import './Header.css'
import Logo from '../images/logo.png'
class MakeConferenceForm extends PureComponent {


  render() {
    return (<div className="Header">
    <div>
      <h1>The product</h1>
      A product page in react. 
      </div>
      
      <div className="logoBorder">
        <img className="HeaderPic" src={Logo} alt-te="just the react logo" /> 
        </div>
    </div>)
  }
}

export default connect()(MakeConferenceForm)