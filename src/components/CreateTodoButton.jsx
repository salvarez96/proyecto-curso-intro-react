import React from "react";
import { AiFillPlusCircle } from 'react-icons/ai';
import styled from "styled-components";
import { TodoGlobalContext } from "../context/Provider";

const Div = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: max-content;
  position: relative;
  z-index: 1;
  
  & svg {
    width: 60px;
    height: 60px;
    transition: transform 0.4s;
  }

  @media (hover: hover) and (pointer: fine) {
    &.open-modal:hover svg {
      transform: rotate(90deg);
      color: var(--orange);
      cursor: pointer;
    }
  }

  &.close-modal svg {
    transform: rotate(135deg);
    color: red;
    cursor: pointer;
    
    &:hover {
      transform: rotate(135deg) scale(1.05);
      color: red;
      cursor: pointer;
    }
  }
`;

export default function CreateTodoButton() {

  const {modalOpen, setModalOpen} = React.useContext(TodoGlobalContext);

  return(
    <Div
      onClick={() => setModalOpen(!modalOpen)}
      className={modalOpen ? 'close-modal' : 'open-modal'}
    >
      <AiFillPlusCircle />
    </Div>
 );
}
