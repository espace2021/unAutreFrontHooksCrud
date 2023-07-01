import React from 'react';

const ProductList = ({ products ,deleteProduct, setEditingProduct }) => {

    const handleEditClick = (product) => { 
        setEditingProduct(product);
         };
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product,index) => (
        <div key={index}>
          {product.designation}
           - {product.marque}
          <button onClick={() => handleEditClick(product)}>Edit</button>
          <button onClick={() => deleteProduct(product._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
