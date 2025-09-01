import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from './store';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDesc, setNewDesc] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleTask(task.id));
  const handleEdit = () => {
    dispatch(editTask({ id: task.id, description: newDesc }));
    setIsEditing(false);
  };

  return (
    <div style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
      {isEditing ? (
        <>
          <input value={newDesc} onChange={(e) => setNewDesc(e.target.value)} />
          <button onClick={handleEdit}>Valider</button>
        </>
      ) : (
        <>
          <span>{task.description}</span>
          <button onClick={() => setIsEditing(true)}>Modifier</button>
        </>
      )}
      <button onClick={handleToggle}>{task.isDone ? 'Non fait' : 'Fait'}</button>
    </div>
  );
};

export default Task;