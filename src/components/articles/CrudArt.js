import React, { useState } from 'react';
import ArticleList from './ArticleList';
import AddArticle from './AddArticle';

const CrudArt = () => {
  const [articles, setArticles] = useState([]);

  const addArticle = (article) => {
    setArticles([...articles, article]);
  };

  return (
    <div>
      <h1>Article Management</h1>
      <AddArticle addArticle={addArticle}/>
      <ArticleList articles={articles} />
</div>
  )

}
export default CrudArt;