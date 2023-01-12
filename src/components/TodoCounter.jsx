import React from "react";
import styled from "styled-components";
import { TodoGlobalContext } from "../context/Provider";

const Div = styled.div`
  background-color: var(--dark-purple);
  min-height: 50px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: grid;
  place-content: center;

  & h3 {
    padding: 20px 10px;
  }
`;

export default function TodoCounter() {

  const {todos, loading} = React.useContext(TodoGlobalContext);

  const onlyCompletedTasks = todos.filter(item => {
    return item.completed
  });

  return(
    <Div>
      <h3>
        {
          loading ? 'Un momento por favor' : (
            todos.length === 0
            ? 'No tienes tareas'
            : (onlyCompletedTasks.length === todos.length) > 0 
            ? 'Haz completado todas las tareas 😄'
            : `Haz completado ${ onlyCompletedTasks.length } de ${ todos.length } ${todos.length === 1 ? 'tarea' : 'tareas'}`
          )
        }
      </h3>
    </Div>
 );
}
