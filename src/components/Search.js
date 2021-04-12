import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";

const Search = ({ setGifs }) => {
  const [searching, setSearching] = useState(false);
  const inputRef = useRef(null);
  const enterHandler = (e) => {
    if (e.code === "Enter") {
      e.preventDefault();
      SearchHandler();
    }
  };
  const SearchHandler = () => {
    let searchWord = inputRef.current.value;
    if (searchWord === "") return;
    setSearching(true);
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=BfbPZGK6vQqT1aHDeHzE0SjBg2be4cil&q=${searchWord}&limit=12&offset=0&rating=g&lang=es`
    )
      .then((data) => data.json())
      .then((data) => {
        setGifs(data.data);
        inputRef.current.value = "";
        setTimeout(() => {
          setSearching(false);
        }, 1000 * 2);
      });
  };
  return (
    <StySearch searching={searching}>
      <input
        onKeyDown={enterHandler}
        ref={inputRef}
        type="text"
        placeholder="Buscar.."
      />
      <div onClick={SearchHandler}>
        <FontAwesomeIcon icon={searching ? faSpinner : faSearch} />
      </div>
    </StySearch>
  );
};

const StySearch = styled.div`
  margin-top: 5vw;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    height: 5vw;
    width: 30vw;
    font-size: 2vw;
    padding: 0.5vw;
  }
  div {
    margin-left: 0.5vw;
    border: solid 0.4vw #af6200;
    background: #fba333;
    height: 5vw;
    width: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2vw;
    cursor: pointer;
    transition: 200ms all ease;
    &:hover {
      background: #af6200;
    }
    svg {
      animation: ${(props) =>
        props.searching ? "spin 1s linear infinite" : "none"};
    }
    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
  }
  @media screen and (max-width: 768px) {
    height: 30vw;
    input {
      height: 20vw;
      width: 60vw;
      font-size: 8vw;
    }
    div {
      border-width: 1vw;
      height: 20vw;
      width: 20vw;
      font-size: 8vw;
    }
  }
`;

export default Search;
