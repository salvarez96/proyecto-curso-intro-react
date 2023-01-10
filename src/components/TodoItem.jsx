import React from "react";
import styled from "styled-components";
import { AiOutlineCheck, AiOutlineCloseCircle } from 'react-icons/ai';

const Completed = styled.div`
  & .completed {
    text-decoration: line-through;
    background-color: var(--very-dark-purple);
    border-color: var(--orange);
    
    & p {
      opacity: 0.7;
    }

    & .checkMark {
      color: green;
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        border-color: var(--pastel-blue);
        background-color: var(--purple);
  
        & .checkMark {
          color: red;
        }
      }
    }
  }
`;

const Div = styled.div`
  width: 100%;
  text-align: start;
  min-height: 50px;
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  align-items: center;
  justify-items: center;
  padding: 0 calc(8rem / 16);
  border: 1px solid var(--pastel-blue);
  box-shadow: 0 0 4px 0 var(--pastel-blue);
  margin-bottom: 15px;

  & p {
    width: 100%;
    padding: 12px calc(8rem / 16);
  }

  & .icon, .text {
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
  }

  & .text {
    justify-content: flex-start;
  }

  & svg {
    width: 24px;
    height: 24px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: var(--pastel-blue);
      border-color: var(--orange);
      cursor: pointer;
      opacity: 0.8;
  
      & .checkMark {
        color: yellow;
      }
    }
  
    & .close:hover {
      color: red;
      transform: scale(1.1);
      transition: transform 0.2s;
    }
  }
`;

export default function TodoItem({ todoTask, completed, toComplete, toDelete }) {
  return(
    <Completed>
      <Div 
        className={ completed ? 'completed' : ''}
        onClick={toComplete}
      >
        <div className="icon checkMark">
          <AiOutlineCheck />
        </div>
        <div className="text">
          <p>{ todoTask }</p>
        </div>
        <div 
          className="icon close"
          onClick={toDelete}
        >
          <AiOutlineCloseCircle />
        </div>
      </Div>
    </Completed>
 );
}
