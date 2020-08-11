import styled from "styled-components";

export const CardWrapper = styled.article`
  display: flex;
  color: #515151;
  padding: 2.5em;
  background-color: ${(props) => {
    if (props.color === "dark") {
      return "#F0EFEF";
    }
  }};

  @media (max-width: 1024px) {
    margin: 0;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    padding: 10px;
    align-items: center;
  }
`;

export const TitleWrapper = styled.div`
  width: 20%;
  text-transform: uppercase;
  font-weight: lighter;
  margin: 0;
  padding: 0;

  @media (max-width: 760px) {
    width: 100%;
    text-align: center;
    font-size: 1.2em;
  }
`;

export const TextWrapper = styled.div`
  width: 80%;

  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
