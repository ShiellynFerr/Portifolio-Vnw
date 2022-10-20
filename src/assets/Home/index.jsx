import React from "react";
import { Container, Section, Image } from "./style";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <Container>
        <div className="box-icons">
         <AiFillGithub size={"70px"} />
          <FaLinkedinIn size={"70px"} />
          <FaTwitter size={"70px"} />
        </div>
        <Section>
         <p>Hola Yo Soy
          <span>Shiellyn.</span>
          </p>
        </Section>
           <Image>
            <img src="./images/me.png" alt="" />
           </Image>
      </Container>
    </>
  );
};

export default Home;
