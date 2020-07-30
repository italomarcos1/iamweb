import styled from "styled-components";

import banner from "./assets/banner.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  width: 100%;
  height: 600px;
  color: #fff;
  text-align: center;
  div {
    &.bg {
      width: 100%;
      height: 600px;
      position: absolute;
      background: #fff url(${banner});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -1;
    }
    &.content-wrap {
      width: 100%;
      height: 600px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      h1 {
        margin-left: 200px;
        margin-top: 50px;

        font-weight: bold;
        font-size: 40px;
        font-family: "Roboto";
        letter-spacing: 0px;
        text-transform: uppercase;
        color: #141530;
      }

      > button {
        margin-left: 200px;

        width: 408px;
        height: 70px;
        background: #145ca7;
        border: 2px solid #145ca7;
        border-radius: 35px;
        text-align: center;
        font-weight: bold;
        font-size: 24px;
        font-family: "Roboto";
        letter-spacing: 0px;
        color: #ffffff;
      }
    }
  }
`;

export const Main = styled.main`
  /* @media (min-width: 700px) {
    display: none;
  } */
`;

export const Options = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 668px;
  flex: 1;
  padding: 40px auto;
  align-items: center;
  justify-content: space-around;

  h1 {
    width: 784px;
    height: 48px;
    font-weight: bold;
    font-size: 40px;
    font-family: "Roboto";
    letter-spacing: 0px;
    color: #1e1e1e;
    text-transform: uppercase;
  }

  > small {
    font-size: 20px;
    color: #333;
    text-align: center;
    font-family: "Roboto";
    text-align: center;
    letter-spacing: 0px;
    color: #535353;
  }

  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;

    li {
      width: 361px;
      height: 352px;
      background: #ffffff;
      border: 1px solid #eeeeee;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      padding: 10 25px;

      img {
        width: 132px;
        height: 132px;
      }

      strong {
        text-align: center;
        font-family: "Roboto";
        font-size: 20px;
        letter-spacing: 0px;
        color: #1e1e1e;
        text-transform: uppercase;
      }

      small {
        text-align: center;
        font-family: "Roboto";
        font-size: 16px;
        letter-spacing: 0px;
        color: #535353;
      }

      & + li {
        margin-left: 30px;
      }
    }
  }
`;

export const Highlight = styled.section`
  display: flex;
  width: 100%;
  height: 373px;
  background: #f3f6f6;
  flex: 1;
  padding: 56px auto;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  div {
    display: flex;
    flex-direction: column;
    width: 523px;
    height: 303px;
    align-items: center;
    justify-content: space-between;

    h1 {
      width: 784px;
      height: 48px;
      font-weight: bold;
      font-size: 36px;
      font-family: "Roboto";
      letter-spacing: 0px;
      color: #1e1e1e;
      text-transform: uppercase;
    }

    > small {
      font-size: 18px;
      color: #333;
      text-align: left;
      font-family: "Roboto";
      letter-spacing: 0px;
      color: #535353;
    }

    button {
      width: 408px;
      height: 70px;
      background: #145ca7;
      border: 2px solid #145ca7;
      border-radius: 35px;
      text-align: center;
      font-weight: bold;
      font-size: 20px;
      font-family: "Roboto";
      letter-spacing: 0px;
      color: #ffffff;
    }

    img {
      width: 563px;
      height: 575px;
    }
  }
`;
