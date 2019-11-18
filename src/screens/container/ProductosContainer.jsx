import React, { Component } from 'react';
import ProductoLayout from '../components/ProductoLayout';
import ListaProductos from '../components/ListaProductos';
import ProductosService from '../../services/ProductosService';


export default class ProductosContainer extends Component {
  state = {
    data: [],
  }
  
  componentDidMount = () => {
    this.getAllProducts();  
  }

  getAllProducts = () => {
    ProductosService.getAll()
    .then( productos => {
        this.setState({
          data:productos,
        });
    })
    .catch(
      err => console.log("Ocurrió un error",err)
    )
  } 

  render() {
    return (
      <ProductoLayout>
        <h1> Listado de productos </h1>

        <ListaProductos 
          data={this.state.data}
        />
        
      </ProductoLayout>
    );
  }
}