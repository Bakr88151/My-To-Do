import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles/Todo.css';

const App = () => {
  // Retrieve todos from local storage on component mount
  const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState(savedTodos);

  // Update local storage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    // Add new todo to the beginning of the array
    setTodos([todo, ...todos]);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      {/* Reverse the order of todos when rendering TodoList */}
      <TodoList todos={todos.reverse()} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
