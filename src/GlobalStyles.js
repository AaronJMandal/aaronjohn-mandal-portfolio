import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap');

    html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    height: 100%;
    text-align: center;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 100;
    font-style: normal;
    background: #1f202e;
    color: ivory;
    scroll-behavior: smooth;
    }


  .container {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100vh;
  }

  .page-component {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;
  }



`;

export default GlobalStyles;
