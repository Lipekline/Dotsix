import { createGlobalStyle } from "styled-components";

export const fonts = {
  karla: "Karla",
  jetBrains: "JetBrains Mono",
};

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    img{
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    body {
        background: #312e38;
        color: #fff;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'JetBrains Mono', serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-family: 'Karla', serif;
        font-weight: 800;
    }

    button {
        cursor: pointer;
    }
`;
