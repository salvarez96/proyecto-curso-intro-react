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
    task: 'Una tarea',
    completed: false
  },
  { 
    task: 'Otra tarea',
    completed: false
  },
  { 
    task: 'Una tarea completada',
    completed: true
  },
  { 
    task: 'Otra tarea más',
    completed: false
  },
  { 
    task: 'Una tarea completada de más',
    completed: true
  },
  { 
    task: 'Otra tarea :v',
    completed: false
  },
  { 
    task: 'Una tarea completada :v',
    completed: true
  },
  { 
    task: 'Otra tarea completada :v:v:v:v:',
    completed: true
  },
];

function App() {

  const [todos, setTodos] = React.useState(todoList);
  const [searchValue, setSearchValue] = React.useState('');
  const [filterValue, setFilterValue] = React.useState('Todos');
  
  // Lógica usada en TodoSearch
  let searchedTodos = [];
  
  if(!searchValue > 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.task.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  
  // Lógica utilizada en TodoFilter
  switch (filterValue) {
    case 'Completados':
      searchedTodos = searchedTodos.filter(item => item.completed);
      break;
    case 'Pendientes':
      searchedTodos = searchedTodos.filter(item => !item.completed);
      break;
  }

  return (
    <>
      <Main>
        <h1>TODO app</h1>
        <TodoCounter
          array={todos}
        />
        <TodoFilter
          filterValue={setFilterValue}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoList>
          {searchedTodos.map(item => (
            <TodoItem 
              todoTask={item.task}
              completed={item.completed}
              key={item.task}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </Main>
    </>
  );
}

export default App;
