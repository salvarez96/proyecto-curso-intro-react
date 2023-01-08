import React from 'react';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import CreateTodoButton from './components/CreateTodoButton';

function App() {
  return (
    <>
      <h1>Hay alguien aquí con vida :v</h1>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        <TodoItem />
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
