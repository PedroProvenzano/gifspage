import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Recursive', sans-serif;
    }
    .App{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    body{
        background: white;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    h1{
        font-family: 'New Tegomin', serif;
    }
    h2{
        font-size: 1.3rem;
    }
`;

export default GlobalStyle;
