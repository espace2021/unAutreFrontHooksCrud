import React, {useState, useEffect,useCallback} from 'react'
import axios from 'axios'

import ArticlesCardsAff from './ArticlesCardsAff'

const FetchArticles = () => {
    
    const URL = "https://backend-ecommerce-2023.vercel.app/api/"

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
    <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}>
    {articles.map((article) => (
      <div  key={article._id}>
  <ArticlesCardsAff article={article}/> 
      </div>
  ))}
  </div>
  )
}

export default FetchArticles
