import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const ProductList = ({ products ,deleteProduct, setEditingProduct }) => {
    const handleEditClick = (product) => {
        setEditingProduct(product);
        
      };
  return (
    <div>
      <h2>Product List</h2>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Référence</th>
          <th>Désignation</th>
          <th>Marque</th>
          <th>Quantité Stock</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {products.map((product) => (
        <tr key={product._id}>
          <td><img src= {product.imageart} width={100} height={100}/></td>
        <td>{product.reference}</td>
          <td>{product.designation}</td>
          <td> {product.marque}</td>
          <td>{product.qtestock}</td>
          <td><Button variant="primary"  onClick={() => handleEditClick(product)}>Edit</Button>
          <Button variant="danger" onClick={() => deleteProduct(product._id)}>Delete</Button></td>
        
        </tr>
      ))}
      </tbody>
      </Table>
    </div>
  );
};

export default ProductList;