import React, { Component } from 'react';
import ProductoLayout from '../components/ProductoLayout';
import ProductosService from '../../services/ProductosService';
import DetalleProducto from '../components/DetalleProducto';
import {MDBIcon, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from "mdbreact";



export default class ProductoContainer extends React.Component {
  state = {
    data: [],
  }
  
  constructor(props){
      super(props);
  }

  componentDidMount = () => {
    const { match: { params } } = this.props;
    console.log(params);
    this.getProductInfo(params);
  }

  getProductInfo = ({id}) => {
    ProductosService.getById(id)
        .then((producto)=>{
            console.log(producto);
            this.setState({
                data:[producto],
            });
        })
        .catch((error)=>{
            console.log(error);
        });
  }


  render() {
    return (
      <ProductoLayout>
        <MDBRow>
            <MDBCol>
                <MDBBtn color="primary" size="sm" href="/">
                    <MDBIcon icon="arrow-left" className="mr-1" /> Volver
                </MDBBtn>
            </MDBCol>
        </MDBRow>

        <h1> Producto </h1>

        <DetalleProducto 
          data={this.state.data}
        />
        
      </ProductoLayout>
    );
  }
}