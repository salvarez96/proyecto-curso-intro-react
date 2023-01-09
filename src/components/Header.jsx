import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  min-height: 75px;
  background: linear-gradient(45deg,var(--very-dark-purple),var(--dark-purple),var(--purple));
  display: grid;
  place-content: center;
`;

export default function Header() {
  return(
    <>
      <HeaderContainer>
        <h2>TODO app</h2>
      </HeaderContainer>
    </>
 );
}
