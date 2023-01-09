import React from 'react';
import TodoCounter from './components/TodoCounter';
import TodoFilter from './components/TodoFilter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import CreateTodoButton from './components/CreateTodoButton';
import styled from 'styled-components';

const Main = styled.main`
  width: 80vw;
  max-width: 500px;
  margin: 30px auto 0;
  text-align: center;

  & h1 {
    margin-bottom: 20px;
  }
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
    item: 'Otra tarea más',
    completed: false
  },
  { 
    item: 'Una tarea completada de más',
    completed: true
  },
  { 
    item: 'Otra tarea :v',
    completed: false
  },
  { 
    item: 'Una tarea completada :v',
    completed: true
  },
  { 
    item: 'Otra tarea completada :v:v:v:v:',
    completed: true
  },
];

function App() {
  return (
    <>
      <Main>
        <h1>TODO app</h1>
        <TodoCounter />
        <TodoFilter />
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
