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
  
  // Lógica usada en TodoSearch
  const [searchValue, setSearchValue] = React.useState('');
  
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
  const [filterValue, setFilterValue] = React.useState('Todos');
  
  switch (filterValue) {
    case 'Completados':
      searchedTodos = searchedTodos.filter(item => item.completed);
      break;
    case 'Pendientes':
      searchedTodos = searchedTodos.filter(item => !item.completed);
      break;
  }
  
  // Lógica utilizada en TodoCounter
  const onlyCompletedTasks = todos.filter(item => {
    return item.completed
  });
  
  // Lógica usada en TodoItem
  const markCompleteTodo = (key) => {
    const tasks = todos.map(item => {
      if(item.task === key) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodos(tasks);
  }

  const deleteTask = (key) => {
    const tasks = todos.splice(todos.findIndex(item => item.task === key), 1);
    setTodos(tasks);
  }

  return (
    <>
      <Main>
        <h1>TODO app</h1>
        <TodoCounter
          completed={onlyCompletedTasks.length}
          all={todos.length}
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
              toComplete={() => markCompleteTodo(item.task)}
              toDelete={() => deleteTask(item.task)}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </Main>
    </>
  );
}

export default App;
