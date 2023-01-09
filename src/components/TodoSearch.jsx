import React from "react";
import styled from "styled-components";

const InputText = styled.input`
  width: 100%;
  min-height: 55px;
  padding: 0 15px;
  border: 2px double var(--purple);
  background-color: var(--very-dark-purple);
  font-family: inherit;
  color: white;
  font-size: calc(17rem / 16);

  &:focus-visible {
    outline: none;
    border-color: var(--orange);
  }

`;

export default function TodoSearch() {
  return(
    <>
      <InputText type='text' placeholder="Busca una tarea..."></InputText>
    </>
 );
}
