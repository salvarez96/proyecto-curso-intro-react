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
`;

const Button = styled.button`
  &.add-button {
    padding: calc(10rem/16) 22px; 
    font-family: inherit;
    font-size: calc(15rem / 16);
    border-radius: 10px;
    background-color: var(--dark-purple);
    color: white;

    &.enabled {
      border: 1px solid var(--orange);
      
      &:hover {
        cursor: pointer;
        background-color: var(--orange);
        color: black;
      }
    }
  }
  
  &.disabled {
    border: 1px solid transparent;
    opacity: 0.7;
  }
`;

export default function Modal() {

  const {modalOpen, todos, saveTodos} = React.useContext(TodoGlobalContext);

  const [inputValue, setInputValue] = React.useState('');

  const getInputValue = e => {
    setInputValue(e.target.value);
  }

  const getNewTodo = () => {
    if(inputValue.length > 0) {
      const newTodo = {
        id: uuidv4(),
        task: inputValue.trim(),
        complete: false
      }
      saveTodos([newTodo, ...todos]);
    }
    setInputValue('');
  }

  return (
    <>
      {modalOpen &&
        <Section>
          <Div>
            <h3>Agrega una tarea nueva</h3>
            <InputText
              type='text'
              placeholder='Dominar el mundo...'
              onChange={getInputValue}
              value={inputValue}
            />
            <Button 
              type='button' 
              className={`add-button${inputValue.length < 1 ? ' disabled' : ' enabled'}`}
              onClick={getNewTodo}
              disabled={inputValue.length < 1}
            >
              Agregar
            </Button>
          </Div>
        </Section>
      }
    </>
  )
}
