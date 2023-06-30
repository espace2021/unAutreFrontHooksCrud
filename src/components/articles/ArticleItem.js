import React from 'react';

const ArticleItem = ({ article, onDelete }) => {
  const handleDelete = () => {
    onDelete(article._id);
  };

  return (
    <div>
      {article.marque}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ArticleItem;
