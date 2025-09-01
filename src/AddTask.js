import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './store';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (description.trim() === '') return;
    dispatch(addTask({ id: Date.now(), description, isDone: false }));
    setDescription('');
  };

  return (
    <div>
      <input 
        type="text" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Nouvelle tâche"
      />
      <button onClick={handleAdd}>Ajouter</button>
    </div>
  );
};

export default AddTask;