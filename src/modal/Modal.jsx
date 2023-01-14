import React from 'react'
import styled from 'styled-components';
import { TodoGlobalContext } from '../context/Provider';
import { InputText } from '../components/TodoSearch';
import { v4 as uuidv4 } from 'uuid';


const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  transition: all 1s;
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
  transform: scale(1);

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

  const {modalOpen, todos, saveTodos} = React.useContext(TodoGlobalContext);

  const [inputValue, setInputValue] = React.useState('');

  const getInputValue = e => {
    setInputValue(e.target.value);
  }

  const getNewTodo = () => {
    const newTodo = {
      id: uuidv4(),
      task: inputValue,
      complete: false
    }
    saveTodos([newTodo, ...todos]);
  }

  return (
    <>
      {modalOpen &&
        <Section>
          <Div>
            <h3>Agrega una tarea nueva</h3>
            <InputText
              type='text'
              placeholder='Regar las maticas...'
              onChange={getInputValue}
            />
            <button 
              type='button' 
              className='add-button'
              onClick={getNewTodo}
            >
              Agregar
            </button>
          </Div>
        </Section>
      }
    </>
  )
}
