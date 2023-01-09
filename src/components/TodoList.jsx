import React from "react";
import styled from "styled-components";

const Section = styled.section`
  max-height: 500px;
  padding-top: 20px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  background-color: var(--dark-purple);
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(26, 27, 75, 0.5);
    border-radius: 5px;
  }
  
  &::-webkit-scrollbar {
    background-color: rgba(255, 255, 255, 0.2);
    width: 12px;
  }
`;

export default function TodoList({ children }) {
  return(
    <Section>
      { children }
    </Section>
 );
}
