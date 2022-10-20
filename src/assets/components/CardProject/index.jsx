import React from "react";
import { Container } from "./style";
import { AiFillGithub } from "react-icons/ai";

const CardProject = ({ title, img, pathgif, pathgithub, desc, tech }) => {
  return (
    <Container>
      <h2>
        <a
          href={pathgif}
          target="_blank"
        >
          {title}
        </a>
      </h2>
      <img src={img} alt="" />
      <p>
        {desc}
      </p>
      <div>
      <span>{tech}</span>
      <a href={pathgithub} target='_blank'>
      <AiFillGithub size={"30px"} />
      </a>
      </div>
    </Container>
  );
};

export default CardProject;
