import React from 'react';
import { MDBMask, MDBIcon ,MDBView, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from "mdbreact";
const style_raya = { textDecoration: "line-through" };
/* eslint-disable import/first */
import ReactHtmlParser from 'react-html-parser';

const DetalleProducto = (props) => (
    <div>
        {
            props.data.length != 0 ? props.data.map((producto, index) => (
                <MDBCard className="my-1 px-1 pb-1">
                    <MDBCardBody>
                        <h2 className="h1-responsive font-weight-bold text-center my-5">
                            {producto.name}
                        </h2>
                        <MDBRow>
                            <MDBCol lg="5">
                                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                    <img
                                        className="img-fluid"
                                        src={producto.fullImage}
                                        alt=""
                                    />
                                </MDBView>
                            </MDBCol>
                            <MDBCol lg="5">
                                <a href="#!" className="green-text text-center">
                                    <h6 className="font-weight-bold mb-3">
                                        <MDBIcon icon="check-circle" className="pr-2" />
                                        {producto.shortDescription}
                                    </h6>
                                </a>
                                <p className="text-center w-responsive mx-auto mb-5">
                                    <b style={style_raya}>Precio Normal: {producto.prices.formattedListPrice}</b><br/>
                                    <b>Precio Oferta: {producto.prices.formattedOfferPrice}</b><br/>
                                    <b>Decuento Toral: {producto.prices.formattedDiscount}</b><br/>
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <hr/>
                        <MDBRow>
                            <MDBCol>
                                <h3 className="font-weight-bold mb-3 p-0">
                                    <strong>Descripción</strong>
                                </h3>
                                <p>
                                    {ReactHtmlParser( producto.longDescription )}
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
                ))
                :
                <MDBRow>
                    <MDBCol>
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Cargando...</span>
                        </div>
                    </MDBCol>
                </MDBRow>
        }
    </div>
);

export default DetalleProducto;