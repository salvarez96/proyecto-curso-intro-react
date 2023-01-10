import React, { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 15px;
  background-color: var(--dark-purple);

  & .active {
    color: var(--orange);
    text-decoration: underline;
  }
`;

const P = styled.p`
  &:hover {
    color: var(--orange);
    cursor: pointer;
  }
`;

const text = [
  {
    text: 'Todos',
    disabled: false,
  },
  {
    text: 'Completados',
    disabled: true
  },
  {
    text: 'Pendientes',
    disabled: true
  },
];

export default function TodoFilter({ filterValue }) {
  
  const [filters, setFilters] = useState(text);
  
  const onClickActive = (key) => {
    const taskKey = filters.map(item => {
      if (key === item.text) {
        item.disabled = false; 
        filterValue(item.text);
      } else {
        item.disabled = true;
      }
      return item;
    })
    setFilters(taskKey);
  }

  return(
    <Div >
      {filters.map(item => (
        <P
          key={item.text}
          className={!item.disabled ? 'active' : ''} 
          onClick={() => onClickActive(item.text)}
        >
          { item.text }
        </P>
      ))}
    </Div>
 );
}
