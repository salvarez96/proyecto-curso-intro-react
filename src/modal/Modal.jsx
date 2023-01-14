import React from 'react'
import styled from 'styled-components';
import { TodoGlobalContext } from '../context/Provider';
import { InputText } from '../components/TodoSearch';


const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
`;

const Div = styled.div`
  width: 80%;
  max-width: 400px;
  min-height: 200px;
  position: relative;
  top: 350px;
  margin: 0 auto;
  background-color: var(--purple);
  border-radius: 10px;
  padding: 20px 15px;
  text-align: center;

  & input[type='text'] {
    margin: 20px 0;
    border-radius: 10px;
  }

  & .add-button {
    padding: calc(10rem/16) 22px; 
    font-family: inherit;
    font-size: calc(15rem / 16);
    border-radius: 10px;
    border: 1px solid var(--orange);
    background-color: var(--dark-purple);
    color: white;

    &:hover {
      cursor: pointer;
      background-color: var(--orange);
      color: black;
    }
  }
`;

export default function Modal() {

  const {searchedTodos} = React.useContext(TodoGlobalContext);

  return (
    <>
      <Section>
        <Div>
          <h3>Agrega una tarea nueva</h3>
          <InputText
            type='text'
            placeholder='Regar las maticas...'
          />
          <button type='button' className='add-button'>Agregar</button>
        </Div>
      </Section>
    </>
  )
}
