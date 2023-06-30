import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArticleCrud = () => {
  const [articles, setArticles] = useState([]);
  const [newArticle, setNewArticle] = useState('');
  const [editArticleId, setEditArticleId] = useState(null);
  const [editArticleValue, setEditArticleValue] = useState('');

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

  const addArticle = async () => {
    try {
      const response = await axios.post('https://backend-ecommerce-2023.vercel.app/api/articles', {
        title: newArticle
      });
      setArticles([...articles, response.data]);
      setNewArticle('');
    } catch (error) {
      console.error('Error adding article:', error);
    }
  };

  const editArticle = (_id, articleValue) => {
    setEditArticleId(_id);
    setEditArticleValue(articleValue);
  };

  const updateArticle = async () => {
    try {
      await axios.put(`https://backend-ecommerce-2023.vercel.app/api/articles/${editArticleId}`, {
        designation: editArticleValue
      });
      setArticles(
        articles.map((article) => {
          if (article.id === editArticleId) {
            return { ...article, title: editArticleValue };
          }
          return article;
        })
      );
      setEditArticleId(null);
      setEditArticleValue('');
    } catch (error) {
      console.error('Error updating article:', error);
    }
  };

  const deleteArticle = async (_id) => {
    try {
      await axios.delete(`https://backend-ecommerce-2023.vercel.app/api/articles/${_id}`);
      setArticles(articles.filter((article) => article._id !== _id));
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newArticle}
        onChange={(e) => setNewArticle(e.target.value)}
        placeholder="Enter article"
      />
      <button onClick={addArticle}>Add</button>

      <ul>
        {articles.map((article) => (
          <li key={article._id}>
            {editArticleId === article._id ? (
              <>
                <input
                  type="text"
                  value={editArticleValue}
                  onChange={(e) => setEditArticleValue(e.target.value)}
                />
                <button onClick={updateArticle}>Update</button>
              </>
            ) : (
              <>
                {article.designation}
                <button onClick={() => editArticle(article._id, article.designation)}>Edit</button>
                <button onClick={() => deleteArticle(article._id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleCrud;
