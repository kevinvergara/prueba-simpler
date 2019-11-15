import React from 'react';

const ProductoLayout = (props) => (
  <section className="movie-layout">
    <div className="container">
      {props.children}
    </div>
  </section>
);

export default ProductoLayout;