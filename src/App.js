import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component{
  constructor(props){
    super();
    console.log(props);
    props.add()
  }
  render(){
    return (
      <div className='container'>
        <h1>Acme</h1>
        <div className='well'>
          <ul>
            { this.props.products.map(product => <li>{ product.name }</li>) }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: ()=> dispatch({ type: 'ADD_PRODUCT', product: 'bear trap' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
