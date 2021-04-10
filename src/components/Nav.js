import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        Buenos días <FontAwesomeIcon icon={faSmile} />
      </h1>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100vw;
  min-height: 15vh;
  background: #fb8c00;
  border-top: 1vw solid #af6200;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 3rem;
  }
`;

export default Nav;
