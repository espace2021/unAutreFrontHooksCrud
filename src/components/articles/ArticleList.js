import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleItem from './ArticleItem';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('https://backend-ecommerce-2023.vercel.app/api/articles');
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const deleteArticle = async (articleId) => {
    try {
      await axios.delete(`https://backend-ecommerce-2023.vercel.app/api/articles/${articleId}`);
      setArticles(articles.filter((article) => article._id !== articleId));
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  return (
    <div>
      <h1>List of Articles</h1>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} onDelete={deleteArticle} />
      ))}
    </div>
  );
};

export default ArticleList;
