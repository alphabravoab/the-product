import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import PU1 from '../images/PU1.jpg'
import PU2 from '../images/PU2.jpg'
import PU3 from '../images/PU3.jpg'
import PU4 from '../images/PU4.jpg'
import './ProductUse.css'

class ProductUse extends PureComponent {


  render() {
    return (<div className="ProductUse"><div className="descr">Product in Use:<br />
    It is always import to show how happy people are or how cool you can be with the product.</div>
    
      <img className="usePic" src={PU1} alt-te="just the react logo" />
      <img className="usePic" src={PU2} alt-te="just the react logo" />
      <img className="usePic" src={PU3} alt-te="just the react logo" />
      <img className="usePic" src={PU4} alt-te="just the react logo" /> 
      
    </div>)
  }
}

export default connect()(ProductUse)