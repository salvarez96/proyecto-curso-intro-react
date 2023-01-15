import React from 'react'
import styled from 'styled-components';
import { TodoGlobalContext } from '../context/Provider';
import { v4 as uuidv4 } from 'uuid';

const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
`;

const Form = styled.form`
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

  & label {
    font-size: calc(18rem / 16);
    font-weight: bold;
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

const TextArea = styled.textarea`
  width: 100%;
  min-height: 55px;
  margin: 15px 0;
  border: 2px double var(--pastel-blue);
  border-radius: 10px;
  padding: 10px;
  background-color: var(--very-dark-purple);
  font-family: inherit;
  color: white;
  font-size: calc(17rem / 16);

  &:focus-visible {
    outline: none;
    border-color: var(--orange);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(26, 27, 75, 0.5);
    border-radius: 5px;
  }
  
  &::-webkit-scrollbar {
    background-color: rgba(255, 255, 255, 0.2);
    width: 12px;
    border-bottom-right-radius: 8px;
  }
`;

export default function Modal() {

  const {modalOpen, setModalOpen, todos, saveTodos} = React.useContext(TodoGlobalContext);

  const [inputValue, setInputValue] = React.useState('');

  const getInputValue = e => {
    setInputValue(e.target.value);
  }

  const getNewTodo = e => {
    e.preventDefault();
    if(inputValue.length > 0) {
      const newTodo = {
        // con uuidv4 puedo crear ids únicos
        id: uuidv4(),
        task: inputValue.trim(),
        complete: false
      }
      saveTodos([newTodo, ...todos]);
    }
    setInputValue('');
    setModalOpen(!modalOpen);
  }

  return (
    <>
      {modalOpen &&
        <Section>
          <Form onSubmit={getNewTodo}>
            <label htmlFor='text-area'>Agrega una tarea nueva</label>
            <TextArea
              type='text'
              id='text-area'
              placeholder='Tratar de conquistar el mundo. . .'
              onChange={getInputValue}
              value={inputValue}
            />
            <Button 
              type='submit' 
              className={`add-button${inputValue.length < 1 ? ' disabled' : ' enabled'}`}
              disabled={inputValue.length < 1}
            >
              Agregar
            </Button>
          </Form>
        </Section>
      }
    </>
  )
}
