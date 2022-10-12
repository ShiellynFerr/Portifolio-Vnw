import React from "react";
import { Container } from "./style";

const ContentCard = ({title, text}) => {
  return (
    <Container>
      <h3>
        {title}
      </h3>
      <p>
        {text}
      </p>
    </Container>
  );
};

export default ContentCard;
