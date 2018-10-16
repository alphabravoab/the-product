import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import './ProductItem.css'
import Logo from '../images/logo.png'


class ProductItem extends PureComponent {

  submitButton = (event) => {
   console.log('description', this.props.description)
    }
  render() {
 
    return (<div className="ProductItem">
     <img className="ProductItempic" src={Logo} alt-te="just the react logo" /> 
        Description: {this.props.description}<br />
        Price: {this.props.price}<div>

         <button className="buyButton" onClick={ this.submitButton }>Buy now</button></div>
    </div>)
  }
}

export default connect()(ProductItem)