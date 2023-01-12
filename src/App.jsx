import React from 'react';
import TodoCounter from './components/TodoCounter';
import TodoFilter from './components/TodoFilter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import CreateTodoButton from './components/CreateTodoButton';
import styled from 'styled-components';
import { TodoGlobalContext } from './context/Provider';

// Estilos
const Main = styled.main`
  width: 80vw;
  max-width: 500px;
  margin: 30px auto 0;
  text-align: center;

  & h1 {
    margin-bottom: 20px;
  }
`;

// Ejemplo de TODOs
// const todoList = [
//   { task: 'Una tarea', completed: false},
//   { task: 'Otra tarea', completed: false},
//   { task: 'Una tarea completada', completed: true},
//   { task: 'Otra tarea más', completed: false},
//   { task: 'Una tarea completada de más', completed: true},
//   { task: 'Otra tarea :v', completed: false},
//   { task: 'Una tarea completada :v', completed: true},
//   { task: 'Otra tarea completada :v:v:v:v:', completed: true},
// ];

// Componente app
export default function App() {
  
  const {
    loading,
    error,
    todos,
    searchedTodos,
    markCompleteTask,
    deleteTask
  } = React.useContext(TodoGlobalContext);
  
  // Conjunto de todos los componentes utilizados en la aplicación
  return (
    <Main>
      <h1>TODO app</h1>
      <TodoCounter />
      <TodoFilter />
      <TodoSearch />
      <TodoList>
        {loading && <h3>Cargando tareas...</h3>}
        {error && <h3>Hubo un problema cargando tus tareas 😥</h3>}
        {
          todos.length === 0 && !loading
          ? <h3>Agrega una tarea nueva</h3> 
          : searchedTodos.length < 1 && !loading && todos.length < 1
          ? <h3>No tienes tareas con ese nombre 😔</h3> 
          : searchedTodos.map(item => (
            <TodoItem 
              todoTask={item.task}
              completed={item.completed}
              key={item.task}
              toComplete={() => markCompleteTask(item.task)}
              toDelete={() => deleteTask(item.task)}
            />
          ))
        }
      </TodoList>
      <CreateTodoButton />
    </Main>
  );
}
