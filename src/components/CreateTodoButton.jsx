import React from "react";
import { AiFillPlusCircle } from 'react-icons/ai';
import styled from "styled-components";

const Div = styled.div`
  margin-top: 20px;
  
  & svg {
    width: 50px;
    height: 50px;
    transition: transform 0.5s;

    &:hover {
      transform: rotate(90deg);
      color: var(--orange);
      cursor: pointer;
    }
  }
`;

export default function CreateTodoButton() {
  return(
    <Div>
      <AiFillPlusCircle />
    </Div>
 );
}
