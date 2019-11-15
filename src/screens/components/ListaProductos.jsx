import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from "mdbreact";

const ListaProductos = (props) => (
    <MDBRow>
        {
            props.data.length > 0 ? props.data.map(
                (producto, index) => (
                    <MDBCol key={index}>
                        <MDBCard style={{ width: "18rem" }}>
                            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                            <MDBCardBody>
                                <MDBCardTitle>{index + 1} - {producto.title}</MDBCardTitle>
                                <MDBCardText>
                                    {producto.body}
                                </MDBCardText>
                                <MDBBtn href="#">Ir al Producto</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                )
            )
            : <b>Cargando ...</b>
        }
    </MDBRow>
);
/* (<div><pre>{
    JSON.stringify(props.data, null, 2) }</pre></div>); */

export default ListaProductos;