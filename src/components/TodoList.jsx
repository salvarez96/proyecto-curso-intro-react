import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 300px;
  padding-top: 20px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  background-color: var(--dark-purple);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  
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

export default function TodoList({ children }) {
  return(
    <Section>
      { children }
    </Section>
 );
}
