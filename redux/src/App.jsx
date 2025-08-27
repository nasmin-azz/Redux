import React from 'react';
import './App.css';
import TodoAdderForm from './components/TodoAdderForm';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div>
      <TodoAdderForm/>
      <TodoList/>
    </div>
  );
};

export default App; 