import React from 'react';
import { BsArrowDown } from 'react-icons/bs';
import styled from 'styled-components';

const Div = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20%;

  & .arrow-icon {
    position: relative;
    left: 7px;
    width: 40px;
    height: 40px;
    margin-top: 50px;
    margin-bottom: 15px;
    
    @keyframes identifier {
      0% {transform: translateY(0px);}
      50% {transform: translateY(20px);}
      100% {transform: translateY(0px);}
    }
    
    animation-name: identifier;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.63, 0.24, 0.35, 0.77);
  }
`;

export const NewTaskText = () => {
  return (
    <Div>
      <h3>Agrega una tarea nueva</h3> 
      <BsArrowDown className='arrow-icon' />
    </Div>
  )
}
