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
    padding: 15px 10px;
  }
`;

export default function TodoCounter({ array }) {
  
  const completedTodos = array.filter(item => item.completed).length;

  const [completed, setCompleted] = React.useState(completedTodos);
  const [all, setAll] = React.useState(array.length);

  const completedTodosFunc = (arr) => {
    setAll(arr.length);
    setCompleted(
      arr.filter(item => item.completed).length
    );
  }

  return(
    <Div
      onChange={() => completedTodosFunc(array)}
    >
      <h3>Haz completado { completed } de { all } tareas</h3>
    </Div>
 );
}
