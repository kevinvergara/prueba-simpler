import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from "mdbreact";
const style_raya = {textDecoration: "line-through"};
const ListaProductos = (props) => (
    <MDBRow>
        {
            props.data.length > 0 ? props.data.map(
                (producto, index) => (
                    <MDBCol key={index}>
                        <MDBCard style={{ width: "18rem" }}>
                            <MDBCardImage className="img-fluid" src={producto.fullImage} waves />
                            <MDBCardBody>
                                <MDBCardTitle>{producto.shortDescription}</MDBCardTitle>
                                <MDBCardText>
                                    <b style={style_raya}>Precio: {producto.prices.formattedListPrice} </b> <br/>
                                    <b>Precio Oferta: {producto.prices.formattedOfferPrice}</b> <br/>
                                    <br/>
                                    {producto.name}
                                    <br/>
                                </MDBCardText>
                                <MDBBtn href={"/producto/"+producto.uniqueID} >Ir al Producto</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                )
            )
            
            :   
            <MDBCol>
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Cargando...</span>
                </div>
            </MDBCol>
        }
    </MDBRow>
);
/* (<div><pre>{
    JSON.stringify(props.data, null, 2) }</pre></div>); */

export default ListaProductos;