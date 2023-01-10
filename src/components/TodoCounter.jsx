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

export default function TodoCounter({ completed, all }) {  
  return(
    <Div>
      <h3>Haz completado { completed } de { all } tareas</h3>
    </Div>
 );
}
