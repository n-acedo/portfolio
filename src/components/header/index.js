import React from "react";
import Draw from "../../assets/N_.png";
import { HeaderWrapper, HeaderInfo, StyledPhoto } from "./style";

function Header() {
  return (
    <HeaderWrapper>
      <HeaderInfo>
        <h4> Full Stack Web Developer </h4>
        <h1>Natália Acedo</h1>
        <hr />
      </HeaderInfo>
      <StyledPhoto src={Draw} />
    </HeaderWrapper>
  );
}

export default Header;
