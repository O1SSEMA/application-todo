import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const tasks = useSelector(state => state.tasks);
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.isDone;
    if (filter === 'not_done') return !task.isDone;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => setFilter('all')}>Tous</button>
        <button onClick={() => setFilter('done')}>Fait</button>
        <button onClick={() => setFilter('not_done')}>Pas fait</button>
      </div>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;