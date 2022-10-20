import React from "react";
import { Container, Section } from "./style";
import ContentCard from "../components/ContentCard";

const Ods = () => {
  return (
    <Container>
      <div className="introduction">
        <h1>Santos Dumont: Objetivos de Desarrollo Sostenible</h1>
        <p>
          Los Objetivos de Desarrollo Sostenible son un llamado mundial a la
          acción para acabar con la pobreza, proteger el medio ambiente y el
          clima, y ​​garantizar que las personas de todo el mundo puedan
          disfrutar de la paz y la prosperidad. Estos son los objetivos a los
          que Naciones Unidas está contribuyendo para que podamos alcanzar la
          Agenda 2030 en Brasil.
        </p>
        <p>Santos Dumont es un barrio ubicado en la ciudad de Guarulhos.</p>
      </div>
      <Section>
        <h2>Como dar os primeiros passos?</h2>
        <div className="cards-onu">
          <div className="card">
            <img src="./images/pobreza.png" alt="ods onu" />
            <ContentCard
              title={
                "Poner fin a la pobreza en todas sus formas en todo el mundo"
              }
              text={
                "Es de suma importancia que toda persona tenga derecho a una alimentación de calidad, sin temor a no tener que comer al día siguiente. Es necesario que los organismos públicos locales brinden la distribución de canastas básicas y calentitas a la población más pobre del barrio."
              }
            />
          </div>
          <div className="card">
            <img src="./images/hambre.png" alt="ods onu" />
            <ContentCard
              title={
                "Poner fin al hambre, lograr la seguridad alimentaria y la mejora de la nutrición y promover la agricultura sostenible"
              }
              text={
                "Es necesario invertir en políticas públicas eficientes, que brinden  programas que ofrezcan empleo, formación profesional y estimulen a los emprendedores locales, para mejorar y mover la economía local."
              }
            />
          </div>
          <div className="card">
            <img src="./images/salud.png" alt="ods onu" />
            <ContentCard
              title={
                "Garantizar una vida sana y promover el bienestar de todos a todas las edades"
              }
              text={
                "Disminuir las tasas de Mortalidad infantil y materna, controlar epidemias como el SIDA y enfermedades transmisibles, garantizar acceso y cobertura universal y de calidad en todos los servicios de salud para lo cual se implementan estrategias de promoción de la salud y prevención de la enfermedad. "
              }
            />
          </div>
          <div className="card">
            <img src="./images/educacion.png" alt="ods onu" />
            <ContentCard
              title={
                "Garantizar una educación inclusiva y equitativa de calidad y promover oportunidades de aprendizaje permanente para todos"
              }
              text={
                "Promover una educación equitativa, inclusiva y de calidad, que favorezcan estilos de vida sostenibles, la promoción de los derechos humanos, la igualdad entre los géneros, una cultura de paz y no violencia. "
              }
            />
          </div>
          <div className="card">
            <img src="./images/igualdad.png" alt="ods onu" />
            <ContentCard
              title={
                "Lograr la igualdad de género y empoderar a todas las mujeres y las niñas"
              }
              text={
                "Requiere adoptar medidas urgentes para eliminar las causas profundas de la discriminación que sigue restringiendo los derechos de las mujeres, tanto en la esfera pública como privada. Entre otras cosas, es necesario modificar las leyes discriminatorias y adoptar otras que promuevan activamente la igualdad."
              }
            />
          </div>
          <div className="card">
            <img src="./images/agua.png" alt="ods onu" />
            <ContentCard
              title={
                "Garantizar la disponibilidad de agua y su gestión sostenible y el saneamiento para todos"
              }
              text={
                "Saneamiento apropiado, así como una gestión sostenible del recurso para toda la población es un imperativo para la humanidad, la reducción del consumo energético de los procesos de tratamiento y de los costos asociados en general, procurando realizar las inversiones apropiadas"
              }
            />
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default Ods;
