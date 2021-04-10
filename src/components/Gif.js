import React, { useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Gif = ({ url, height, width }) => {
  const iconRef = useRef(null);
  const ColorChangeHandler = () => {
    iconRef.current.style.color = "green";
    iconRef.current.style.fontSize = "3vw";
    setTimeout(() => {
      iconRef.current.removeAttribute("style");
    }, 600);
  };
  return (
    <StyGif height={height} width={width}>
      <img src={url} alt="Gif Cargado" />
      <div ref={iconRef}>
        <CopyToClipboard text={url}>
          <FontAwesomeIcon onClick={ColorChangeHandler} icon={faShareSquare} />
        </CopyToClipboard>
      </div>
    </StyGif>
  );
};

const StyGif = styled.div`
  margin-top: 1rem;
  background: #fba333;
  border: outset #af6200 8px;
  width: 25vw;
  height: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  img {
    align-self: center;
    justify-self: center;
    width: ${(props) => (props.height < props.width ? "100%" : "auto")};
    height: ${(props) =>
      props.height > props.width
        ? "80%"
        : props.height === props.width
        ? "80%"
        : "auto"};
    max-height: 80%;
    object-fit: cover;
  }
  div {
    display: flex;
    color: #af6200;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: 4vw;
    margin-bottom: 0.5vw;
    font-size: 2.5vw;
  }
  svg {
    transition: all 100ms ease;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      transition: all 200ms ease;
      transform: rotate(10deg);
    }
  }
  @media screen and (max-width: 768px) {
    width: 90vw;
    height: 90vw;
    div {
      font-size: 4vw;
      width: 40vw;
      height: 10vw;
      margin-bottom: 5vw;
    }
    svg {
      font-size: 10vw;
    }
  }
`;

export default Gif;
