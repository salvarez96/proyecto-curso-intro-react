import React from "react";
import styled from "styled-components";

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

export default function TodoCounter({ array, loading }) {  

  const onlyCompletedTasks = array.filter(item => {
    return item.completed
  });

  return(
    <Div>
      <h3>
        {
          loading ? 'Un momento por favor' : (
            array.length === 0
            ? 'No tienes tareas'
            : (onlyCompletedTasks.length === array.length) > 0 
            ? 'Haz completado todas las tareas 😄'
            : `Haz completado ${ onlyCompletedTasks.length } de ${ array.length } ${array.length === 1 ? 'tarea' : 'tareas'}`
          )
        }
      </h3>
    </Div>
 );
}
