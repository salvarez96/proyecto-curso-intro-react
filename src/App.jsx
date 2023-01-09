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

function App() {
  return (
    <>
      <Header />
      <Main>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          <TodoItem />
        </TodoList>
        <CreateTodoButton />
      </Main>
    </>
  );
}

export default App;
