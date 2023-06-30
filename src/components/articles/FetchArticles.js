import React, {useState, useEffect,useCallback} from 'react'
import axios from 'axios'

import ProductApp from './ProductApp'

const FetchArticles = () => {
    
    const URL = "http://localhost:3001/api/"

    const [articles, setArticles] = useState([]);

    const fetchArticles = useCallback(async () => {
        try {
          const response = await axios.get(URL+"articles"); 
          setArticles(response.data);
        } catch (error) {
          console.error('Error fetching articles:', error);
        }
      }, []);
    
      useEffect(() => {
        fetchArticles();
      }, [fetchArticles]);
    
  return (
  <ProductApp articles={articles}/> 
  )
}

export default FetchArticles
