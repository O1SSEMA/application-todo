import React from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';

function App() {
  return (
    <div className="App">
      <h1>ToDo Redux</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;