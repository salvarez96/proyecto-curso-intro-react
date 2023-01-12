import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

export const TodoGlobalContext = React.createContext();

export const Provider = ({ children }) => {

  // Lógica de localStorage
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);  
    
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

  const markCompleteTask = key => {
    const tasks = todos.map(item => {
      if(item.task === key) {
        item.completed = !item.completed;
      }
      return item;
    });
    saveTodos(tasks);
  }
  
  const deleteTask = key => {
    const tasks = todos.splice(todos.findIndex(item => item.task === key), 1);
    saveTodos(tasks);
  }

  return (
    <TodoGlobalContext.Provider value={{
      todos,
      loading,
      error,
      searchValue,
      setSearchValue,
      searchedTodos,
      filterValue,
      setFilterValue,
      markCompleteTask,
      deleteTask
    }}>
      { children }
    </TodoGlobalContext.Provider>
  )
}
