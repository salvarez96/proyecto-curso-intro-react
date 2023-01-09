import React from 'react';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import CreateTodoButton from './components/CreateTodoButton';
import Header from './components/Header';
import styled from 'styled-components';

const Main = styled.main`
  width: 80vw;
  max-width: 500px;
  margin: 50px auto 0;
  text-align: center;
`;

const todoList = [
  { 
    item: 'Una tarea',
    completed: false
  },
  { 
    item: 'Otra tarea',
    completed: false
  },
  { 
    item: 'Una tarea completada',
    completed: true
  },
  { 
    item: 'Otra tarea',
    completed: false
  },
  { 
    item: 'Una tarea completada',
    completed: true
  },
  { 
    item: 'Otra tarea',
    completed: false
  },
  { 
    item: 'Una tarea completada',
    completed: true
  },
  { 
    item: 'Otra tarea completada',
    completed: true
  },
];

function App() {
  return (
    <>
      <Header />
      <Main>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {todoList.map(item => (
            <TodoItem 
              todoTask={item.item}
              completed={item.completed}
              key={item.item}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </Main>
    </>
  );
}

export default App;
