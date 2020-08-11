import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #444;
  padding-top: 20px;
  padding-bottom: 15px;
  color: #fff;
  font-weight: lighter;
  display: flex;
  justify-content: center;
`;

export const FooterInfo = styled.div`
  display: flex;
  text-align: center;
  width: 45%;

  p:nth-of-type(1) {
    font-weight: bolder;
    font-size: 20px;
  }

  p:nth-of-type(4) {
    margin-top: 20px;
    font-size: 12px;
  }

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

export const ImageWrapper = styled.div``;

export const ContactImg = styled.img`
  margin: 25px;
  height: 30px;

  :hover {
    transform: scale(1.1);
  }
`;