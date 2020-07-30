import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    outline: 0;
    padding: 0;
    box-sizing:border-box;
  }

  body{
    background-color:#fff;
    color:#fff;
    font-size:1.1em;
    line-height:1.5;
    text-align:center;
  }

  img{
    display: block;
    height: auto;
  }

  h1,h2,h3{
    margin:0;
    padding:1em 0; 
  }

  p{
    margin:0;
    padding:1em 0;
  }
`;
