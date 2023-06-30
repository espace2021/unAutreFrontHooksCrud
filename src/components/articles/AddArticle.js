import React, { useState } from 'react';
import axios from 'axios';

const AddArticle = ({ onAdd }) => {
  const [designation, setDesignation] = useState('');
  const [marque, setMarque] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://backend-ecommerce-2023.vercel.app/api/articles', {
        designation,
        marque
      });
      onAdd(response.data);
      setDesignation('');
      setMarque('');
    } catch (error) {
      console.error('Error adding article:', error);
    }
  };

  return (
    <div>
      <h2>Add Article</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          placeholder="Enter designation"
          required
        />
        <textarea
          value={marque}
          onChange={(e) => setMarque(e.target.value)}
          placeholder="Enter marque"
          required
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddArticle;
