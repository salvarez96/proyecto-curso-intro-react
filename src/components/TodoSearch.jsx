import React from "react";
import styled from "styled-components";
import { TodoGlobalContext } from "../context/Provider";

export const InputText = styled.input`
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

  &[disabled] {
    opacity: 0.6;
  }
`;

export default function TodoSearch() {

  const {todos, searchValue, setSearchValue} = React.useContext(TodoGlobalContext);

  const searchValueChange = e => {
    setSearchValue(e.target.value);
  }

  return(
    <InputText 
      type='text' 
      placeholder={todos.length < 1 ? "Busca una tarea. . . cuando tengas una" : "Busca una tarea . . ."}
      value={searchValue}
      onChange={searchValueChange}
      disabled={todos.length < 1}
    ></InputText>
 );
}
