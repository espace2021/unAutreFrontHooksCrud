import React, {useState, useEffect,useCallback} from 'react'
import axios from 'axios'

import ProductList from './ProductList';
import CreateProduct from './CreateProduct';
import EditProduct from './EditProduct';

const ProductApp = () => {
  const [products, setProducts] = useState([]);
  const [scategories, setScategories] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const URL = "http://localhost:3001/api/"

  
    const fetchArticles = useCallback(async () => {
        try {
          const response = await axios.get(URL+"articles"); 
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching articles:', error);
        }
      }, []);

      const fetchScategories= useCallback(async () => {
        try {
          const response = await axios.get(URL+"scategories"); 
          setScategories(response.data);
        } catch (error) {
          console.error('Error fetching articles:', error);
        }
      }, []);
    
      useEffect(() => {
        fetchArticles();
        fetchScategories();
      }, [fetchArticles,fetchScategories]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter((product) => product._id !== productId));
  };

  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct._id ? updatedProduct : product
      )
    );
    setEditingProduct(null);
  };

  return (
    <div>
       
      {editingProduct ? (
        <EditProduct
          scategories={scategories}
          product={editingProduct}
          updateProduct={updateProduct}
        />
      ) : (
        <CreateProduct addProduct={addProduct} scategories={scategories} />
      )}

    <ProductList
        products={products}
        deleteProduct={deleteProduct}
        setEditingProduct={setEditingProduct}
      />

    </div>
  );
};

export default ProductApp;
