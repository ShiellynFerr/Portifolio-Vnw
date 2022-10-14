import React from "react";
import CardProject from "../components/CardProject";
import { Container, Section} from "./style";

const Proyectos = () => {
  return (
    <Container>
      <h1>Mi Proyectos</h1>
      <Section>
        <div>
        <CardProject
        title={'Beta Programmers'}
        img={'./images/site-beta.gif'}
        pathgif={'https://shiellynferr.github.io/Beta-Programmers/'}
        desc={'A Beta programmers é um site de uma comunidade feita para mulheres estudantes de tecnologia que desejam aprender a programar'}
        tech={'html, css e Javascript'}
        pathgithub={'https://github.com/ShiellynFerr/Beta-Programmers'}
        />
        <CardProject
        title={'+55 Bistrô'}
        img={'./images/home.gif'}
        pathgif={'https://55-bistro-restaurante-7rynpuw85-brunonasc74.vercel.app/'}
        desc={'O +55 Bistrô é um restaurante fictício especializado em comida brasileira. A aplicação é uma Single Page Application (SPA), utilizando React.js e os endpoints de uma API Rest criada com Node.js e Express.'}
        tech={'html, css Javascript e React'}
        pathgithub={'https://github.com/ShiellynFerr/55-bistro-restaurante'}
        />
        <CardProject
        title={'APOD API'}
        img={'./images/apod.gif'}
        pathgif={'https://shiellynferr.github.io/APOD-NASA-API/'}
        desc={'A nasa oferece uma série de APIs que fornece acesso aos seus projetos e sistemas Astronomy Picture Of The Day(APOD) é uma API que fornece uma foto ou video diariamente para que as pessoas consigam descobrir um pouco mais sobre o espaço'}
        tech={'html, css e Javascript'}
        pathgithub={'https://github.com/ShiellynFerr/APOD-NASA-API'}
        />
        </div>
        <div>
        <CardProject
        title={'Mensagem-Oculta'}
        img={'./images/criptografia.gif'}
        pathgif={'https://shiellynferr.github.io/Criptografe-Mensagem-Oculta/'}
        desc={'Projeto proposto pela Resilia Educação no módulo 2. A aplicação consiste em um codificador/decodificador de cifra de césar e base'}
        tech={'html, css e Javascript'}
        pathgithub={'https://github.com/ShiellynFerr/Criptografe-Mensagem-Oculta'}
        />
        <CardProject
        title={'Landing Page Maze Runner'}
        img={'./images/mazerunner.gif'}
        pathgif={'https://shiellynferr.github.io/Maze-Runner/'}
        desc={'2º desafio da aula de inglês técnico para programadores do curso vai na web, uma landing com o tema de um livro.'}
        tech={'html e css'}
        pathgithub={'https://github.com/ShiellynFerr/Maze-Runner'}
        />
        <CardProject
        title={'legend of legends'}
        img={'./images/lol.gif'}
        pathgif={'https://shiellynferr.github.io/Challenge-League-Of-Legends/'}
        desc={'Página Login League of Legends, com interação em Javascript. Desafio vai na web'}
        tech={'html, css e Javascript'}
        pathgithub={'https://shiellynferr.github.io/Challenge-League-Of-Legends/'}
        />
        </div>
      </Section>
    </Container>
  );
};

export default Proyectos;
