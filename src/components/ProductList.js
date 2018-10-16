import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import ProductItem from './ProductItem'
import './ProductList.css'
class ProductList extends PureComponent {


  render() {
    return (<div className="ProductList">

      <ProductItem price="cheap" description="just worthless" />
      <ProductItem price="medium" description="Basic version" />
      <ProductItem price="Way too expensive" description="Doesn't add anything" />
      
    </div>)
  }
}

export default connect()(ProductList)