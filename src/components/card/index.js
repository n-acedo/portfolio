import React from "react";

import { CardWrapper, TitleWrapper, TextWrapper } from "./style";

function Card(props) {
  return (
    <CardWrapper color={props.color}>
      <TitleWrapper>
        <h4> {props.title} </h4>
      </TitleWrapper>

      <TextWrapper>
          <p> {props.description} </p>
          <p> {props.description2} </p>
      </TextWrapper>

    </CardWrapper>
  );
}

export default Card;
