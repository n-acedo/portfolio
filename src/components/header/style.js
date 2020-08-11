import styled from "styled-components";
import BlueTexture from "../../assets/blu2.jpg";

export const HeaderWrapper = styled.div`
  color: #ffff;
  background-image: url(${BlueTexture});
  background-size: 100% 100%;
  width: 35%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
  box-shadow: 2px 0px 20px 1px rgba(0, 0, 0, 0.2);
  position: relative;
  text-align: center;
  position: fixed;

  @media (max-width: 1024px) {
    width: 100%;
    height: 80vh;
    background-size: 100%;
    position: relative;
  }

  @media (max-width: 800px) {
    flex-direction: row;
    height: 100%;
    padding: 0;
  }
`;

export const HeaderInfo = styled.div`
  h1 {
    text-transform: uppercase;
    letter-spacing: 5px;
  }

  h4 {
    letter-spacing: 2px;
    font-weight: lighter;
    text-transform: uppercase;
  }

  hr {
    width: 60px;
    border: 1px solid #ffff;
    margin: 35px auto;
  }

  @media (max-width: 800px) {
    width: 60%;

    h1 {
      font-size: 1.5em;
    }

    h4 {
      font-size: 0.8em;
    }
  }
`;

export const StyledPhoto = styled.img`
  height: 60%;
  position: absolute;
  bottom: 0;

  @media (max-width: 800px) {
    height: 100%;
    width: 50%;
    object-fit: contain;
    right: 0;
  }
`;
