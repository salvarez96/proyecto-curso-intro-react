import React from 'react'
import { TodoGlobalContext } from '../context/Provider';

export default function Modal() {

  const {searchedTodos} = React.useContext(TodoGlobalContext);

  return (
    <>
      <p>{searchedTodos[0]?.task}</p>
    </>
  )
}
