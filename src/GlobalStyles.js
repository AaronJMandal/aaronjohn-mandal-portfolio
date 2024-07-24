import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap');

    html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow-x: hidden;
    text-align: center;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 100;
    font-style: normal;
    background: #1f202e;
    color: ivory;
    }

    pfp {
        border-radius: 50px
    }
`;

export default GlobalStyles;
