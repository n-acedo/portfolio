import styled from "styled-components";

export const MainWrapper = styled.div``;

export const CardsWrapper = styled.section`
  margin-left: 35%;
  max-height: 100vh;
  overflow-y: scroll;

  @media (max-width: 1024px) {
    margin: 0;
    overflow-y: visible;
  }
`;

export const Skills = styled.ul`
  list-style: none;
  padding: 8px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  li {
    margin: 0 5px 5px 0;
    padding: 5px 15px;
    font-weight: 700;
    background-color: #383838;
    color: #ffff;
  }

  li:nth-of-type(5),
  li:nth-of-type(6),
  li:nth-of-type(7) {
    background-color: #515151;
  }

  li:nth-of-type(8),
  li:nth-of-type(9) {
    background-color: #9e9e9e;
  }

  @media (max-width: 760px) {
    justify-content: center;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  max-width: 100;
  justify-content: space-between;

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    div:nth-of-type(3) {
      padding-bottom: 0;
    }
  }
`;

export const Info = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  p {
    margin: 0;
    margin-bottom: 30px;
  }

  @media (max-width: 760px) {
    width: 100%;
    padding-bottom: 55px;

    p {
      margin-bottom: 10px;
    }
  }
`;

export const Surge = styled.a`
  :hover {
    transform: scale(1.1);
  }
`;

export const EducationImg = styled.img`
  width: 60%;
  object-fit: contain;

  @media (max-width: 760px) {
    width: 50%;
  }
`;

export const ProjectImg = styled.img`
  height: 50px;
  margin-bottom: 45px;
`;

export const Button = styled.button`
  background-color: #bf5b04;
  border-radius: 20px;
  padding: 8px 15px;
  color: #fff;
  cursor: pointer;

  :focus {
    background-color: #976243;
  }
`;
